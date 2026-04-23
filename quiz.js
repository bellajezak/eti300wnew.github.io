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