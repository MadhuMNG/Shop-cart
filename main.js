let shop = document.getElementById("shop");

let shopItemsData = [{
        id: "Flowers1",
        name: "Splendid Flowers",
        price: 50,
        desc: "lorem ipsum",
        img: "images/flower1.jpeg"
    },
    {
        id: "Flowers2",
        name: "sun Flowers",
        price: 70,
        desc: "lorem ipsum",
        img: "images/flower2.jpeg"
    },
    {
        id: "Flowers3",
        name: "Rose Flowers",
        price: 90,
        desc: "lorem ipsum",
        img: "images/flower3.jpeg"
    },
    {
        id: "Flowers4",
        name: "Special Flowers",
        price: 60,
        desc: "lorem ipsum",
        img: "images/flower4.jpeg"
    },
];

let basket = [{}];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            return `
        <div id= product-id-${id} class="item">
      <img width="196" src="${img}" alt="">
      <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
              <h2>${price}</h2>
              <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-patch-minus-fill"></i>
                  <div id = ${id} class="quantity">0</div>
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
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search.item === 0) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item -= 1;

    }
    // console.log(basket);
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.Item);
    document.getElementById(id).innerHTML = search.item;
    calculation()
};
let calculation = () => {
    let cartIcon = getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}