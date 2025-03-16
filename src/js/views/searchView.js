import icons from "url:../../img/icons.svg";

class SearchView {
  #parentElement = document.querySelector(".search");
  #dataPlace = document.querySelector(".results");
  #errorMessage = "No recipe found for your query! Please try again :)";
  #message = "We could not find recipes. Please try another one!";

  getQuery() {
    const query = this.#parentElement.querySelector(".search__field").value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentElement.querySelector(".search__field").value;
  }

  addHandleSearch(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  renderSpinner() {
    const spinnerHTML = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
        `;
    this.#clear();
    this.#dataPlace.insertAdjacentHTML("afterbegin", spinnerHTML);
  }

  #clear() {
    this.#dataPlace.innerHTML = "";
  }

  renderErrorMessage(message = this.#errorMessage) {
    const errorMessage = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${this.#errorMessage}</p>
        </div>
        `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", errorMessage);
  }

  renderMessage(message = this.#message) {
    const messageHTML = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
  }

  #generateSearchResult(recipe) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.image_url}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title.substring(0, 23)} ...</h4>
            <p class="preview__publisher">${recipe.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
  }

  renderSearchResult(recipesArray) {
    this.#clear();
    this.#dataPlace.insertAdjacentHTML(
      "afterbegin",
      recipesArray.map((recipe) => this.#generateSearchResult(recipe)).join("")
    );
  }
}

export default new SearchView();
