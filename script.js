document.getElementById("search-btn").addEventListener("click", function() {
    var query = document.getElementById("search-input").value.toLowerCase();
    var products = document.querySelectorAll('.box');
    
    products.forEach(function(product) {
        var productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = "block"; // Hiển thị sản phẩm
        } else {
            product.style.display = "none"; // Ẩn sản phẩm không khớp
        }
    });
});
