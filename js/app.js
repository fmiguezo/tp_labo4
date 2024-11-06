const collapse = Array.from(document.getElementsByClassName("btn-collapse-custom"));

collapse.forEach((item) => {
  item.addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.textContent = "Ver más";
    } else {
      content.style.display = "block";
      this.textContent = "Ver menos";
    }
  });
});
