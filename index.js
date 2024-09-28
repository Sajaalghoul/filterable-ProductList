//constants
const customersProduct = document.getElementById("customersProduct");
const filterCateogry = document.getElementById("filterCateogry");
///vars
let products = [
  {
    id: 0,
    name: "Running Shoes",
    price: 10079,
    detail: "High-performance running shoes for athletes.",
    image:
      "https://vader-prod.s3.amazonaws.com/1690535117-race-light-mens-trail-running-shoes-sky-blue-and-black.jpg",
    category: "Sport",
  },
  {
    id: 1,
    name: "Smartphone",
    price: 2799,
    detail: "The latest smartphone with advanced features.",
    image: "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 2024,
    detail: "Comfortable cotton t-shirt for everyday wear.",
    image:
      "https://www.thehammondsgroup.com/wp-content/uploads/2022/03/white-long-sleeve.png",
    category: "Clothes",
  },
  {
    id: 3,
    name: "Laptop",
    price: 5299,
    detail: "Powerful laptop for work and entertainment.",
    image: "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Football",
    price: 1519,
    detail: "High-quality football for sports enthusiasts.",
    image:
      "https://vader-prod.s3.amazonaws.com/1690535117-race-light-mens-trail-running-shoes-sky-blue-and-black.jpg",
    category: "Sport",
  },
  {
    id: 5,
    name: "Headphones",
    price: 10129,
    detail: "Over-ear headphones for an immersive audio experience.",
    image: "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Jeans",
    price: 10439,
    detail: "Stylish and comfortable jeans for a trendy look.",
    image:
      "https://www.thehammondsgroup.com/wp-content/uploads/2022/03/white-long-sleeve.png",
    category: "Clothes",
  },
  {
    id: 7,
    name: "Basketball",
    price: 29,
    detail: "Durable basketball suitable for indoor and outdoor play.",
    image:
      "https://vader-prod.s3.amazonaws.com/1690535117-race-light-mens-trail-running-shoes-sky-blue-and-black.jpg",
    category: "Sport",
  },
  {
    id: 8,
    name: "Gaming Console",
    price: 6399,
    detail: "State-of-the-art gaming console for gaming enthusiasts.",
    image: "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    category: "Electronics",
  },
  {
    id: 9,
    name: "Dress Shirt",
    price: 1534,
    detail: "Formal dress shirt for a sharp and professional look.",
    image:
      "https://www.thehammondsgroup.com/wp-content/uploads/2022/03/white-long-sleeve.png",
    category: "Clothes",
  },
  {
    id: 10,
    name: "Running Shorts",
    price: 1519,
    detail: "Comfortable running shorts for active individuals.",
    image:
      "https://vader-prod.s3.amazonaws.com/1690535117-race-light-mens-trail-running-shoes-sky-blue-and-black.jpg",
    category: "Sport",
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    price: 69,
    detail: "Wireless earbuds for a tangle-free music experience.",
    image: "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    category: "Electronics",
  },
  {
    id: 12,
    name: "Sweater",
    price: 1529,
    detail: "Warm and cozy sweater for chilly days.",
    image:
      "https://www.thehammondsgroup.com/wp-content/uploads/2022/03/white-long-sleeve.png",
    category: "Clothes",
  },
  {
    id: 13,
    name: "Yoga Mat",
    price: 3024,
    detail: "High-quality yoga mat for a comfortable yoga practice.",
    image:
      "https://vader-prod.s3.amazonaws.com/1690535117-race-light-mens-trail-running-shoes-sky-blue-and-black.jpg",
    category: "Sport",
  },
  {
    id: 14,
    name: "Digital Camera",
    price: 499,
    detail: "Advanced digital camera for photography enthusiasts.",
    image: "https://m.media-amazon.com/images/I/51JBovbSnML.jpg",
    category: "Electronics",
  },
  {
    id: 15,
    name: "Backpack",
    price: 39,
    detail: "Durable backpack for carrying essentials on the go.",
    image:
      "https://www.thehammondsgroup.com/wp-content/uploads/2022/03/white-long-sleeve.png",
    category: "Clothes",
  },
];
let cateogriesDisplayed = products;
///////////////
//display products
function displayCustomerProducts(products) {
  products.forEach((product) => {
    customersProduct.innerHTML += `
        <div class="flex products__product" product-id=${product.id}>
        <img src=${product.image} alt="productImage" class="product__img">
        <p class="product__name">${product.name}</p>
        <p class="product__price">${product.price} $</p>
        <p class="product__cateogry">${product.category}</p>
        <p class="product__detail">${product.detail}</p>
          </div>`;
  });
}
displayCustomerProducts(products);

/////filter by cateogry
filterCateogry.addEventListener("click", cateogryFiltering);
function cateogryFiltering(cateogry) {
  customersProduct.innerHTML = "";
  cateogriesDisplayed = products.filter((product) => {
    if (cateogry.target.value === "allCategories") {
      return products;
    } else {
      return (
        product.category.toLowerCase() === cateogry.target.value.toLowerCase()
      );
    }
  });
  displayCustomerProducts(cateogriesDisplayed);
}
