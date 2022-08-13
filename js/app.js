window.onload = () => {
    const productsContainer = document.getElementById("products-container");
    const products = [
        {
            name: "Cuaderno Ecológico Punteado",
            price: "200",
        },
        {
            name: "Cuaderno Ecológico Rayado",
            price: "250",
        },
        {
            name: "Cuaderno Ecológico Punteado",
            price: "200",
        },
        {
            name: "Cuaderno Ecológico Rayado",
            price: "250",
        },
        {
            name: "Cuaderno Ecológico Punteado",
            price: "200",
        },
        {
            name: "Cuaderno Ecológico Rayado",
            price: "250",
        },
        {
            name: "Cuaderno Ecológico Punteado",
            price: "200",
        },
        {
            name: "Cuaderno Ecológico Rayado",
            price: "250",
        },
        {
            name: "Cuaderno Ecológico Punteado",
            price: "200",
        },
        {
            name: "Cuaderno Ecológico Rayado",
            price: "250",
        }
    ];

    products.map((product) => {
        productsContainer.innerHTML +=
            `<div class="product-card"><img class="card-img" src="img/product.png" alt="${product.name}"/>
                <div class="card-text">
                    <h3>${product.price}<sup>95</sup></h3>
                    <p>${product.name}</p>
                </div>
            </div>`
    });
}