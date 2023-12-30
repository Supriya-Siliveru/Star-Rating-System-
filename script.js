const questionText = document.querySelector(".exp-que");
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const ratingBox = document.querySelector(".stars");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    ratingBox.style.display = "none";
    post.style.display = "block";
    questionText.style.display = "none";
    editBtn.onclick = () => {
        ratingBox.style.display = "block";
        post.style.display = "none";
    }
    return false;
}