const infos = document.querySelectorAll(".glasgow_info");

infos.forEach((glasgow_info) => {
  glasgow_info.addEventListener("hover", () => {
    glasgow_info.classList.toggle("active")
  })
})
