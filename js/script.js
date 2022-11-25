let ratings = document.querySelectorAll(".rating");
let btn = document.querySelector("#button");
let thankYouCard = document.querySelector("#secundary-card");
let ratedCard = document.querySelector("#main-card");
let span = document.querySelector("#rated-value ");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    let rating = ratings[i].innerHTML;
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains("selected");
      ratings[i].classList.remove("selected");
    }

    ratings[i].classList.add("selected");

    btn.addEventListener("click", () => {
      ratedCard.style.display = "none";
      thankYouCard.style.display = "flex";
      span.innerHTML = rating;
    });
  });
}
