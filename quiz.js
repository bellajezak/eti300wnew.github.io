console.log("Beds:", localStorage.getItem("beds"));
console.log("Baths:", localStorage.getItem("baths"));
console.log("PriceMin:", localStorage.getItem("priceMin"));
console.log("PriceMax:", localStorage.getItem("priceMax"));
console.log("SqftMin:", localStorage.getItem("sqftMin"));
console.log("SqftMax:", localStorage.getItem("sqftMax"));

document.getElementById("submitQuiz").addEventListener("click", () => {

    // Save quiz values
    localStorage.setItem("beds", document.getElementById("beds").value);
    localStorage.setItem("baths", document.getElementById("baths").value);

    localStorage.setItem("priceMin", document.getElementById("priceMin").value);
    localStorage.setItem("priceMax", document.getElementById("priceMax").value);

    localStorage.setItem("sqftMin", document.getElementById("sqftMin").value);
    localStorage.setItem("sqftMax", document.getElementById("sqftMax").value);
});