document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("productContainer");

    async function fetchProducts() {
        try {
            const response = await fetch("https://082e-123-253-233-115.ngrok-free.app/product", {
                mode: "cors",
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": "true",
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const responseData = await response.json();
            renderProducts(responseData.data);
            
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    function renderProducts(products) {
        const productsHTML = products.map(product => getProductHTML(product)).join('');
        productContainer.innerHTML = productsHTML;
    }

    function getProductHTML(product) {
        return `
            <div class="product-card">
                <img class="product-img" src="https://082e-123-253-233-115.ngrok-free.app${product.image}" alt="${product.name} Icon">
                <div class="product-information">
                    <span class="product-name">${product.name}</span>
                    <span class="product-price">${formatCurrency(product.price)}</span>
                    <span class="product-quantity">Quantity: ${product.quantity}</span>
                    <span class="product-description">Deskripsi: ${product.description}</span>
                    <div class="action-buttons">
                        <button class="buy">Beli Sekarang</button>
                        <button class="delete-product" data-id="${product.id}">Hapus Produk</button>
                    </div>
                </div>
            </div>
        `;
    }

    function formatCurrency(price) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }

    async function deleteProduct(productId) {
        try {
            const response = await fetch(`https://082e-123-253-233-115.ngrok-free.app/product/${productId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete product");
            }

            return true; 
        } catch (error) {
            console.error("Error deleting product:", error);
            return false; 
        }
    }

    productContainer.addEventListener("click", async function(event) {
        if (event.target.classList.contains("delete-product")) {
            const productId = event.target.dataset.id;
            if (confirm("Are you sure you want to delete this product?")) {
                const isDeleted = await deleteProduct(productId);
                if (isDeleted) {
                    alert('Product deleted successfully!');
                    fetchProducts(); 
                } else {
                    alert('Failed to delete product. Please try again.');
                }
            }
        }
    });
    
    fetchProducts();
});
