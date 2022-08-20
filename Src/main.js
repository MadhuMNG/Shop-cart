let shop = document.getElementById("shop");

let shopItemsData = [{
        id: "Flower1",
        name: "Splendid Flowers",
        price: 50,
        desc: "lorem ipsum",
        img: "images/flower1.jpeg"
    },
    {
        id: "Flower2",
        name: "Simply SunFlowers",
        price: 70,
        desc: "lorem ipsum",
        img: "images/flower2.jpeg"
    },
    {
        id: "Flower3",
        name: "Rose Blossoms",
        price: 90,
        desc: "lorem ipsum",
        img: "images/flower3.jpeg"
    },
    {
        id: "Flower4",
        name: "Sunshine Delight",
        price: 60,
        desc: "lorem ipsum",
        img: "images/flower4.jpeg",
    },
    {
        id: "Flower5",
        name: "Divine Garden",
        price: 50,
        desc: "lorem ipsum",
        img: "images/flower5.jpeg",
    },
    {
        id: "Flower6",
        name: "Amaranthus",
        price: 50,
        desc: "lorem ipsum",
        img: "images/flower8.jpeg",
    },

];
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            let search = basket.find((x) => x.id === id) || []
            return `
        <div id= product-id-${id} class="item">
      <img width="196" src=${img} alt="">
      <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
              <h2>€ ${price}</h2>
              <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-patch-minus-fill"></i>
                  <div id = ${id} class="quantity">
                  ${search.item === undefined? 0: search.item}
                  </div>
                  <i onclick="increment(${id})" class="bi bi-patch-plus-fill"></i>
              </div>
          </div>
      </div>
  </div>`;
        }));
};
generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    //console.log(basket);
    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);

    // console.log(basket);

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.Item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();