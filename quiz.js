fetch("http://44.200.170.16/api/saveQuiz.php" , {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        budget_max: 500000,
        beds_min: 3,
        baths_min: 2,
        preferred_city: "State College",
        preferred_zip: "16801"
    })
})
.then(res => res.json())
.then(data => console.log(data)
.then(err => console.error(err)));

localStorage.setItem("beds", document.getElementById("beds").value);
localStorage.setItem("baths", document.getElementById("baths").value);

localStorage.setItem("priceMin", document.getElementById("priceMin").value);
localStorage.setItem("priceMax", document.getElementById("priceMax").value);

localStorage.setItem("sqftMin", document.getElementById("sqftMin").value);
localStorage.setItem("sqftMax", document.getElementById("sqftMax").value);