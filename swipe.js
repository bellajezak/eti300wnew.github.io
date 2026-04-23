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
fetch("http://44.200.170.16/api/getHomes.php")
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
  document.getElementById("home-beds").textContent = home.beds;
  document.getElementById("home-baths").textContent = home.baths;
  document.getElementById("home-location").textContent = `${home.city}, ${home.state} ${home.zip_code}`;
  // Use your hard-coded image
  document.getElementById("home-image").src = hardcodedImages[home.id];
  document.getElementById("progress-indicator").textContent =
    `Home ${index + 1} of ${homes.length}`;
}

function animateCard(animationClass) {
    const card = document.getElementById("swipe-card");

    card.classList.add(animationClass);

    setTimeout(() => {
        card.classList.remove(animationClass);
        index = (index + 1) % homes.length;
        showHome();
    }, 450); // matches spin animation duration
}
// 4. Swipe buttons
document.getElementById("like-btn").addEventListener("click", () => {
    animateCard("spin-right");
});

document.getElementById("dislike-btn").addEventListener("click", () => {
    animateCard("spin-left");
});
