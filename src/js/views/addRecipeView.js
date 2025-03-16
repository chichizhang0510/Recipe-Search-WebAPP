import icons from "url:../../img/icons.svg";

class AddRecipeView {
  #parentElement = document.querySelector(".upload");
  #window = document.querySelector(".add-recipe-window");
  #overlay = document.querySelector(".overlay");
  #btnOpen = document.querySelector(".nav__btn--add-recipe");
  #btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    this.#addHandlerShowWindow();
    this.#addHandlerHideWindow();
  }

  #addHandlerShowWindow() {
    this.#btnOpen.addEventListener("click", () => {
      this.#overlay.classList.toggle("hidden");
      this.#window.classList.toggle("hidden");
    });
  }

  #addHandlerHideWindow() {
    this.#btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this.#overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  toggleWindow = () => {
    this.#overlay.classList.toggle("hidden");
    this.#window.classList.toggle("hidden");
  };

  addHandlerUpload(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      handler(data);
    });
  }
}

export default new AddRecipeView();
