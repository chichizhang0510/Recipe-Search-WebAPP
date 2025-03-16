// @ts-nocheck
import icons from "url:../../img/icons.svg";
import { Fraction } from "fractional";

class RecipeView {
  #parentElement = document.querySelector(".recipe");
  #data;
  #errorMessage = "We could not find the recipe. Please try another one!";
  #message = "We could not find the recipe. Please try another one!";

  render(data) {
    this.#data = data;
    const recipeHTML = this.#generateMarkUp();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("beforeend", recipeHTML);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
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
    this.#parentElement.insertAdjacentHTML("afterbegin", spinnerHTML);
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handler));
  }

  addHandlerDecreaseServings(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--decrease-servings");
      if (!btn) return;
      handler();
    });
  }

  addHandlerIncreaseServings(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--increase-servings");
      if (!btn) return;
      handler();
    });
  }

  addHandlerAddBookmark(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--bookmark");
      if (!btn) return;
      handler();
    });
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorMessage();

    this.#data = data;
    const newMarkup = this.#generateMarkUp();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));

    const curElements = Array.from(this.#parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
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

  #generateMarkUp() {
    return `
    <figure class="recipe__fig">
      <img src="${this.#data.image}" alt="${
      this.#data.title
    }" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this.#data.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this.#data.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${
      this.#data?.bookmarked ? "-fill" : ""
    }"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.#data.ingredients
          .map((item) => {
            return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${
              item.quantity ? new Fraction(item.quantity).toString() : ""
            }</div>
            <div class="recipe__description">
              <span class="recipe__unit">${item.unit}</span>
              ${item.description}
            </div>
          </li>`;
          })
          .join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this.#data.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.#data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
`;
  }

  #generateBookmarks(recipe) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${recipe.id}">
          <figure class="preview__fig">
            <img src="${recipe.image}" alt="${recipe.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
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

  renderBookmarks(bookmarks) {
    const place = document.querySelector(".bookmarks__list");
    let messageContainer = document.querySelector(".message");
    place.innerHTML = "";

    if (bookmarks.length === 0) {
      if (!messageContainer) {
        messageContainer = document.createElement("div");
        messageContainer.classList.add("message");
      }
      messageContainer.innerHTML = `
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>
          No bookmarks yet. Find a nice recipe and bookmark it :)
        </p>`;
      place.append(messageContainer);
      return;
    }

    if (messageContainer) messageContainer.remove();
    const bookmarkHTML = bookmarks.map(this.#generateBookmarks).join("");
    place.insertAdjacentHTML("afterbegin", bookmarkHTML);
  }
}

export default new RecipeView();
