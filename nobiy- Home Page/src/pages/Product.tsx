
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { Filter, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const ProductPage = () => {
  const { category } = useParams();
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "Products";
  
  // Sample products data - full dataset
  const allProducts = [
    {
      id: 1,
      name: "Pure Cashmere Sweater",
      price: "$189.99",
      image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?q=80&w=2574&auto=format&fit=crop",
      discount: "-20%"
    },
    {
      id: 2,
      name: "Classic Oxford Shirt",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2525&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Signature Denim Jeans",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2487&auto=format&fit=crop",
      discount: "-15%"
    },
    {
      id: 4,
      name: "Premium Leather Jacket",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2835&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Merino Wool Scarf",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1483103068651-8e1b6abc3aa0?q=80&w=2670&auto=format&fit=crop",
      discount: "-10%"
    },
    {
      id: 6,
      name: "Cotton Chino Pants",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Silk Blend Shirt",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Quilted Puffer Jacket",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=2574&auto=format&fit=crop",
      discount: "-25%"
    },
    {
      id: 9,
      name: "Linen Summer Shirt",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2676&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Wool Blend Coat",
      price: "$259.99",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2574&auto=format&fit=crop",
      discount: "-15%"
    },
    {
      id: 11,
      name: "Cotton T-Shirt",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2480&auto=format&fit=crop",
    },
    {
      id: 12,
      name: "Slim Fit Trousers",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 13,
      name: "Cashmere Beanie",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2574&auto=format&fit=crop",
      discount: "-10%"
    },
    {
      id: 14,
      name: "Fleece Hoodie",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 15,
      name: "Leather Gloves",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1531917115039-433059a7ca4d?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 16,
      name: "Denim Jacket",
      price: "$119.99",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2670&auto=format&fit=crop",
      discount: "-20%"
    }
  ];

  // Infinite scroll state
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Filter options
  const [filterType, setFilterType] = useState("All");
  const filterTypes = ["All", "New", "Sale", "Popular"];

  // Price range filter options
  const priceRanges = ["All Prices", "Under $50", "$50 - $100", "$100 - $200", "Over $200"];
  const [priceRange, setPriceRange] = useState("All Prices");

  // Sort options
  const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Best Selling"];
  const [sortBy, setSortBy] = useState("Newest");
  
  // Showing sort dropdown
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  // Mobile filter visibility
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Load initial products
  useEffect(() => {
    loadMoreProducts();
  }, []);

  // Function to load more products
  const loadMoreProducts = () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const newProducts = allProducts.slice(startIndex, endIndex);
      
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setVisibleProducts((prev) => [...prev, ...newProducts]);
        setCurrentPage((prev) => prev + 1);
      }
      
      setLoading(false);
    }, 800); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Category Title & Breadcrumb */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        <div className="flex flex-col mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-2 md:mb-4">{formattedCategory}</h1>
          <div className="flex items-center text-xs md:text-sm text-gray-500">
            <span>Home</span>
            <ChevronRight size={16} className="mx-1 md:mx-2" />
            <span className="font-medium text-[#1A1A1A]">{formattedCategory}</span>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <button 
            className="flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2 rounded-md text-sm"
            onClick={() => setShowMobileFilters(true)}
          >
            <Filter size={16} />
            Filters
          </button>
          
          {/* Mobile Sort Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 text-[#1A1A1A] border border-gray-300 rounded-md px-3 py-2 text-sm"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              <span>Sort: <span className="font-medium">{sortBy.split(":")[0]}</span></span>
              <ChevronDown size={14} />
            </button>
            
            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-10 w-48">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    onClick={() => {
                      setSortBy(option);
                      setShowSortDropdown(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 md:mb-10">
          {/* Mobile Filter Overlay */}
          {showMobileFilters && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
              <div className="bg-white h-full w-4/5 max-w-sm p-4 ml-auto flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X size={20} />
                  </button>
                </div>
                
                {/* Filter Content - same as desktop but vertically arranged for mobile */}
                <div className="space-y-8 flex-1 overflow-auto">
                  {/* Filter by Type */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Product Type</h3>
                    <div className="space-y-3">
                      {filterTypes.map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-type-${type}`}
                            name="mobileProductType"
                            checked={filterType === type}
                            onChange={() => setFilterType(type)}
                            className="mr-3 h-4 w-4 accent-[#1A1A1A]"
                          />
                          <label htmlFor={`mobile-type-${type}`} className="text-gray-700">{type}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Filter by Price */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Price Range</h3>
                    <div className="space-y-3">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-price-${range}`}
                            name="mobilePriceRange"
                            checked={priceRange === range}
                            onChange={() => setPriceRange(range)}
                            className="mr-3 h-4 w-4 accent-[#1A1A1A]"
                          />
                          <label htmlFor={`mobile-price-${range}`} className="text-gray-700">{range}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Apply Filters Button */}
                <button 
                  className="mt-auto w-full bg-[#1A1A1A] text-white py-3 rounded-md font-medium"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
          
          {/* Filter Section - Left side (Desktop only) */}
          <div className="hidden md:block md:col-span-3 space-y-8">
            {/* Filter by Type */}
            <div>
              <h3 className="text-lg font-medium mb-4">Product Type</h3>
              <div className="space-y-2">
                {filterTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="radio"
                      id={`type-${type}`}
                      name="productType"
                      checked={filterType === type}
                      onChange={() => setFilterType(type)}
                      className="mr-3 h-4 w-4 accent-[#1A1A1A]"
                    />
                    <label htmlFor={`type-${type}`} className="text-gray-700">{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter by Price */}
            <div>
              <h3 className="text-lg font-medium mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <div key={range} className="flex items-center">
                    <input
                      type="radio"
                      id={`price-${range}`}
                      name="priceRange"
                      checked={priceRange === range}
                      onChange={() => setPriceRange(range)}
                      className="mr-3 h-4 w-4 accent-[#1A1A1A]"
                    />
                    <label htmlFor={`price-${range}`} className="text-gray-700">{range}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid - Right side */}
          <div className="md:col-span-9">
            {/* Sort dropdown (Desktop only) */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{visibleProducts.length}</span> products
              </div>
              <div className="relative">
                <button 
                  className="flex items-center gap-2 text-[#1A1A1A] border border-gray-300 rounded-md px-4 py-2"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                >
                  <span>Sort by: <span className="font-medium">{sortBy}</span></span>
                  <ChevronDown size={16} />
                </button>
                
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-10 w-48">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        onClick={() => {
                          setSortBy(option);
                          setShowSortDropdown(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Products grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                />
              ))}
            </div>
            
            {/* Discover More Button */}
            <div className="flex justify-center mt-8 md:mt-12">
              {hasMore ? (
                <button 
                  className="flex items-center justify-center px-6 py-3 bg-[#1A1A1A] text-white rounded-md font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
                  onClick={loadMoreProducts}
                  disabled={loading}
                >
                  {loading ? (
                    <span>Loading...</span>
                  ) : (
                    <span>Discover More</span>
                  )}
                </button>
              ) : (
                <p className="text-gray-500 font-medium">No more products to load</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
