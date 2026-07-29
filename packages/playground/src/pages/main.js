for (const input of document.querySelectorAll("[data-indeterminate]")) {
  input.indeterminate = true
  input.addEventListener("click", (event) => event.preventDefault())
}
