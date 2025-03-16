import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import paginationView from "./views/paginationView.js";
import addRecipeView from "./views/addRecipeView.js";

// 提供 polyfill（补丁），使代码兼容老旧浏览器，特别是当你使用 Babel 进行编译时。
import "regenerator-runtime/runtime";
import "core-js/stable";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner(recipeContainer);
    controlPagination(1);

    // load recipe
    await model.loadRecipe(id);

    // render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderErrorMessage();
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    searchView.renderSpinner(recipeContainer);

    const data = await model.loadSearchResults(query);
    const data_current = model.getSearchResultsPage(1, data);
    searchView.renderSearchResult(data_current);
    paginationView.render(model.state.search, data.length);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  const data = model.state.search.data;
  const data_current = model.getSearchResultsPage(goToPage, data);
  searchView.renderSearchResult(data_current);
  paginationView.render(model.state.search, data.length);
};

const controlDecreaseServings = function () {
  model.updateServings(
    model.state.recipe.servings >= 2 ? model.state.recipe.servings - 1 : 1
  );
  recipeView.update(model.state.recipe);
};

const controlIncreaseServings = function () {
  model.updateServings(model.state.recipe.servings + 1);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  model.addBookmark(model.state.recipe);
  recipeView.renderBookmarks(model.state.bookmarks);
  // console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
  controlBookmarks();
};

const controlBookmarks = function () {
  recipeView.renderBookmarks(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    recipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    const newUrl = `${window.location.origin}/#${model.state.recipe.id}`;
    window.history.pushState(null, "", newUrl);
    controlRecipes();
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, 1000);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandleSearch(controlSearchResults);
  paginationView.addHandleClick(controlPagination);
  recipeView.addHandlerDecreaseServings(controlDecreaseServings);
  recipeView.addHandlerIncreaseServings(controlIncreaseServings);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  controlBookmarks();
};

init();
