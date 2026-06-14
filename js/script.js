let currentProduct = {};
const buttons =
document.querySelectorAll(".filter-btn");

const cards =
document.querySelectorAll(".product-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.getAttribute("data-filter");
cards.forEach((card, index) => {

    if(filter === "favorites"){

        if(localStorage.getItem("heart" + index) === "liked"){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }

    }

    else if(
        filter === "all" ||
        card.classList.contains(filter)
    ){
        card.style.display = "";
    }

    else{
        card.style.display = "none";
    }

});

    });

});

function openModal(name, price, description, image){

    document.getElementById("modalName").innerText = name;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalDescription").innerHTML = description;
    document.getElementById("modalImage").src = image;

    document.getElementById("modalWhatsapp").href =
        `https://wa.me/919876543210?text=Hello Narivastra, I am interested in ${name}`;

    document.getElementById("productModal").style.display = "block";
    
}

document.addEventListener("click", function(e){

    if(e.target.classList.contains("close")){
        document.getElementById("productModal").style.display = "none";
    }

});

const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart, index) => {

    const saved =
        localStorage.getItem("heart" + index);

    if(saved === "liked"){
        heart.textContent = "❤️";
    }

    heart.addEventListener("click", () => {

        if(heart.textContent === "🤍"){

            heart.textContent = "❤️";

            localStorage.setItem(
                "heart" + index,
                "liked"
            );

        }else{

            heart.textContent = "🤍";

            localStorage.removeItem(
                "heart" + index
            );

        }

    });

});



const searchInput =
document.getElementById("searchInput");

const clearSearch =
document.getElementById("clearSearch");

searchInput.addEventListener("keyup", () => {

    const searchValue =
    searchInput.value.toLowerCase();

    let found = false;

    // Show or hide X button
    if(searchValue.length > 0){
        clearSearch.style.display = "block";
    }else{
        clearSearch.style.display = "none";
    }

    cards.forEach(card => {

        const productName =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        if(productName.includes(searchValue)){

            card.style.display = "";
            found = true;

        }else{

            card.style.display = "none";

        }

    });

    document.getElementById("noResults").style.display =
        found ? "none" : "block";

});

// Clear Search
clearSearch.addEventListener("click", () => {

    searchInput.value = "";

    cards.forEach(card => {
        card.style.display = "";
    });

    document.getElementById("noResults").style.display = "none";

    clearSearch.style.display = "none";

});

