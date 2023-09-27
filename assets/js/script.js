const searchForm = document.querySelector(".search-form");

function handleSearchSubmit(e) {
  e.preventDefault();
  var inputValue = document.querySelector(".search").value.trim();
  if (!inputValue) {
    alert("Please input a valid city name.");
    return;
  }
}

searchForm.addEventListener("submit", handleSearchSubmit);
