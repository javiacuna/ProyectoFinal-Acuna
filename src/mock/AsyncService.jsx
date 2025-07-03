export const products = [
  {
    "brand": "Samsung",
    "name": "Samsung Galaxy A54",
    "unit_price": 449.99,
    "stock": 30,
    "img": "https://cdn.movertix.com/media/catalog/product/s/a/samsung-galaxy-a54-5g-dual-sim-awesome-black-256gb-and-8gb-ram-sm-a546b-ds_1.jpg"
  },
  {
    "brand": "Samsung",
    "name": "Samsung Galaxy Z Flip 5",
    "unit_price": 999.99,
    "stock": 10,
    "img": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip5-5g-r1.jpg"
  },
  {
    "brand": "Apple",
    "name": "iPhone 15 Pro Max",
    "unit_price": 1599.00,
    "stock": 8,
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525491_sd.jpg"
  },
  {
    "brand": "Apple",
    "name": "iPhone 14",
    "unit_price": 899.00,
    "stock": 20,
    "img": "https://cdn.movertix.com/media/catalog/product/i/p/iphone-14-midnight-256gb_2.jpg"
  },
  {
    "brand": "Apple",
    "name": "iPhone SE (2022)",
    "unit_price": 429.00,
    "stock": 25,
    "img": "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_iphone_se_2022.jpg"
  },
  {
    "brand": "Xiaomi",
    "name": "Xiaomi Redmi Note 13 Pro",
    "unit_price": 349.99,
    "stock": 50,
    "img": "https://www.powerplanetonline.com/cdnassets/xiaomi_redmi_note_13_pro_4g_lila_01_l.jpg"
  },
  {
    "brand": "Xiaomi",
    "name": "Xiaomi 13T Pro",
    "unit_price": 649.99,
    "stock": 12,
    "img": "https://cdn-files.kimovil.com/default/0009/25/thumb_824996_default_big.jpg"
  },
  {
    "brand": "Xiaomi",
    "name": "Xiaomi Poco X6",
    "unit_price": 299.99,
    "stock": 35,
    "img": "https://media.ldlc.com/r1600/ld/products/00/06/09/74/LD0006097489_0006097498.jpg"
  },
  {
    "brand": "Motorola",
    "name": "Motorola Edge 40 Pro",
    "unit_price": 799.99,
    "stock": 14,
    "img": "https://www.techspot.com/images/products/2023/smartphones/org/2023-04-10-product-2.jpg"
  },
  {
    "brand": "Motorola",
    "name": "Motorola G84",
    "unit_price": 299.99,
    "stock": 22,
    "img": "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g84-1.jpg"
  },
  {
    "brand": "Motorola",
    "name": "Motorola Razr 40 Ultra",
    "unit_price": 1099.99,
    "stock": 6,
    "img": "https://cdn.smart-gsm.com/blog/wp-content/uploads/2023/06/Motorola-Razr-40-Ultra.jpg"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id);
      resolve(product);
    }, 1000);
  });
};

export const getProductsByBrand = (brandId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter((prod) => prod.brand === brandId);
      resolve(filtered);
    }, 1000);
  });
};
