addProductForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productQuantity = document.getElementById("productQuantity").value;
    const productDescription = document.getElementById("productDescription").value;
    const productImage = document.getElementById("productImage").files[0];

    try {
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("price", productPrice);
        formData.append("quantity", productQuantity);
        formData.append("description", productDescription);
        formData.append("image", productImage);

        const response = await fetch("https://082e-123-253-233-115.ngrok-free.app/product", {
            method: "POST",
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to add product');
        }

        addProductForm.reset();
        alert('Product added successfully!');

    } catch (error) {
        console.error("Error adding product:", error);
        alert('Failed to add product. Please try again.');
    }
});
