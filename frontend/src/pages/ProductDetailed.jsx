import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products as staticProducts } from '../data/product'
import TopBanner from '../components/ProductId/TopBanner'
import ProductDetailed from '../components/ProductId/DetailedProducts'
import { getProductDetails } from '../api/products'

const ProductDetails = () => {
  const { id } = useParams()
  const [productTitle, setProductTitle] = useState("")

  useEffect(() => {
    let isMounted = true
    if (id) {
      // First check static products
      const staticProduct = staticProducts.find((p) => String(p.id) === id)
      if (staticProduct) {
        setProductTitle(staticProduct.title)
      } else {
        getProductDetails(id)
          .then((data) => {
            if (isMounted && data?.title) {
              setProductTitle(data.title)
            }
          })
          .catch(() => {})
      }
    }
    return () => { isMounted = false }
  }, [id])

  return (
    <>
      <TopBanner title={productTitle} />
      <ProductDetailed />
    </>
  )
}

export default ProductDetails
