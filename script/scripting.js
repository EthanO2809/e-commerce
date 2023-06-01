let Products = [
    {
        name1: 'Phoenix H200-i5k Gaming PC <BR CLEAR="left"/> – Z590/i5-  11600k/16GB/RTX3060/512SSD/750W',
        name2: "Gaming Monitor Png - Asus 35 Rog Strix Xg35vq",
        name3: "500GB Xbox One S",
        name4: "62inch 8K UHD LG OLED TV",
        image1: "./content/thermaltake-h200tg-pc-gaming-case-south-africa.png",
        image2: "./content/pngegg.png",
        image3: "./content/pngegg (1).png",
        image4: "./content/pngegg (2).png",
    }
];


let dispProducts = document.getElementById('Products');
Products.forEach((data) => {
    dispProducts.innerHTML += `

<div class="container-fluid bg-black rounded-4">
      <br><h1 class="fs-3 text-white h2">Top Picks</h1>
      <br>
     <p class="text-center">
      <a href="" class="text-white"><img src="${data.image1}" alt="" width="300rem" class="img-fluid" loading="lazy"/><br>
      ${data.name1}
    </a></p>
<br>
     <p class="text-center">
      <a href="" class="text-white"><img src="${data.image2}" alt="" width="300rem" class="img-fluid" loading="lazy"/><br>
      ${data.name2}
    </a></p><br>

     <p class="text-center">
      <a href="" class="text-white"><img src="${data.image3}" alt="" width="300rem" class="img-fluid" loading="lazy"/><br>
      ${data.name3}
    </a></p><br>
     <p class="text-center">
      <a href="" class="text-white"><img src="${data.image4}" alt="" width="300rem" class="img-fluid" loading="lazy"/><br>
      ${data.name4}
    </a></p><br>
      
    </div>
    `;
});