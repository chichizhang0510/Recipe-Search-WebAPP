import { RESULT_PER_PAGE } from "../config";
import icons from "url:../../img/icons.svg";

class PaginationView {
  #parentElement = document.querySelector(".pagination");

  render(search, maxPageNum) {
    this.#parentElement.innerHTML = "";
    const htmlTags = this.#generateMarkup(search.page, maxPageNum);
    this.#parentElement.insertAdjacentHTML("beforeend", htmlTags);
  }

  addHandleClick(handler) {
    this.#parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  #generateMarkup = function (page, maxPageNum) {
    const totalPages = Math.ceil(maxPageNum / RESULT_PER_PAGE);

    if (page == 1 && totalPages > 1) {
      return `
        <button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
    }

    if (page == totalPages && totalPages > 1) {
      return `
        <button data-goto="${
          page - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${page - 1}</span>
        </button>
      `;
    }
    if (page < totalPages) {
      return `
        <button data-goto="${
          page - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${page - 1}</span>
        </button>
        <button data-goto="${
          page + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
    }
  };
}

export default new PaginationView();
