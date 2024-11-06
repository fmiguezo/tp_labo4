const collapse = Array.from(document.getElementsByClassName("btn-collapse-custom"));

collapse.forEach((item) => {
  item.addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
