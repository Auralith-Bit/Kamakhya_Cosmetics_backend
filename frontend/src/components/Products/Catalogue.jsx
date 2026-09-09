import React, { useState, useMemo, useEffect } from 'react'
import { Search, Headphones, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { products as staticProducts } from '../../data/product'
import { getProducts } from '../../api/products'
import ProductCard from './ProductCard'

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
                className="w-9 h-9 mr-[100px] flex items-center justify-center rounded-full border border-[#A1A2CE] bg-[#F5F5FA] text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
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
                        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-lg border text-sm font-medium transition ${
                            page === currentPage
                                ? 'bg-[#2E3192] border-[#2E3192] !text-white'
                                : 'bg-white border-[#7779B8] text-black hover:border-[#2E3192]'
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 ml-[100px] flex items-center justify-center rounded-full border border-[#A1A2CE] bg-[#F5F5FA] text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
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

    const allProductList = dbProducts.length > 0 ? dbProducts : staticProducts

    // Counts how many products match a given (term, brand, category, type) combo.
    // An empty string means "no filter for that facet".
    const countProducts = (term, brand, category, type) =>
        allProductList.filter((p) =>
            (p.title || "").toLowerCase().includes(term.toLowerCase()) &&
            (brand === '' || p.brand === brand) &&
            (category === '' || p.category === category) &&
            (type === '' || p.type === type)
        ).length

    // Facet counts: each option's count respects search + the other sections'
    // selections, so the numbers reflect what selecting that option would yield.
    const brandItems = useMemo(() =>
        brands.map((brand) => ({
            name: brand,
            count: countProducts(search, brand, selectedCategory, selectedType),
        })), [search, selectedCategory, selectedType])

    const categoryItems = useMemo(() =>
        currentCategories.map((category) => ({
            name: category,
            count: countProducts(search, selectedBrand, category, selectedType),
        })), [search, selectedBrand, currentCategories, selectedType])

    const typeItems = useMemo(() =>
        productTypes.map((type) => ({
            name: type,
            count: countProducts(search, selectedBrand, selectedCategory, type),
        })), [search, selectedBrand, selectedCategory])

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
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                <defs>
                    <clipPath id="figureCardImageClip" clipPathUnits="objectBoundingBox">
                        <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
                    </clipPath>
                </defs>
            </svg>
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 bg-white rounded-2xl p-5 h-fit lg:ml-4">
                <button
                    onClick={() => setFiltersOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between lg:hidden"
                >
                    <span className="flex items-center gap-2 font-semibold text-gray-800">
                        <SlidersHorizontal className="w-4 h-4 font-playfair " />
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
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none"
                        />
                    </div>

                    <FilterSection
                        title="Brand"
                        items={brandItems}
                        selected={selectedBrand}
                        onSelect={handleBrandSelect}
                    />

                    {/* Category list swaps based on the selected brand:
                        Royal Luxury -> RoyalCategories, Shine -> ShineCategories.
                        Nothing selected yet -> prompt the user to pick a brand first. */}
                    <FilterSection
                        title="Category"
                        items={categoryItems}
                        selected={selectedCategory}
                        onSelect={handleCategorySelect}
                        emptyMessage="Select a brand to see its categories"
                    />

                    <FilterSection
                        title="Product Type"
                        items={typeItems}
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