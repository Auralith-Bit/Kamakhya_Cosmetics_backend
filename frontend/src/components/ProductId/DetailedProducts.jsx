import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, Minus, Plus, ShoppingBag, Sparkles, FlaskConical, Droplet, ShieldAlert, ArrowRight, Heart } from 'lucide-react'
import { products as staticProducts } from '../../data/product'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import Curve from '../../assets/Curve.svg'
import ProductImg from '../../assets/ProductImg.svg'
import { getProductDetails, getProducts } from '../../api/products'

const defaultPackSizes = [
  { size: '30 ml', label: 'Standard', desc: 'Standard packaging' },
  { size: '50 ml', label: 'Medium', desc: 'Retail packaging' },
  { size: '100 ml', label: 'Economy', desc: 'Bulk packaging' },
]

const defaultVolumeTiers = [
  { units: 300, price: 5.0, label: 'Standard tier' },
  { units: 500, price: 4.5, label: 'Bulk savings' },
  { units: 1000, price: 3.8, label: 'Wholesale volume' },
]

const defaultTabs = {
  'Clinical Benefits': [
    'Dermatologically tested formula for maximum skin compatibility and safety.',
    'Provides long-lasting nourishment and moisture barrier protection.',
    'Crafted with premium active ingredients for visible, radiant results.'
  ],
  'Key Ingredients': [
    'Enriched with natural extracts and skin-conditioning vitamins.',
    'Formulated without harsh parabens, sulfates, or artificial irritants.',
    'Ethically sourced, high-grade cosmetic ingredients.'
  ],
  'How to use': [
    'Apply an adequate amount evenly over the target surface or skin area.',
    'Gently massage until absorbed. For external use as directed.',
    'Store in a cool, dry place away from direct sunlight.'
  ],
  'Safety Information': [
    'Perform a patch test prior to initial full application.',
    'Avoid direct contact with eyes. Rinse thoroughly with water if contact occurs.',
    'Keep out of reach of children. Consult a specialist for specific sensitivities.'
  ],
}

const tabIcons = {
  'Clinical Benefits': Sparkles,
  'Key Ingredients': FlaskConical,
  'How to use': Droplet,
  'Safety Information': ShieldAlert,
}

const YOU_MAY_ALSO_LIKE_COUNT = 4

// Same card styling as the catalogue's ProductCard, used here for the
// "You May Also Like" recommendation strip.
const RecommendedProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist()
  const productId = product._id || product.id
  const saved = isInWishlist(productId)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
      <div className="relative">
        <span className="absolute top-3 left-3 bg-white/90 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full text-[#CCA466]">
          {product.tag}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleWishlist(productId)
          }}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          className={`absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow transition-colors ${
            saved ? 'text-[#E38F2E]' : 'text-gray-500 hover:text-[#E38F2E]'
          }`}
        >
          <Heart
            className="w-4 h-4"
            fill={saved ? 'currentColor' : 'none'}
          />
        </button>

      <Link to={`/products/${productId}`} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
      </Link>
    </div>

    <div className="p-4">
      <Link to={`/products/${productId}`}>
        <h4 className="text-center font-serif text-gray-800 mb-1 hover:text-[#2E3192] transition">
          {product.title}
        </h4>
      </Link>
      <p className="text-center text-xs text-gray-500 mb-3 line-clamp-2">
        {product.desc}
      </p>

      <div className="flex justify-center gap-6 text-xs text-gray-600 mb-4">
        <div className="text-center">
          <p className="text-[#CCA466]">MOQ</p>
          <p className="font-medium">{product.moq}</p>
        </div>
        <div className="text-center">
          <p className="text-[#CCA466]">Lead Time</p>
          <p className="font-medium">{product.lead}</p>
        </div>
      </div>

      <Link
        to={`/products/${productId}`}
        className="w-full flex items-center justify-center gap-2 border border-[#2E3192] text-[#2E3192] rounded-full py-2 text-sm font-medium hover:bg-[#2E3192] hover:text-white transition"
      >
        View Products
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
  )
}

const ProductDetailed = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [recommendedProducts, setRecommendedProducts] = useState([])

  useEffect(() => {
    let isMounted = true
    async function loadData() {
      setLoading(true)
      try {
        let fetchedProduct = null

        // If it's a valid MongoDB ObjectId or backend ID
        if (id && /^[0-9a-fA-F]{24}$/.test(id)) {
          fetchedProduct = await getProductDetails(id).catch(() => null)
        }

        // Check static products fallback if not found
        if (!fetchedProduct) {
          const staticMatch = staticProducts.find((p) => String(p.id) === id)
          if (staticMatch) {
            fetchedProduct = {
              ...staticMatch,
              _id: String(staticMatch.id),
              images: [staticMatch.image || ProductImg],
            }
          }
        }

        // If still not found, try fetching from backend directly
        if (!fetchedProduct && id) {
          fetchedProduct = await getProductDetails(id).catch(() => null)
        }

        if (isMounted) {
          setProduct(fetchedProduct)
        }

        // Fetch recommended products
        const recResponse = await getProducts({ limit: 12 }).catch(() => null)
        if (isMounted && recResponse?.products?.length > 0) {
          const currentId = fetchedProduct?._id || id
          const otherProducts = recResponse.products.filter((p) => p._id !== currentId && p.id !== currentId)
          
          // Match same category or brand first
          const sameCat = otherProducts.filter(
            (p) => p.category === fetchedProduct?.category || p.brand === fetchedProduct?.brand
          )
          const remaining = otherProducts.filter((p) => !sameCat.includes(p))
          setRecommendedProducts([...sameCat, ...remaining].slice(0, YOU_MAY_ALSO_LIKE_COUNT))
        } else if (isMounted) {
          setRecommendedProducts(staticProducts.slice(0, YOU_MAY_ALSO_LIKE_COUNT))
        }
      } catch (err) {
        if (isMounted) {
          const staticMatch = staticProducts.find((p) => String(p.id) === id) || staticProducts[0]
          setProduct(staticMatch)
          setRecommendedProducts(staticProducts.slice(1, YOU_MAY_ALSO_LIKE_COUNT + 1))
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadData()
    return () => { isMounted = false }
  }, [id])

  const packSizes = product?.packSizes?.length ? product.packSizes : defaultPackSizes
  const volumeTiers = product?.volumeTiers?.length ? product.volumeTiers : defaultVolumeTiers
  const tabs = product?.tabs && Object.keys(product.tabs).length ? product.tabs : defaultTabs

  const [activeImage, setActiveImage] = useState(0)
  const [selectedPack, setSelectedPack] = useState(0)
  const [selectedVolume, setSelectedVolume] = useState(0)
  const [batches, setBatches] = useState(1)
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0])
  const [addedToast, setAddedToast] = useState(false)
  const { addToCart } = useCart()

  // Reset selection state whenever the product id changes
  useEffect(() => {
    setActiveImage(0)
    setSelectedPack(0)
    setSelectedVolume(0)
    setBatches(1)
    setActiveTab(Object.keys(tabs)[0])
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = () => {
    if (!product) return
    const activePack = packSizes[selectedPack] ?? packSizes[0]
    const vol = volumeTiers[selectedVolume] || volumeTiers[0]
    const calculatedUnits = vol?.units ? vol.units * batches : 500 * batches
    const calculatedPrice = vol?.price != null ? (vol.price * calculatedUnits) : 3860
    const itemImg = (product.images && product.images.length > 0) ? product.images[0] : (product.image || ProductImg)

    addToCart({
      id: product._id || product.id,
      name: product.title,
      size: `${activePack.size} · ${vol?.units?.toLocaleString() || 500} units/batch`,
      packSize: activePack.size,
      unitPrice: vol?.price || 0,
      unitsPerBatch: vol?.units || 500,
      quantity: batches,
      totalUnits: calculatedUnits,
      price: calculatedPrice,
      image: itemImg,
    })

    setAddedToast(true)
    setTimeout(() => setAddedToast(false), 2500)
  }

  // Keep browser title updated
  useEffect(() => {
    if (product?.title) {
      document.title = `${product.title} | Kamakhya`
    }
  }, [product])

  const volume = volumeTiers[selectedVolume] || volumeTiers[0]
  const totalUnits = volume?.units ? volume.units * batches : 0
  const orderTotal = volume?.price != null ? (volume.price * volume.units * batches).toFixed(2) : null

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FCF9F2]">
        <div className="w-10 h-10 border-4 border-[#2E3192] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 font-poppins text-sm">Loading product specifications...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FCF9F2]">
        <p className="text-gray-600 font-poppins">Product not found.</p>
        <Link to="/products" className="text-[#2E3192] font-medium underline">
          Back to Catalogue
        </Link>
      </div>
    )
  }

  const activePack = packSizes[selectedPack] ?? packSizes[0]
  const imagesList = product.images?.length > 0 ? product.images : [product.image || ProductImg]

  return (
    <div className="bg-[#FCF9F2] min-h-screen font-poppins">

      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Image Section  */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-4 bg-white">
            <img
              src={imagesList[activeImage] || imagesList[0]}
              alt={product.title}
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {imagesList.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1} of ${product.title}`}
                aria-pressed={activeImage === i}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 shrink-0 bg-white transition ${
                  activeImage === i ? 'border-orange-400 shadow-sm' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info + configurator */}
        <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <p className="tracking-widest font-poppins text-[#E38F2E] mb-1 font-semibold">{product.tag}</p>
          <div className='h-0.5 w-20 mb-5 bg-[#E38F2E] rounded-full' />
          <h2 className="text-3xl tracking-wider font-playfair font-bold text-[#2E3192] mb-2">{product.title}</h2>
          <p className="text-sm text-[#666666] mb-4 leading-relaxed">{product.desc}</p>

          {product.notes?.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2">Product Notes</p>
              <ul className="space-y-1.5">
                {product.notes.map((note, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-poppins text-[#666666]">
                    <CheckCircle2 className="w-4 h-4 text-[#CCA466]" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pack size */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
              <span className="w-6 h-6 rounded-full font-poppins bg-[#2E3192] text-white text-xs flex items-center justify-center">1</span>
              Select Pack Size
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {packSizes.map((pack, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPack(i)}
                  aria-pressed={selectedPack === i}
                  className={`text-left p-3 rounded-xl border relative transition ${
                    selectedPack === i ? 'border-orange-400 bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {selectedPack === i && (
                    <CheckCircle2 className="w-4 h-4 text-[#E38F2E] absolute top-3 right-3" />
                  )}
                  <p className="font-serif font-semibold text-[#2E3192]">{pack.size}</p>
                  <p className="text-xs text-[#E38F2E] mb-1">{pack.label}</p>
                  <p className="text-xs text-gray-500">{pack.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Order volume */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#2E3192] text-white text-xs flex items-center justify-center">2</span>
              Select Order Volume
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {volumeTiers.map((tier, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVolume(i)}
                  aria-pressed={selectedVolume === i}
                  className={`text-left p-3 rounded-xl border relative transition ${
                    selectedVolume === i ? 'border-[#E38F2E] bg-orange-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {selectedVolume === i && (
                    <CheckCircle2 className="w-4 h-4 text-orange-400 absolute top-3 right-3" />
                  )}
                  <p className="font-serif font-semibold text-[#2E3192]">
                    {tier.custom ? `${tier.units.toLocaleString()}+ units` : `${tier.units} units`}
                  </p>
                  <p className="text-xs font-poppins text-[#E38F2E] mb-1">
                    {tier.custom ? tier.label : `NRs ${tier.price.toFixed(2)}/unit`}
                  </p>
                  <p className="text-xs text-gray-500">{tier.custom ? 'Custom pricing' : tier.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Batches */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#2E3192] text-white text-xs flex items-center justify-center">3</span>
              Select Number of Batches
            </p>
            <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setBatches((b) => Math.max(1, b - 1))}
                  aria-label="Decrease number of batches"
                  className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-lg" aria-live="polite">{batches}</span>
                <button
                  onClick={() => setBatches((b) => b + 1)}
                  aria-label="Increase number of batches"
                  className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500">
                {volume?.units} units × {batches} batch{batches > 1 ? 'es' : ''}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#2E3192] text-white rounded-xl p-5 mb-5">
            <div className="flex justify-between mb-3">
              <div>
                <p className="text-orange-300 text-xs mb-1">Order Configuration</p>
                <p className="font-serif font-semibold">{activePack.size}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{volume?.price != null ? `NRs ${volume.price.toFixed(2)}` : '—'}</p>
                <p className="text-xs text-orange-200">per unit</p>
              </div>
            </div>
            <hr className="border-white/20 mb-3" />
            <div className="flex justify-between">
              <div>
                <p className="text-orange-300 text-xs mb-1">Total units</p>
                <p className="font-bold">{totalUnits}</p>
                <p className="text-xs text-orange-200">{volume?.units} x {batches}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-orange-200 mb-1">order total</p>
                <p className="font-bold text-orange-300 text-lg">
                  {orderTotal ? `NRs ${Number(orderTotal).toLocaleString()}` : 'Request Quote'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 max-sm:grid-cols-1">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex items-center justify-center font-poppins text-white text-xs rounded-lg py-3 px-4 font-semibold transition-all text-center cursor-pointer active:scale-95 border-none shadow-sm ${
                addedToast
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'bg-[#2E3192] hover:bg-[#252775]'
              }`}
            >
              <ShoppingBag className="w-4 h-4 mr-2 shrink-0" />
              {addedToast ? 'Added to Order ✓' : 'Add to Order'}
            </button>
            <Link
              to="/checkout"
              className="flex items-center justify-center border-2 border-[#CCA466] font-poppins text-[#E38F2E] text-xs rounded-lg py-2.5 px-4 font-semibold hover:bg-[#CCA466]/10 transition text-center no-underline"
            >
              Review Cart & Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 pb-16">
        <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto">
          {Object.keys(tabs).map((tabName) => {
            const Icon = tabIcons[tabName] || Sparkles
            return (
              <button
                key={tabName}
                onClick={() => setActiveTab(tabName)}
                aria-pressed={activeTab === tabName}
                className={`flex items-center gap-2 pb-3 px-1 whitespace-nowrap text-sm font-medium border-b-2 transition ${
                  activeTab === tabName
                    ? 'border-orange-400 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tabName}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tabs[activeTab]?.length > 0 ? (
            tabs[activeTab].map((point, i) => (
              <div key={i} className="border border-[#E8D6BA] bg-[#FCFAF7] rounded-xl p-4 text-sm text-gray-700">
                <span className="text-orange-500 font-semibold mr-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {point}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No details available.</p>
          )}
        </div>
      </div>

      {/* Business Support Section  */}
      <div className='w-full bg-[#151642] py-14'>
        <div className='max-w-6xl mx-auto px-5 sm:px-10 flex flex-col lg:flex-row justify-between items-center gap-8'>
          {/* Left Section */}
          <div className='flex flex-col text-white gap-3 max-w-2xl'>
            <h2 className='font-playfair text-2xl md:text-3xl leading-tight'>
              Need product documentation before you configure an order?
            </h2>
            <p className='text-white/70 font-poppins text-sm '>
              For verified wholesale buyers, our business team can guide the appropriate technical documentation, packaging compatibility and sample pathway.
            </p>
          </div>

          {/* Right Section - button */}
          <div className='shrink-0'>
            <Link
              to={"/bulk-quote"}
              className='inline-flex items-center gap-2 bg-[#CCA466] px-10 py-2 rounded-lg text-[#151642] font-poppins hover:bg-[#b8925a] text-sm transition-colors no-underline font-semibold'
            >
              Contact Business Support
              <ArrowRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>

      {/* You May Also Like Section  */}
      <div>
        <div className="flex flex-col items-center justify-center py-14 sm:py-16 lg:py-20 px-4">
          <h2 className='text-[#E38F2E] uppercase text-xs font-semibold tracking-widest mb-1'>You May Also Like</h2>
          <h1 className='text-3xl text-[#2E3192] tracking-wide font-playfair font-bold text-center'>Find Your Next Beauty Essential</h1>
          <div className="my-2"><img src={Curve} alt="" /></div>
          <p className='font-poppins text-center text-[#666666] max-w-3xl mx-auto text-sm leading-relaxed'>
            Explore more skincare and beauty favorites, thoughtfully selected to complement your routine and elevate your everyday care.
          </p>
        </div>

        <div className="px-5 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recommendedProducts.map((recProduct) => (
              <RecommendedProductCard key={recProduct._id || recProduct.id} product={recProduct} />
            ))}
          </div>

          <div className="flex justify-center mt-10 pb-14 sm:pb-16 lg:pb-20">
            <Link
              to="/products"
              className="flex items-center gap-2 border border-[#2E3192] text-[#2E3192] rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#2E3192] hover:text-white transition no-underline"
            >
              Explore All Collections
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetailed