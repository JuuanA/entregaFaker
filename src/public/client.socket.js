const socket = io();
const productlist = document.querySelector("#productList");

const renderProducts = (products) => {

    const html = products.map((p) => {
        return `<div><span>${p.title}</span> <span>$${p.price}</span> <img src="${p.thumbnail}" height="20"></img></div>`
    });

    productlist.innerHTML = html.join(" ");
};


socket.on("server:product", renderProducts)