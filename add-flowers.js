const addFlowerButton = document.getElementById("add-flower");
addFlowerButton.addEventListener('click', () => {
    const flowerName = document.getElementById("name").value;
    const flowerPrice = document.getElementById("price").value;
    const flowerLocation = document.getElementById("location").value;
    const flowerDescription = document.getElementById("description").value;
    const flowerImage = document.getElementById("photo_url").value;
   
    if (!flowerName || !flowerPrice || !flowerLocation || !flowerDescription || !flowerImage) {
        const messageElement = document.getElementById("validation-msg");
        messageElement.innerHTML = "Please fill out all fields.";
        return;
    }

    const newFlower = {
    name:flowerName,
    price:flowerPrice,
    location:flowerLocation,
    description:flowerDescription,
    photo_url:flowerImage,
};


fetch("https://643d71146afd66da6af717b8.mockapi.io/flowers",  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFlower),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMsg = document.getElementById("success-msg");
      successMsg.innerHTML = "Flower was successfully added!";

      setTimeout(()=>{
        window.location.replace("./add-flowers.html");
      }, 2000)
    });
});
