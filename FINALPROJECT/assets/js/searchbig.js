import product from "./searchbig2.js";

// import product from "./searchbig2.js";
// product

const productcon = document.getElementById('productcon');
const women = document.getElementById("woman")
const men = document.getElementById("man")
const watch= document.getElementById("watch")
const kids= document.getElementById("kids")
const loadmore= document.getElementById("loadmore")

const category = (start, end) => {
    let card = ""
    product.slice(start, end).map((item) => {
        card += `
        <div class="col-12 col-sm-6 col-md-3"">
        <div class="card" style="height: 400px;">
        <img src=${item.img} class="card-img-top" alt="error">
        <div class="card-body">
          <h5 class="card-title">${item.name.substring(0, 15)}...</h5>
          <p class="card-text">${item.description.substring(0, 20)}...</p>
          <h5>${item.price}$</h5>
        </div>
      </div>
        </div>
        `
    })
    productcon.innerHTML = card
}
category(0,10);

women.onclick = () => {
    category(10,20);

}
men.onclick = () => {
    category(5,15);

}
watch.onclick = () => {
    category(0,10);

}
kids.onclick = () => {
    category(15,23);

}
loadmore.onclick = () => {
    category(0,23);

}