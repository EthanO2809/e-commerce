let Products = [
  {
    image: "./content/pngegg (2).png",
    Name: '62inch 8K UHD LG OLED TV',
    Price: "- R18 999"
  },
  {
    image: "./content/pngimg.com - xbox_PNG101377.png",
    Name: "Xbox Series X 1TB",
    Price: "- R12 499"
  },
  {
    image: "./content/pngegg (1).png",
    Name: '500GB Xbox One S',
    Price: "- R4 499"
  },
  {
    image: "./content/thermaltake-h200tg-pc-gaming-case-south-africa.png",
    Name: 'Phoenix H200-i5k Gaming PC <BR CLEAR="left"/> – Z590/i5-  11600k/16GB/RTX3060/512SSD/750W',
    Price: "- R12 999"
  },
  {
    image: "./content/pngegg.png",
    Name: 'Gaming Monitor Png - Asus 35 Rog Strix Xg35vq',
    Price: "- R 7 999"
  },
  {
    image: "./content/pngwing.com (1).png",
    Name: 'Brother DCP-T720W 3-in-1 Wi-Fi Refill Inkjet Printer',
    Price: "- R3 499"
  },
  {
    image: "./content/[CITYPNG.COM]Ps5 Official Console And Controller - 1824x1302.png",
    Name: 'Sony PlayStation 5 1TB+Controller',
    Price: "- R14 999"
  },
  {
    image: "./content/pngwing.com.png",
    Name: 'Xbox One Controller (Red)',
    Price: "- R1 399"
  },
  {
    image: "./content/pngwing.com (2).png",
    Name: 'Loudspeaker Wireless speaker JBL Boombox Audio',
    Price: "- R1 399"
  },
  {
    image: "./content/pngegg (3).png",
    Name: 'MSI VIGOR GK80 RED Keyboard Cherry MSI Vigor GK80 RGB Mechanical Gaming Keyboard',
    Price: "- R1 299"
  },
  {
    image: "./content/pngegg (4).png",
    Name: 'ROG STRIX SCAR Edition Gaming Laptop GL503',
    Price: "- R14 799"
  },
  {
    image: "./content/pngegg (5).png",
    Name: 'XPERT-H2 Gaming-Headset',
    Price: "- R899"
  },
];

let dispProducts = document.querySelector('#Products.row');
Products.forEach((data) => {
    dispProducts.innerHTML += `<div class="container-fluid bg-secondary-subtle rounded-4 text-center flex row col-12" id="products">
    <p class="text-center">
        <img src="${data.image}" alt="" class="imgs img-fluid"/><BR CLEAR="left"/>
        <a href="" class="blck">${data.Name}<BR CLEAR="left"/>${data.Price}
      </a></p><br>
  
  </div>
  `;
});