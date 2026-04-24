fetch("http://3.235.144.213/api/getHomes.php")
  .then(res => res.json())
  .then(allHomes => {
      const savedIds = JSON.parse(localStorage.getItem("savedHomes")) || [];
      const savedHomes = allHomes.filter(h => savedIds.includes(h.id));
      displaySaved(savedHomes);
  });

function displaySaved(homes) {
    const container = document.getElementById("saved-container");
    container.innerHTML = "";

    if (homes.length === 0) {
        container.innerHTML = "<p>No saved homes yet.</p>";
        return;
    }

    homes.forEach(home => {
        container.innerHTML += `
            <div class="saved-card">
                <img src="images/swipe-${home.id}.png" class="saved-img">
                <h3>${home.address}</h3>
                <p>${home.beds} beds • ${home.baths} baths</p>
                <p>$${Number(home.price).toLocaleString()}</p>
            </div>
        `;
    });
}