// Product data with optimized structure
const products = [
    {
        id: 1,
        name: "Elegant Sofa Set",
        price: 45000,
        category: "living",
        description: "A luxurious 3-seater sofa set crafted with premium fabric upholstery and solid wood frame. Perfect for modern living rooms with its contemporary design and exceptional comfort.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop"
        ],
        features: ["Premium fabric upholstery", "Solid wood frame", "High-density foam cushions", "Easy maintenance", "5-year warranty"],
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Modern Dining Table",
        price: 32000,
        category: "dining",
        description: "Sleek 6-seater dining table made from solid oak wood with a glossy finish. Features a contemporary design that complements any dining room decor.",
        images: [
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
        ],
        features: ["Solid oak wood construction", "Seats 6 people comfortably", "Glossy finish", "Scratch resistant", "2-year warranty"],
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        name: "Queen Size Bed",
        price: 28000,
        category: "bedroom",
        description: "Elegant queen size bed with upholstered headboard and sturdy construction. Designed for ultimate comfort and style in your bedroom.",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=400&fit=crop"
        ],
        features: ["Queen size (60\" x 80\")", "Upholstered headboard", "Solid wood frame", "Storage drawers", "3-year warranty"],
        rating: 4.3,
        inStock: true
    },
    {
        id: 4,
        name: "Executive Office Chair",
        price: 15000,
        category: "office",
        description: "Ergonomic executive office chair with leather upholstery and adjustable height. Perfect for long working hours with maximum comfort and support.",
        images: [
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        ],
        features: ["Genuine leather upholstery", "Ergonomic design", "Height adjustable", "360° swivel", "1-year warranty"],
        rating: 4.6,
        inStock: true
    },
    {
        id: 5,
        name: "Coffee Table Set",
        price: 18000,
        category: "living",
        description: "Modern coffee table set with glass top and wooden legs. Includes two nesting tables that can be used separately or together.",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
        ],
        features: ["Tempered glass top", "Solid wood legs", "Nesting design", "Easy to clean", "2-year warranty"],
        rating: 4.4,
        inStock: true
    },
    {
        id: 6,
        name: "Wardrobe Cabinet",
        price: 55000,
        category: "bedroom",
        description: "Spacious 4-door wardrobe with multiple compartments and drawers. Features mirror doors and ample storage space for all your clothing needs.",
        images: [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop"
        ],
        features: ["4-door design", "Mirror panels", "Multiple compartments", "Soft-close hinges", "5-year warranty"],
        rating: 4.8,
        inStock: true
    },
    {
        id: 7,
        name: "Bookshelf Unit",
        price: 22000,
        category: "office",
        description: "5-tier bookshelf unit with open shelving design. Perfect for displaying books, decorative items, and storage solutions.",
        images: [
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
        ],
        features: ["5-tier design", "Open shelving", "Solid wood construction", "Adjustable shelves", "3-year warranty"],
        rating: 4.2,
        inStock: true
    },
    {
        id: 8,
        name: "Dining Chair Set",
        price: 24000,
        category: "dining",
        description: "Set of 6 dining chairs with cushioned seats and elegant design. Perfectly complements any dining table with its timeless style.",
        images: [
            "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop"
        ],
        features: ["Set of 6 chairs", "Cushioned seats", "Solid wood frame", "Elegant design", "2-year warranty"],
        rating: 4.5,
        inStock: true
    }
];

// ========================================================
// Application State Management
// ========================================================
class AppState {
    constructor() {
        this.cart = [];
        this.wishlist = [];
        this.currentProduct = null;
        this.filteredProducts = [...products];
        this.isLoading = false;
        
        // Performance optimization: Cache DOM elements
        this.domCache = new Map();
        this.initializeDOMCache();
    }

    initializeDOMCache() {
        const elements = [
            'productsGrid', 'searchInput', 'searchContainer', 'cartSidebar',
            'cartItems', 'cartCount', 'cartTotal', 'cartFooter', 'profileModal',
            'productModal', 'noResults', 'wishlistCount', 'productDetailSection',
            'productsSection', 'categoryFilter', 'priceFilter'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                this.domCache.set(id, element);
            }
        });
    }

    getElement(id) {
        return this.domCache.get(id) || document.getElementById(id);
    }
}

// ========================================================
// Utility Functions & Performance Helpers
// ========================================================
class Utils {
    // Debounce function for search optimization
    static debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(this, args);
        };
    }

    // Throttle function for scroll events
    static throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Smooth fade animations using requestAnimationFrame
    static fadeIn(element, duration = 300, callback = null) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else if (callback) {
                callback();
            }
        };
        
        requestAnimationFrame(animate);
    }

    static fadeOut(element, duration = 300, callback = null) {
        const start = performance.now();
        const startOpacity = parseFloat(element.style.opacity) || 1;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            element.style.opacity = startOpacity * (1 - progress);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
                if (callback) callback();
            }
        };
        
        requestAnimationFrame(animate);
    }

    // Optimized number formatting
    static formatPrice(price) {
        return new Intl.NumberFormat('en-IN').format(price);
    }

    // Touch-friendly event handling
    static addTouchSupport(element, callback) {
        let startY, startX;
        
        element.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        element.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endX = e.changedTouches[0].clientX;
            const diffY = Math.abs(endY - startY);
            const diffX = Math.abs(endX - startX);
            
            // Only trigger if it's a tap (minimal movement)
            if (diffY < 10 && diffX < 10) {
                callback(e);
            }
        }, { passive: true });
    }
}

// ========================================================
// Main Application Class
// ========================================================
class FurnitureStore {
    constructor() {
        this.state = new AppState();
        this.isInitialized = false;
        
        // Bind methods to preserve context
        this.handleSearch = Utils.debounce(this.handleSearch.bind(this), 300);
        this.handleScroll = Utils.throttle(this.handleScroll.bind(this), 100);
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize());
        } else {
            this.initialize();
        }
    }

    async initialize() {
        if (this.isInitialized) return;
        
        this.showLoadingState();
        
        try {
            await this.setupEventListeners();
            await this.renderProducts();
            this.updateCartUI();
            this.updateWishlistCount();
            this.initializeAccessibility();
            this.isInitialized = true;
        } catch (error) {
            console.error('Failed to initialize application:', error);
            this.showErrorState();
        } finally {
            this.hideLoadingState();
        }
    }

    showLoadingState() {
        this.state.isLoading = true;
        const productsGrid = this.state.getElement('productsGrid');
        if (productsGrid) {
            productsGrid.innerHTML = '<div class="loading-spinner">Loading...</div>';
        }
    }

    hideLoadingState() {
        this.state.isLoading = false;
    }

    showErrorState() {
        const productsGrid = this.state.getElement('productsGrid');
        if (productsGrid) {
            productsGrid.innerHTML = '<div class="error-message">Failed to load products. Please refresh the page.</div>';
        }
    }

    // ========================================================
    // Event Listeners Setup
    // ========================================================
    async setupEventListeners() {
        // Search functionality with debouncing
        const searchToggle = document.getElementById('searchToggle');
        const searchClose = document.getElementById('searchClose');
        const searchInput = this.state.getElement('searchInput');
        
        if (searchToggle) searchToggle.addEventListener('click', () => this.toggleSearch());
        if (searchClose) searchClose.addEventListener('click', () => this.toggleSearch());
        if (searchInput) {
            searchInput.addEventListener('input', this.handleSearch);
            // Enhanced accessibility
            searchInput.setAttribute('aria-label', 'Search products');
            searchInput.setAttribute('autocomplete', 'off');
        }

        // Cart functionality
        

        const cartToggle = document.getElementById('cartToggle');
        const cartClose = document.getElementById('cartClose');
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartToggle) cartToggle.addEventListener('click', () => this.toggleCart());
        if (cartClose) cartClose.addEventListener('click', () => this.toggleCart());
        if (cartOverlay) cartOverlay.addEventListener('click', () => this.toggleCart());
        // Update cart UI

   

        // Profile modal
        const profileToggle = document.getElementById('profileToggle');
        const profileClose = document.getElementById('profileClose');
        const profileOverlay = document.getElementById('profileOverlay');
        
        if (profileToggle) profileToggle.addEventListener('click', () => this.toggleProfile());
        if (profileClose) profileClose.addEventListener('click', () => this.toggleProfile());
        if (profileOverlay) profileOverlay.addEventListener('click', () => this.toggleProfile());

        // Product modal
        const productModalClose = document.getElementById('productModalClose');
        const productOverlay = document.getElementById('productOverlay');
        
        if (productModalClose) productModalClose.addEventListener('click', () => this.closeProductModal());
        if (productOverlay) productOverlay.addEventListener('click', () => this.closeProductModal());

        // Filter functionality with immediate feedback
        const categoryFilter = this.state.getElement('categoryFilter');
        const priceFilter = this.state.getElement('priceFilter');
        
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.applyFilters());
            categoryFilter.setAttribute('aria-label', 'Filter by category');
        }
        if (priceFilter) {
            priceFilter.addEventListener('change', () => this.applyFilters());
            priceFilter.setAttribute('aria-label', 'Filter by price range');
        }

        // Global keyboard events
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Scroll events for performance monitoring
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        
        // Enhanced touch support for mobile
        this.setupTouchSupport();
    }

    setupTouchSupport() {
        // Add touch support for product cards
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    }

    handleTouchStart(e) {
        this.touchStartTime = Date.now();
        this.touchStartTarget = e.target;
    }

    handleTouchEnd(e) {
        const touchDuration = Date.now() - this.touchStartTime;
        const target = e.target;
        
        // Only process quick taps (less than 200ms)
        if (touchDuration < 200 && this.touchStartTarget === target) {
            const productCard = target.closest('.product-card');
            if (productCard && !target.closest('.wishlist-btn') && !target.closest('.btn')) {
                const productId = parseInt(productCard.dataset.productId);
                if (productId) {
                    this.viewProduct(productId);
                }
            }
        }
    }

    handleScroll() {
        // Implement lazy loading or infinite scroll if needed
        // For now, just optimize scroll performance
        requestAnimationFrame(() => {
            // Any scroll-related updates
        });
    }

    // ========================================================
    // Search Functionality
    // ========================================================
    toggleSearch() {
        const searchContainer = this.state.getElement('searchContainer');
        const searchInput = this.state.getElement('searchInput');
        
        if (!searchContainer) return;
        
        const isActive = searchContainer.classList.contains('active');
        
        if (isActive) {
            Utils.fadeOut(searchContainer, 200, () => {
                searchContainer.classList.remove('active');
                if (searchInput) {
                    searchInput.value = '';
                    this.state.filteredProducts = [...products];
                    this.renderProducts();
                }
            });
        } else {
            searchContainer.classList.add('active');
            Utils.fadeIn(searchContainer, 200, () => {
                if (searchInput) {
                    searchInput.focus();
                    searchInput.setAttribute('aria-expanded', 'true');
                }
            });
        }
    }

    handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (this.state.isLoading) return;
        
        // Show loading feedback for search
        this.showSearchLoading();
        
        requestAnimationFrame(() => {
            if (query === '') {
                this.state.filteredProducts = [...products];
            } else {
                this.state.filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query) ||
                    product.features.some(feature => feature.toLowerCase().includes(query))
                );
            }
            
            this.renderProducts().then(() => {
                this.hideSearchLoading();
            });
        });
    }

    showSearchLoading() {
        const searchInput = this.state.getElement('searchInput');
        if (searchInput) {
            searchInput.classList.add('loading');
        }
    }

    hideSearchLoading() {
        const searchInput = this.state.getElement('searchInput');
        if (searchInput) {
            searchInput.classList.remove('loading');
        }
    }

    // ========================================================
    // Filter Functionality
    // ========================================================
    applyFilters() {
        if (this.state.isLoading) return;
        
        const categoryFilter = this.state.getElement('categoryFilter');
        const priceFilter = this.state.getElement('priceFilter');
        const searchInput = this.state.getElement('searchInput');
        
        let filtered = [...products];
        
        // Category filter
        if (categoryFilter?.value) {
            filtered = filtered.filter(product => product.category === categoryFilter.value);
        }
        
        // Price filter
        if (priceFilter?.value) {
            const selectedPrice = priceFilter.value;
            if (selectedPrice === '100000+') {
                filtered = filtered.filter(product => product.price >= 100000);
            } else {
                const [min, max] = selectedPrice.split('-').map(Number);
                filtered = filtered.filter(product => product.price >= min && product.price <= max);
            }
        }
        
        // Apply search query
        const searchQuery = searchInput?.value.toLowerCase().trim();
        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery) ||
                product.description.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery) ||
                product.features.some(feature => feature.toLowerCase().includes(searchQuery))
            );
        }
        
        this.state.filteredProducts = filtered;
        this.renderProducts();
        
        // Announce filter results for screen readers
        this.announceFilterResults(filtered.length);
    }

    announceFilterResults(count) {
        const announcement = `Found ${count} product${count !== 1 ? 's' : ''}`;
        const ariaLive = document.createElement('div');
        ariaLive.setAttribute('aria-live', 'polite');
        ariaLive.setAttribute('aria-atomic', 'true');
        ariaLive.className = 'sr-only';
        ariaLive.textContent = announcement;
        document.body.appendChild(ariaLive);
        
        setTimeout(() => ariaLive.remove(), 1000);
    }

    // ========================================================
    // Product Rendering
    // ========================================================
    async renderProducts() {
        const productsGrid = this.state.getElement('productsGrid');
        const noResults = this.state.getElement('noResults');
        
        if (!productsGrid) return;
        
        if (this.state.filteredProducts.length === 0) {
            productsGrid.innerHTML = '';
            if (noResults) noResults.style.display = 'block';
            return;
        }
        
        if (noResults) noResults.style.display = 'none';
        
        // Use document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        this.state.filteredProducts.forEach(product => {
            const productCard = this.createProductCard(product);
            fragment.appendChild(productCard);
        });
        
        // Clear and append in one operation
        productsGrid.innerHTML = '';
        productsGrid.appendChild(fragment);
        
        // Initialize lazy loading for images
        this.initializeLazyLoading();
    }

    createProductCard(product) {
        const cardElement = document.createElement('div');
        cardElement.className = 'product-card';
        cardElement.dataset.productId = product.id;
        cardElement.setAttribute('tabindex', '0');
        cardElement.setAttribute('role', 'button');
        cardElement.setAttribute('aria-label', `View details for ${product.name}, priced at ₹${Utils.formatPrice(product.price)}`);
        
        cardElement.innerHTML = `
            <div class="card-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                <button class="wishlist-btn ${this.state.wishlist.includes(product.id) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); app.toggleWishlist(${product.id})"
                        aria-label="${this.state.wishlist.includes(product.id) ? 'Remove from' : 'Add to'} wishlist">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
            </div>
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-description">${product.description.substring(0, 100)}...</p>
                <div class="card-price">₹${Utils.formatPrice(product.price)}</div>
                <div class="product-rating" aria-label="Rating: ${product.rating} out of 5 stars">
                    ${this.generateStars(product.rating)}
                    <span class="rating-text">(${product.rating})</span>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" 
                            onclick="event.stopPropagation(); app.addToCart(${product.id})"
                            aria-label="Add ${product.name} to cart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary" 
                            onclick="event.stopPropagation(); app.viewProduct(${product.id})"
                            aria-label="View details for ${product.name}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        
        // Add click handler for card
        cardElement.addEventListener('click', () => this.viewProduct(product.id));
        cardElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.viewProduct(product.id);
            }
        });
        
        return cardElement;
    }

    initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fa fa-star" aria-hidden="true"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fa fa-star-half-alt" aria-hidden="true"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }
        
        return stars;
    }

    // ========================================================
    // Product Detail View
    // ========================================================
    async viewProduct(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        this.state.currentProduct = product;
        
        const productsSection = this.state.getElement('productsSection');
        const productDetailSection = this.state.getElement('productDetailSection');
        
        if (!productsSection || !productDetailSection) return;
        
        // Smooth transition
        Utils.fadeOut(productsSection, 200, () => {
            productsSection.style.display = 'none';
            this.updateProductDetails(product);
            productDetailSection.style.display = 'block';
            Utils.fadeIn(productDetailSection, 200);
            
            // Smooth scroll to top
            this.smoothScrollToTop();
        });
    }

    updateProductDetails(product) {
        // Update product information
        const elements = {
            productTitle: product.name,
            productPrice: `₹${Utils.formatPrice(product.price)}`,
            productDescription: product.description
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        // Update main image
        const mainImage = document.getElementById('mainProductImage');
        if (mainImage) {
            mainImage.src = product.images[0];
            mainImage.alt = product.name;
        }
        
        // Update rating
        const ratingElement = document.getElementById('productRating');
        if (ratingElement) {
            ratingElement.innerHTML = `
                ${this.generateStars(product.rating)}
                <span class="rating-text">(${product.rating} stars)</span>
            `;
        }
        
        // Update features
        const featuresList = document.getElementById('featuresList');
        if (featuresList) {
            featuresList.innerHTML = product.features
                .map(feature => `<li>${feature}</li>`)
                .join('');
        }
        
        // Update thumbnails with enhanced interaction
        this.updateProductThumbnails(product);
        
        // Update action buttons
        this.updateProductActionButtons(product);
        
        // Load recommended products
        this.loadRecommendedProducts(product);
    }

    updateProductThumbnails(product) {
        const thumbnailContainer = document.getElementById('thumbnailContainer');
        if (!thumbnailContainer) return;
        
        thumbnailContainer.innerHTML = product.images
            .map((image, index) => `
                <img src="${image}" 
                     alt="Product Image ${index + 1}" 
                     class="thumbnail ${index === 0 ? 'active' : ''}"
                     tabindex="0"
                     role="button"
                     aria-label="View image ${index + 1} of ${product.name}"
                     onclick="app.changeMainImage('${image}', this)"
                     onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();app.changeMainImage('${image}', this)}">
            `)
            .join('');
    }

    updateProductActionButtons(product) {
        // Update wishlist button
        const wishlistBtn = document.getElementById('productWishlistBtn');
          if (wishlistBtn) {
            const isInWishlist = this.state.wishlist.includes(product.id);
            wishlistBtn.innerHTML = `
                <i class="fa fa-heart${isInWishlist ? '' : '-o'}" aria-hidden="true"></i>
                ${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            `;
            wishlistBtn.className = `btn ${isInWishlist ? 'btn-danger' : 'btn-outline'}`;
            wishlistBtn.setAttribute('aria-label', `${isInWishlist ? 'Remove from' : 'Add to'} wishlist`);
            wishlistBtn.onclick = () => this.toggleWishlist(product.id);
        }

        // Update cart button
        const cartBtn = document.getElementById('productCartBtn');
        if (cartBtn) {
            cartBtn.onclick = () => this.addToCart(product.id);
            cartBtn.setAttribute('aria-label', `Add ${product.name} to cart`);
        }
    }

    loadRecommendedProducts(currentProduct) {
        const recommendedContainer = document.getElementById('recommendedProducts');
        if (!recommendedContainer) return;

        // Get products from same category, excluding current product
        const recommended = products
            .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
            .slice(0, 4);

        if (recommended.length === 0) {
            recommendedContainer.style.display = 'none';
            return;
        }

        recommendedContainer.style.display = 'block';
        const recommendedGrid = document.getElementById('recommendedGrid');
        if (recommendedGrid) {
            recommendedGrid.innerHTML = recommended
                .map(product => `
                    <div class="product-card mini" data-product-id="${product.id}" tabindex="0" role="button"
                         onclick="app.viewProduct(${product.id})"
                         onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();app.viewProduct(${product.id})}">
                        <div class="card-image">
                            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">${product.name}</h4>
                            <div class="card-price">₹${Utils.formatPrice(product.price)}</div>
                            <div class="product-rating">
                                ${this.generateStars(product.rating)}
                            </div>
                        </div>
                    </div>
                `)
                .join('');
        }
    }

    changeMainImage(imageSrc, thumbnailElement) {
        const mainImage = document.getElementById('mainProductImage');
        if (mainImage) {
            mainImage.src = imageSrc;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            thumbnailElement.classList.add('active');
        }
    }

    goBackToProducts() {
        const productsSection = this.state.getElement('productsSection');
        const productDetailSection = this.state.getElement('productDetailSection');
        
        if (!productsSection || !productDetailSection) return;
        
        Utils.fadeOut(productDetailSection, 200, () => {
            productDetailSection.style.display = 'none';
            productsSection.style.display = 'block';
            Utils.fadeIn(productsSection, 200);
            this.smoothScrollToTop();
        });
    }

    smoothScrollToTop() {
        const start = window.pageYOffset;
        const startTime = performance.now();
        const duration = 500;

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = this.easeInOutCubic(progress);
            
            window.scrollTo(0, start * (1 - ease));
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };
        
        requestAnimationFrame(animateScroll);
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    // ========================================================
    // Cart Management
    // ========================================================
    toggleCart() {
        const cartSidebar = this.state.getElement('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        
        if (!cartSidebar) return;
        
        const isOpen = cartSidebar.classList.contains('open');
        
        if (isOpen) {
            cartSidebar.classList.remove('open');
            if (cartOverlay) cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            cartSidebar.classList.add('open');
            if (cartOverlay) cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus management for accessibility
            const firstFocusable = cartSidebar.querySelector('button, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) firstFocusable.focus();
        }
    }

    addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = this.state.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.state.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: 1
            });
        }
        
        this.updateCartUI();
        this.showCartNotification(`${product.name} added to cart!`);
        
        // Save to localStorage for persistence
        this.saveCartToStorage();
    }

    removeFromCart(productId) {
        const itemIndex = this.state.cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            const removedItem = this.state.cart[itemIndex];
            this.state.cart.splice(itemIndex, 1);
            this.updateCartUI();
            this.showCartNotification(`${removedItem.name} removed from cart!`);
            this.saveCartToStorage();
        }
    }

    updateCartQuantity(productId, change) {
        const item = this.state.cart.find(item => item.id === productId);
        if (!item) return;
        
        item.quantity = Math.max(1, item.quantity + change);
        this.updateCartUI();
        this.saveCartToStorage();
    }

    updateCartUI() {
        const cartItems = this.state.getElement('cartItems');
        const cartCount = this.state.getElement('cartCount');
        const cartTotal = this.state.getElement('cartTotal');
        const cartFooter = this.state.getElement('cartFooter');
        
        // Update cart count
        const totalItems = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
        
        // Update cart items
        if (cartItems) {
            if (this.state.cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            } else {
                cartItems.innerHTML = this.state.cart
                    .map(item => `
                        <div class="cart-item" data-product-id="${item.id}">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h4 class="cart-item-name">${item.name}</h4>
                                <div class="cart-item-price">₹${Utils.formatPrice(item.price)}</div>
                                <div class="quantity-controls">
                                    <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, -1)"
                                            aria-label="Decrease quantity">-</button>
                                    <span class="quantity">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="app.updateCartQuantity(${item.id}, 1)"
                                            aria-label="Increase quantity">+</button>
                                </div>
                            </div>
                            <button class="remove-btn" onclick="app.removeFromCart(${item.id})"
                                    aria-label="Remove ${item.name} from cart">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    `)
                    .join('');
            }
        }
        
        // Update total
        const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotal) {
            cartTotal.textContent = `₹${Utils.formatPrice(total)}`;
        }
        
        // Show/hide footer
        if (cartFooter) {
            cartFooter.style.display = this.state.cart.length > 0 ? 'block' : 'none';
        }
    }

    showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    clearCart() {
        if (this.state.cart.length === 0) return;
        
        if (confirm('Are you sure you want to clear your cart?')) {
            this.state.cart = [];
            this.updateCartUI();
            this.saveCartToStorage();
            this.showCartNotification('Cart cleared!');
        }
    }

    checkout() {
        if (this.state.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const total = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (confirm(`Proceed to checkout?\n\nItems: ${itemCount}\nTotal: ₹${Utils.formatPrice(total)}`)) {
            // Simulate checkout process
            this.showCheckoutModal();
        }
    }

    showCheckoutModal() {
        const modal = document.createElement('div');
        modal.className = 'checkout-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="checkout-success">
                    <i class="fa fa-check-circle success-icon" aria-hidden="true"></i>
                    <h3>Order Placed Successfully!</h3>
                    <p>Thank you for your purchase. Your order will be delivered within 5-7 business days.</p>
                    <button class="btn btn-primary" onclick="this.closest('.checkout-modal').remove(); app.state.cart = []; app.updateCartUI(); app.toggleCart(); app.saveCartToStorage();">
                        Continue Shopping
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus management
        const continueBtn = modal.querySelector('.btn');
        if (continueBtn) continueBtn.focus();
    }

    // ========================================================
    // Wishlist Management
    // ========================================================
    toggleWishlist(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const index = this.state.wishlist.indexOf(productId);
        
        if (index > -1) {
            this.state.wishlist.splice(index, 1);
            this.showCartNotification(`${product.name} removed from wishlist!`);
        } else {
            this.state.wishlist.push(productId);
            this.showCartNotification(`${product.name} added to wishlist!`);
        }
        
        this.updateWishlistCount();
        this.updateWishlistButtons();
        this.saveWishlistToStorage();
    }

    updateWishlistCount() {
        const wishlistCount = this.state.getElement('wishlistCount');
        if (wishlistCount) {
            wishlistCount.textContent = this.state.wishlist.length;
            wishlistCount.style.display = this.state.wishlist.length > 0 ? 'block' : 'none';
        }
    }

    updateWishlistButtons() {
        // Update all wishlist buttons
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            const productCard = btn.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.dataset.productId);
                const isInWishlist = this.state.wishlist.includes(productId);
                btn.classList.toggle('active', isInWishlist);
                btn.setAttribute('aria-label', `${isInWishlist ? 'Remove from' : 'Add to'} wishlist`);
            }
        });
        
        // Update product detail wishlist button
        const productWishlistBtn = document.getElementById('productWishlistBtn');
        if (productWishlistBtn && this.state.currentProduct) {
            const isInWishlist = this.state.wishlist.includes(this.state.currentProduct.id);
            productWishlistBtn.innerHTML = `
                <i class="fa fa-heart${isInWishlist ? '' : '-o'}" aria-hidden="true"></i>
                ${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            `;
            productWishlistBtn.className = `btn ${isInWishlist ? 'btn-danger' : 'btn-outline'}`;
        }
    }

    // ========================================================
    // Profile Management
    // ========================================================
    toggleProfile() {
        const profileModal = this.state.getElement('profileModal');
        const profileOverlay = document.getElementById('profileOverlay');
        
        if (!profileModal) return;
        
        const isOpen = profileModal.classList.contains('active');
        
        if (isOpen) {
            profileModal.classList.remove('active');
            if (profileOverlay) profileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            profileModal.classList.add('active');
            if (profileOverlay) profileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus management
            const firstInput = profileModal.querySelector('input');
            if (firstInput) firstInput.focus();
        }
    }

    // ========================================================
    // Keyboard Navigation
    // ========================================================
    handleKeyboard(e) {
        // Global keyboard shortcuts
        switch (e.key) {
            case 'Escape':
                this.handleEscapeKey();
                break;
            case '/':
                if (!e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT') {
                    e.preventDefault();
                    this.focusSearch();
                }
                break;
            case 'c':
                if (e.ctrlKey || e.metaKey) {
                    // Don't interfere with copy
                    return;
                }
                if (e.target.tagName !== 'INPUT') {
                    this.toggleCart();
                }
                break;
        }
    }

    handleEscapeKey() {
        // Close any open modals/sidebars
        const openElements = [
            { element: this.state.getElement('cartSidebar'), method: 'toggleCart' },
            { element: this.state.getElement('profileModal'), method: 'toggleProfile' },
            { element: this.state.getElement('searchContainer'), method: 'toggleSearch' }
        ];
        
        for (const { element, method } of openElements) {
            if (element && (element.classList.contains('open') || element.classList.contains('active'))) {
                this[method]();
                break;
            }
        }
    }

    focusSearch() {
        const searchInput = this.state.getElement('searchInput');
        if (searchInput) {
            if (!this.state.getElement('searchContainer').classList.contains('active')) {
                this.toggleSearch();
            }
            setTimeout(() => searchInput.focus(), 100);
        }
    }

    // ========================================================
    // Accessibility Features
    // ========================================================
    initializeAccessibility() {
        // Add skip link
        this.addSkipLink();
        
        // Enhance focus indicators
        this.enhanceFocusIndicators();
        
        // Add ARIA landmarks
        this.addAriaLandmarks();
        
        // Initialize screen reader announcements
        this.initializeScreenReaderSupport();
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const mainContent = document.getElementById('main-content') || document.querySelector('main');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView();
            }
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    enhanceFocusIndicators() {
        // Add visible focus indicators for keyboard navigation
        document.addEventListener('keydown', () => {
            document.body.classList.add('keyboard-navigation');
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    addAriaLandmarks() {
        // Add ARIA landmarks to main sections
        const landmarks = [
            { selector: 'header', role: 'banner' },
            { selector: 'nav', role: 'navigation' },
            { selector: 'main', role: 'main' },
            { selector: 'footer', role: 'contentinfo' }
        ];
        
        landmarks.forEach(({ selector, role }) => {
            const element = document.querySelector(selector);
            if (element && !element.getAttribute('role')) {
                element.setAttribute('role', role);
            }
        });
    }

    initializeScreenReaderSupport() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
    }

    announceToScreenReader(message) {
        const liveRegion = document.getElementById('aria-live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
        }
    }

    // ========================================================
    // Data Persistence
    // ========================================================
    saveCartToStorage() {
        try {
            localStorage.setItem('furnitureStoreCart', JSON.stringify(this.state.cart));
        } catch (error) {
            console.warn('Failed to save cart to localStorage:', error);
        }
    }

    loadCartFromStorage() {
        try {
            const savedCart = localStorage.getItem('furnitureStoreCart');
            if (savedCart) {
                this.state.cart = JSON.parse(savedCart);
            }
        } catch (error) {
            console.warn('Failed to load cart from localStorage:', error);
            this.state.cart = [];
        }
    }

    saveWishlistToStorage() {
        try {
            localStorage.setItem('furnitureStoreWishlist', JSON.stringify(this.state.wishlist));
        } catch (error) {
            console.warn('Failed to save wishlist to localStorage:', error);
        }
    }

    loadWishlistFromStorage() {
        try {
            const savedWishlist = localStorage.getItem('furnitureStoreWishlist');
            if (savedWishlist) {
                this.state.wishlist = JSON.parse(savedWishlist);
            }
        } catch (error) {
            console.warn('Failed to load wishlist from localStorage:', error);
            this.state.wishlist = [];
        }
    }

    // ========================================================
    // Error Handling
    // ========================================================
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        
        // Show user-friendly error message
        this.showErrorNotification('Something went wrong. Please try again.');
        
        // Reset loading states
        this.hideLoadingState();
        this.hideSearchLoading();
    }

    showErrorNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // ========================================================
    // Performance Monitoring
    // ========================================================
    measurePerformance(operation, callback) {
        const startTime = performance.now();
        
        const result = callback();
        
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        if (duration > 100) {
            console.warn(`Slow operation detected: ${operation} took ${duration.toFixed(2)}ms`);
        }
        
        return result;
    }

    // ========================================================
    // Initialization and Cleanup
    // ========================================================
    async initializeData() {
        try {
            // Load saved data
            this.loadCartFromStorage();
            this.loadWishlistFromStorage();
            
            // Initialize UI with saved data
            this.updateCartUI();
            this.updateWishlistCount();
            
        } catch (error) {
            this.handleError(error, 'Data initialization');
        }
    }

    cleanup() {
        // Remove event listeners and clean up resources
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('keydown', this.handleKeyboard);
        
        // Clear any timeouts or intervals
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
    }
}

// ========================================================
// Application Initialization
// ========================================================
let app = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        app = new FurnitureStore();
        await app.initializeData();
        
        // Add global error handler
        window.addEventListener('error', (event) => {
            app.handleError(event.error, 'Global error');
        });
        
        // Add unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            app.handleError(event.reason, 'Unhandled promise rejection');
        });
        
        console.log('Furniture Store application initialized successfully');
        
    } catch (error) {
        console.error('Failed to initialize Furniture Store application:', error);
        
        // Show fallback error message
        document.body.innerHTML = `
            <div class="error-fallback">
                <h1>Application Error</h1>
                <p>Sorry, something went wrong. Please refresh the page to try again.</p>
                <button onclick="location.reload()" class="btn btn-primary">Refresh Page</button>
            </div>
        `;
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (app) {
        app.cleanup();
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FurnitureStore, Utils };
}