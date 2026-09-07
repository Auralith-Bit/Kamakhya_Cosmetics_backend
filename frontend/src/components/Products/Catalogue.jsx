import React, { useState, useMemo, useEffect } from 'react'
import { Search, Heart, ArrowRight, Headphones, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { products as staticProducts } from '../../data/product'
import { getProducts } from '../../api/products'
import { useWishlist } from '../../context/WishlistContext'

const brands = ['Royal Luxury', 'Shine']

const RoyalCategories = [
    'Hair Care', 'Face Care', 'Lip Care',
    'Sun Care', 'Body Care', 'Fragrances'
]

const ShineCategories = [
    'Bathroom Cleaners', 'Floor and Surface Cleaners',
    'Glass Cleaners', 'Kitchen & Dishwashing',
    'Laundry',
]

// Maps a brand name to its category list. Used to decide which
// categories render in the sidebar, and to validate/reset selection
// whenever the brand changes.
const categoriesByBrand = {
    'Royal Luxury': RoyalCategories,
    'Shine': ShineCategories,
}

const productTypes = ['Featured', 'Best Seller', 'Signatured Products']

const PRODUCTS_PER_PAGE = 12

/*
  Single-select filter section.
  `selected` is a single string (or '' for none), not an array.
  Clicking an already-selected item deselects it (clears the group).
  Clicking a different item switches selection to it.
  Kept as <input type="checkbox"> visually per design, but behaves
  like a radio group functionally + via aria-checked/role for a11y.
*/

const FilterSection = ({ title, items, selected, onSelect, emptyMessage }) => (
    <div className="mb-6" role="radiogroup" aria-label={title}>
        <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
        {items.length === 0 && emptyMessage ? (
            <p className="text-xs text-gray-400 italic">{emptyMessage}</p>
        ) : (
            <div className="space-y-2">
                {items.map((name) => {
                    const isChecked = selected === name
                    return (
                        <label
                            key={name}
                            className="flex items-center justify-between text-sm text-gray-600 cursor-pointer"
                        >
                            <span className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    role="radio"
                                    aria-checked={isChecked}
                                    className="rounded border-gray-300"
                                    checked={isChecked}
                                    onChange={() => onSelect(name)}
                                />
                                {name}
                            </span>
                        </label>
                    )
                })}
            </div>
        )}
    </div>
)

const NeedHelpBox = () => (
    <div className="bg-[#FBF6ED] rounded-2xl p-4 text-center">
        <div className="w-10 h-10 mx-auto mb-2 rounded-full border border-orange-300 flex items-center justify-center">
            <Headphones className="w-5 h-5 text-orange-400" />
        </div>
        <p className="font-semibold text-gray-800 text-sm mb-1">
            Need Help?
        </p>
        <p className="text-xs text-gray-500 mb-3">
            We're here for your business sourcing needs.
        </p>
        <Link to='/contact' className="border border-orange-300 text-orange-500 text-xs font-medium rounded-full px-4 py-2 inline-block">
            CONTACT US
        </Link>
    </div>
)

const ProductCard = ({ product }) => {
    const { isInWishlist, toggleWishlist } = useWishlist()
    const productId = product._id || product.id
    const saved = isInWishlist(productId)

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
            <div className="relative">
                <span className="absolute top-3 left-3 bg-white/90 text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full text-[#CCA466]">
                    {product.tag}
                </span>
                {/* Heart button sits above the card-wide Link so it stays independently clickable */}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleWishlist(productId)
                    }}
                    className={`absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow transition-colors ${
                        saved ? 'text-[#E38F2E]' : 'text-gray-500 hover:text-[#E38F2E]'
                    }`}
                    aria-label={saved ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
                >
                    <Heart className="w-4 h-4" fill={saved ? 'currentColor' : 'none'} />
                </button>

                {/* Whole media + text block is clickable, routes to the product detail page */}
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

// Builds a page-number list with ellipsis, e.g. [1, 3, 4, '...', 10]
const getPageNumbers = (current, total) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)

    const pages = [1]

    if (current > 3) pages.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 2) pages.push('...')

    pages.push(total)

    return [...new Set(pages)]
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null

    const pageNumbers = getPageNumbers(currentPage, totalPages)

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {pageNumbers.map((page, idx) =>
                page === '...' ? (
                    <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-9 h-9 flex items-center justify-center rounded-full border text-sm font-medium transition ${
                            page === currentPage
                                ? 'bg-[#2E3192] border-[#2E3192] text-white'
                                : 'border-gray-200 text-gray-600 hover:border-[#2E3192] hover:text-[#2E3192]'
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
                aria-label="Next page"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    )
}

const Catalogue = () => {
    const [searchParams] = useSearchParams()

    const [dbProducts, setDbProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')

    // Single-select state per filter group: '' means "no filter applied"
    const [selectedBrand, setSelectedBrand] = useState(() => searchParams.get('brand') || '')
    const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('category') || '')
    const [selectedType, setSelectedType] = useState('')

    const [sortBy, setSortBy] = useState('newest')
    const [filtersOpen, setFiltersOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    // Load live products from backend
    useEffect(() => {
        let isMounted = true
        async function fetchAll() {
            setLoading(true)
            try {
                const res = await getProducts({ limit: 100 })
                if (isMounted) {
                    if (res?.products?.length > 0) {
                        setDbProducts(res.products)
                    } else {
                        setDbProducts(staticProducts)
                    }
                }
            } catch (err) {
                if (isMounted) {
                    setDbProducts(staticProducts)
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }
        fetchAll()
        return () => { isMounted = false }
    }, [])

    // Sync brand/category if query params change
    useEffect(() => {
        const brandParam = searchParams.get('brand')
        const catParam = searchParams.get('category')
        if (brandParam) setSelectedBrand(brandParam)
        if (catParam) setSelectedCategory(catParam)
    }, [searchParams])

    // Which category list shows in the sidebar depends on the selected brand.
    // No brand selected -> empty list (user picks a brand first).
    const currentCategories = selectedBrand ? categoriesByBrand[selectedBrand] || [] : []

    // Toggles a single-select group: clicking the active value clears it,
    // clicking a new value replaces whatever was selected before.
    const makeSelectHandler = (setter) => (value) => {
        setter((prev) => (prev === value ? '' : value))
        setCurrentPage(1)
    }

    const handleCategorySelect = makeSelectHandler(setSelectedCategory)
    const handleTypeSelect = makeSelectHandler(setSelectedType)

    // Brand selection has a side effect: switching (or clearing) the brand
    // invalidates whatever category was picked, since Royal Luxury and Shine
    // have completely different category lists.
    const handleBrandSelect = (value) => {
        setSelectedBrand((prev) => (prev === value ? '' : value))
        setSelectedCategory('')
        setCurrentPage(1)
    }

    const clearAll = () => {
        setSearch('')
        setSelectedBrand('')
        setSelectedCategory('')
        setSelectedType('')
        setCurrentPage(1)
    }

    const activeFilterCount =
        (selectedBrand ? 1 : 0) + (selectedCategory ? 1 : 0) + (selectedType ? 1 : 0)

    const allProductList = dbProducts.length > 0 ? dbProducts : staticProducts

    const filteredProducts = useMemo(() => {
        let result = allProductList.filter((p) => {
            const matchesSearch = (p.title || "").toLowerCase().includes(search.toLowerCase())
            const pBrand = Array.isArray(p.brand) ? p.brand.join(" ") : (p.brand || "")
            const matchesBrand = !selectedBrand || pBrand.toLowerCase().includes(selectedBrand.toLowerCase())
            const pCategory = Array.isArray(p.category) ? p.category.join(" ") : (p.category || "")
            const matchesCategory = !selectedCategory || pCategory.toLowerCase().includes(selectedCategory.toLowerCase())
            const pType = Array.isArray(p.type) ? p.type.join(" ") : (p.type || "")
            const matchesType = !selectedType || pType.toLowerCase().includes(selectedType.toLowerCase())
            return matchesSearch && matchesBrand && matchesCategory && matchesType
        })

        if (sortBy === 'newest') {
            result = [...result].sort((a, b) => (new Date(b.createdAt || 0)) - (new Date(a.createdAt || 0)))
        } else if (sortBy === 'oldest') {
            result = [...result].sort((a, b) => (new Date(a.createdAt || 0)) - (new Date(b.createdAt || 0)))
        } else if (sortBy === 'az') {
            result = [...result].sort((a, b) => (a.title || "").localeCompare(b.title || ""))
        } else if (sortBy === 'za') {
            result = [...result].sort((a, b) => (b.title || "").localeCompare(a.title || ""))
        }

        return result
    }, [allProductList, search, selectedBrand, selectedCategory, selectedType, sortBy])

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE
        return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
    }, [filteredProducts, currentPage])

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const rangeStart = filteredProducts.length === 0 ? 0 : (currentPage - 1) * PRODUCTS_PER_PAGE + 1
    const rangeEnd = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)

    return (
        <div className="flex flex-col sticky lg:flex-row gap-6 px-5 sm:px-10 lg:px-20 py-8 bg-[#FCF9F2] min-h-screen">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 bg-white rounded-2xl p-5 h-fit lg:ml-4">
                <button
                    onClick={() => setFiltersOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between lg:hidden"
                >
                    <span className="flex items-center gap-2 font-semibold text-gray-800">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filter By
                        {activeFilterCount > 0 && (
                            <span className="bg-[#2E3192] text-white text-[10px] rounded-full px-2 py-0.5">
                                {activeFilterCount}
                            </span>
                        )}
                    </span>
                    <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                            filtersOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>

                <div className="hidden lg:flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Filter By</h3>
                    <button
                        onClick={clearAll}
                        className="text-xs text-orange-500 font-medium"
                    >
                        CLEAR ALL
                    </button>
                </div>

                <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
                    <button
                        onClick={clearAll}
                        className="lg:hidden text-xs text-orange-500 font-medium mb-4"
                    >
                        CLEAR ALL
                    </button>

                    <div className="relative mb-6">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setCurrentPage(1)
                            }}
                            placeholder="Search catalogue"
                            className="w-full bg-gray-50 border border-gray-200 rounded-full pl-9 pr-3 py-2 text-sm focus:outline-none"
                        />
                    </div>

                    <FilterSection
                        title="Brand"
                        items={brands}
                        selected={selectedBrand}
                        onSelect={handleBrandSelect}
                    />

                    {/* Category list swaps based on the selected brand:
                        Royal Luxury -> RoyalCategories, Shine -> ShineCategories.
                        Nothing selected yet -> prompt the user to pick a brand first. */}
                    <FilterSection
                        title="Category"
                        items={currentCategories}
                        selected={selectedCategory}
                        onSelect={handleCategorySelect}
                        emptyMessage="Select a brand to see its categories"
                    />

                    <FilterSection
                        title="Product Type"
                        items={productTypes}
                        selected={selectedType}
                        onSelect={handleTypeSelect}
                    />

                    <div className="hidden lg:block mt-4">
                        <NeedHelpBox />
                    </div>
                </div>
            </aside>

            {/* Products */}
            <main className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center font-poppins justify-between gap-3 mb-4">
                    <p className="text-sm text-[#666666]">
                        Showing  <span className="font-semibold text-[#666666]">{rangeStart}-{rangeEnd}</span> of{' '}
                        <span className="font-semibold text-[#666666]">{filteredProducts.length}</span> Products
                    </p>
                    <div className="flex items-center  gap-2 text-sm">
                        <span className="text-[#121212]">Sort by :</span>
                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value)
                                setCurrentPage(1)
                            }}
                            className="border border-gray-200 rounded-lg px-3 py-1.5 text-[#333333]"
                        >
                            <option value="newest">Newest first</option>
                            <option value="oldest">Oldest first</option>
                            <option value="az">Name: A-Z</option>
                            <option value="za">Name: Z-A</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center gap-3">
                        <div className="w-8 h-8 border-3 border-[#2E3192] border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xs text-gray-500 font-poppins">Loading catalogue...</p>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500 py-16">No products match your filters.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {paginatedProducts.map((product) => (
                                <ProductCard key={product._id || product.id} product={product} />
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}

                <div className="lg:hidden mt-6 max-w-sm mx-auto">
                    <NeedHelpBox />
                </div>
            </main>
        </div>
    )
}

export default Catalogue