
const flowerId = localStorage.getItem("id");

const elementsToScreen = (data) => {
  const photo = document.getElementById("flower-image");
  photo.style.backgroundImage = `url(${data.photo_url})`;
  
  const title = document.getElementById("name");
  title.innerHTML = data.name;

  const location = document.getElementById("location");
  location.innerHTML = data.location;

  const price = document.getElementById("price");
  price.innerHTML = data.price + " Eur";

  const description = document.getElementById("description");
  description.innerHTML = data.description;
}
const deleteButton = document.getElementById("delete-flower-btn");
deleteButton.innerText = "Delete Flower";
deleteButton.addEventListener("click", () => {
  fetch(`https://643d71146afd66da6af717b8.mockapi.io/flowers/${flowerId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      const successMsg = document.getElementById("delete-msg");
      successMsg.style.display = "flex";
      successMsg.style.justifyContent = "center";
      successMsg.style.alignItems = "center";
      successMsg.innerHTML = "Flower was successfully deleted!";
      window.scrollTo(0, 0);

      setTimeout(() => {
        window.location.href = "index.html";
        }, 2000);
      
    })
});



fetch(`https://643d71146afd66da6af717b8.mockapi.io/flowers/${flowerId}`)
  .then((res) => res.json())
  .then((data) => elementsToScreen(data));
