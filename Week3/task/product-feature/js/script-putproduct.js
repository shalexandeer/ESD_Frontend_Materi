document.addEventListener("DOMContentLoaded", function() {
    const editProductForm = document.getElementById("editProductForm");

    editProductForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const productId = document.getElementById("productId").value;
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

            if (productImage) {
                formData.append("image", productImage, `${productName.replace(/\s/g, '_')}_${Date.now()}`);
            }

            const response = await fetch(`https://082e-123-253-233-115.ngrok-free.app/product/${productId}`, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to edit product");
            }

            editProductForm.reset();
            alert('Product edited successfully!');
        } catch (error) {
            console.error("Error editing product:", error);
            alert('Failed to edit product. Please try again.');
        }
    });
});
