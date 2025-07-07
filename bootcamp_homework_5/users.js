let name = prompt("İsminizi Girin: ");
let age = prompt("Yaşınızı girin: ");
let job = prompt("Mesleğinizi girin: ");


let user = {
    name: name,
    age: age,
    job: job
};

console.log("Kullanıcı Bilgileri: ", user);

let cart = [];

function addToCart(name, price) {
    cart.push({ name: name, price: Number(price) });
}

function listCart() {
    cart.forEach((product, i) => {
        console.log(`${i+1}- ${product.name} ${product.price}TL`);
    });
}

function removeProduct(productName) {
    let index = cart.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`"${productName}" sepetten çıkarıldı.`);
    } else {
        console.log(`"${productName}" bulunamadı.`);
    }
}

function totalCart() {
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    console.log("Sepet Toplamı: ", total + "TL");
}

let dinamicCart = prompt("Sepete ürün eklemek ister misiniz? Evet veya hayır:").toLowerCase() === "evet";

while (dinamicCart) {
    let prodName = prompt("Ürün adı girin:");
    let prodPrice = prompt("Ürün fiyatını girin:");
    addToCart(prodName, prodPrice);

    dinamicCart = prompt("Başka ürün eklemek ister misiniz? Evet veya hayır:").toLowerCase() === "evet";
}

let remove = prompt("Sepetten çıkarmak istediğiniz bir ürün var mı? Evet veya hayır").toLowerCase();
while (remove === "evet") {
    let pName = prompt("Silmek istediğiniz ürünün ismini girin : ");
    removeProduct(pName);

    remove = prompt("Başka bir ürün silmek ister misiniz? Evet veya hayır").toLowerCase();
}


listCart();
totalCart();