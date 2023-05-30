let Products = [
    {
        name1: '62inch 8K UHD LG OLED TV  - R18 999',
        name2: "Xbox Series S 1TB  - R11 999",
        name3: "500GB Xbox One S  - R4 499",
        name4: 'Phoenix H200-i5k Gaming PC <BR CLEAR="left"/>– Z590/i5-  11600k/16GB/RTX3060/512SSD/750W  - R 12 999',
        name5: "Gaming Monitor Png - Asus 35 Rog Strix Xg35vq  - R 7 999",
        name6: "Brother DCP-T720W 3-in-1 Wi-Fi Refill Inkjet Printer  - R3 499",
        name7: "Sony PlayStation 5 1TB+Controller  - R14 999",
        name8: "Xbox One Controller (Red)  - R1 399",
        name9: "Loudspeaker Wireless speaker JBL Boombox Audio  - R1 399",
        image1: "./content/pngegg (2).png",
        image2: "./content/pngimg.com - xbox_PNG101377.png",
        image3: "./content/pngegg (1).png",
        image4: "./content/thermaltake-h200tg-pc-gaming-case-south-africa.png",
        image5: "./content/pngegg.png",
        image6: "./content/pngwing.com (1).png",
        image7: "./content/[CITYPNG.COM]Ps5 Official Console And Controller - 1824x1302.png",
        image8: "./content/pngwing.com.png",
        image9: "./content/pngwing.com (2).png",
    }
];


let dispProducts = document.getElementById('Products');
Products.forEach((data) => {
    dispProducts.innerHTML += `<div class="container-fluid bg-secondary-subtle rounded-4 text-center flex" id="products">
    <p class="text-center">
        <a href=""><img src="${data.image1}" alt="" class="imgs"/><br>
          ${data.name1}
      </a></p><br>
    <p class="text-center">
        <a href=""><img src="${data.image2}" alt="" class="imgs"/><br>
        ${data.name2}
      </a></p><br>
      <p class="text-center">
        <a href=""><img src="${data.image3}" alt="" class="imgs"/><br>
        ${data.name3}
      </a></p><br>
      <br>
 <p class="text-center">
  <a href=""><img src="${data.image4}" alt="" class="imgs"/><br>
  ${data.name4}
</a></p>
<br>
 <p class="text-center">
  <a href=""><img src="${data.image5}" alt="" class="imgs"/><br>
  ${data.name5}
</a></p><br>
<p class="text-center">
    <a href=""><img src="${data.image6}" alt="" class="imgs"/><br>
    ${data.name6}
  </a></p><br>
 <p class="text-center">
  <a href=""><img src="${data.image7}" alt="" class="imgs"/><br>
  ${data.name7}
</a></p><br>
 <p class="text-center">
  <a href=""><img src="${data.image8}" alt="" class="imgs"/><br>
  ${data.name8}
</a></p><br>
 <p class="text-center">
  <a href=""><img src="${data.image9}" alt="" class="imgs"/><br>
  ${data.name9}
</a></p><br>
 
  </div>
  `;
});