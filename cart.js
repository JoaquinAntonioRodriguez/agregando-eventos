const shoppingCart= []
const cart =(productsId)=>{
    const cartContainer= document.getElementById("cart-container")
   const showProdoctsoInCart= ()=>{
    let product = cartProducts.find(product => product.id === productsId )
    shoppingCart.push(product)
    let div = document.createElement;
    div.innerHTML= ` <p>${product.name}</p>
                     <p>Precio: ${product.price}</p>
                     <p id="quantity${product.id}">Cantidad : ${product.quantity}</p>
                     <button class="btn btn-danger btn-sm" id="delete${product.id}">x</button>`
    cartContainer.appendChild(div)
    let buttonDelete= document.getElementById(`delete${product.id}`)
    buttonDelete.addEventListener("click",( )=>{
        deleteProduct(e)
    })
   }
   showProdoctsoInCart()
}
function deleteProducts(e) {
    let btnClicked = e.target;
    btnClicked.paramentElement.remove()
}