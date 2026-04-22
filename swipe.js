const hardcodedImages = {
  6: "images/swipe-2.png",
  7: "images/swipe-3.png",
  8: "images/swipe-4.png",
  9: "images/swipe-5.png",
  10: "images/swipe-6.png",
  11: "images/swipe-7.png",
  12: "images/swipe-8.png",
  13: "images/swipe-9.png",
  14: "images/swipe-10.png",
  15: "images/swipe-11.png",
  16: "images/swipe-12.png",
  17: "images/test-image-listing.png"
};

let homes = [];
let index = 0;

// 2. Fetch homes from backend
fetch("http://35.175.212.12/api/getHomes.php")
  .then(res => res.json())
  .then(data => {
    homes = data;
    showHome();
  })
  .catch(err => console.error("Fetch error:", err));

// 3. Display the current home
function showHome() {
  const home = homes[index];

  document.getElementById("home-address").textContent = home.address;
  document.getElementById("home-price").textContent =
    "$" + Number(home.price).toLocaleString();

  // Use your hard-coded image
  document.getElementById("home-image").src = hardcodedImages[home.id];
}

// 4. Swipe buttons
document.getElementById("like-btn").onclick = () => {
  index = (index + 1) % homes.length;
  showHome();
};

document.getElementById("dislike-btn").onclick = () => {
  index = (index + 1) % homes.length;
  showHome();
};