const newLover = document.querySelector(".body");
function onClick() {
  const value = Math.round(Math.random() * 100);
  const a = document.getElementById("name").value;
  const b = document.getElementById("loverName").value;
  if (a && b) {
    newLover.innerHTML = value + "%";
  } else {
    newLover.innerHTML = `Enter Names`;
  }
}
document.querySelector(".button").addEventListener("click", () => {
  onClick();
});
