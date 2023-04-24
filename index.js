


const flowerOffer = (flowers) => {  
    
    const flowerWrapper = document.createElement("div");
    flowerWrapper.classList.add("single-flower");

    
    const flowerImage = document.createElement("img");
    flowerImage.src = flowers.photo_url;
    
    const flowerInfo = document.createElement("div");
    flowerInfo.classList.add("flower-info");
    
    const title = document.createElement("div");
    title.classList.add("flower-title");
    title.innerHTML = flowers.name;
    
     const priceLocation = document.createElement("div");
     priceLocation.classList.add("price-location-wrapper");
    flowerInfo.append(priceLocation);

     const price = document.createElement("div");
     price.classList.add("flower-price");
     price.innerHTML = flowers.price + " Eur";
     priceLocation.append(price);

     const location = document.createElement("div");
     location.classList.add("flower-location");
     location.innerHTML = flowers.location;
     priceLocation.append(location);

    const description = document.createElement("div");
    description.classList.add("flower-description");
    description.classList.add("cut-text");
    description.innerHTML = flowers.description;
    
    flowerWrapper.append(flowerImage);
    flowerWrapper.append(flowerInfo);
    flowerInfo.append(title);
    flowerInfo.append(priceLocation);
    flowerInfo.append(description);

    const link = document.createElement("a");
    link.classList.add("flower-link");
    link.href = "./flower.html";   
    
    link.addEventListener("click", () => {
        localStorage.setItem("id", flowers.id);
    });

    link.append(flowerWrapper);

    const mainPageInfo = document.getElementById("main-wrapper");
    mainPageInfo.append(link);

}



fetch("https://643d71146afd66da6af717b8.mockapi.io/flowers")
.then((res) => {
    return res.json();
})
    .then((data) => {
        data.sort((a, b) => {
            return a.price - b.price;
        });
    
        data.forEach((flower) => {
            flowerOffer(flower);
        });
    });
