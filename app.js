class Products{constructor(id, name, price, img,quantity)
{this.id=id
 this.name =name
 this.price= price
 this.img= img
 this.quantity =quantity   
}
}
const cartProducts = [ ]
const prod1 = new Products ("1", "Pines de anime", 750, "imagenes/accesorios/pines.webp", 20);
const prod2 = new Products ("2", "Cartas de Yu-Gi-Oh", 750, "imagenes/accesorios/cartas-yugioh.webp", 40)
const prod3 = new Products ("3", "Mangas de Naruto Shipudden", 750, 'imagenes/mangas/manga-naruto-shipudden.webp', 10);
const prod4 = new Products ("4", "Mangas de Death Note ", 750, 'imagenes/mangas/manga-death-note.webp', 10);
const prod5 = new Products ("5", "Mangas de One Piece", 750, 'imagenes/mangas/manga-one-piece.webp', 10);
const prod6 = new Products ("6", "Mangas de Boku no Hero", 750, "imagenes/mangas/manga-boku-no-hero.webp", 10);
const prod7 = new Products ("7", "Buzo color negro de Nezuko", 4500, "imagenes/ropa/buzo-negro-nezuko.webp", 5);
const prod8 = new Products ("8", "Gorro de Pikachu", 2500, "/imagenes/ropa/gorro-pikachu.webp", 4);

cartProducts.push(prod1, prod2, prod3, prod4,prod5, prod6, prod7, prod8)
console.log(cartProducts)



const showProdocts =(products)=> {
        const productContainer= document.getElementById("product-container")
        cartProducts.forEach(product => {
            const card =document.createElement("card");
            card.innerHTML+=` <div class="card" style="width:18rem;"><img src="${product.img}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${product.name}</h5><p class="card-text">Price:$ ${product.price}</p><p id="quantity" class="card-text">${product.quantity}</p><button class="btn btn-primary" id="button${product.id}">Add to Cart</button></div></div>`
            productContainer.appendChild(card);
            
            const button = document.getElementById(`button${product.id}`);
            button.addEventListener("click",()=>{
                alert(`Agregaste ${product.name}`)
            })
        });
}
showProdocts()