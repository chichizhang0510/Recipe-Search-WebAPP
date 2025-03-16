import { async } from "regenerator-runtime";
import { API_KEY, RESULT_PER_PAGE } from "./config";
import { getJSON, sendJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    page: 1,
    data: [],
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    url = `https://forkify-api.jonas.io/api/v2/recipes/${id}?key=${API_KEY}`;
    const data = await getJSON(url);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    if (state.bookmarks.some((item) => item.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    url = `https://forkify-api.jonas.io/api/v2/recipes?search=${query}?key=${API_KEY}`;
    const data = await getJSON(url);
    const recipes = data.data.recipes;
    state.search.data = recipes;
    return recipes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSearchResultsPage = function (
  page = state.search.page,
  data = model.state.search.results
) {
  state.search.page = page;
  const start = (page - 1) * 10;
  const end = (page - 1) * 10 + RESULT_PER_PAGE;
  return data.slice(start, end);
};

export const updateServings = function (newServings) {
  //   console.log(state.recipe.ingredients);
  state.recipe.ingredients.forEach((item) => {
    item.quantity = (item.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map((entry) => {
        const [quantity, unit, description] = entry[1].split(",");
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipeData = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await sendJSON(
      `https://forkify-api.jonas.io/api/v2/recipes?key=${API_KEY}`,
      recipeData
    );
    state.recipe = {
      id: data.data.recipe.id,
      ...data.data.recipe,
    };
    state.bookmarks.push(state.recipe);
    persistBookmarks();
  } catch (err) {
    console.error("上传食谱失败:", err);
    throw err;
  }
};

export const addBookmark = function (recipe) {
  if (!recipe) return;

  if (!recipe.bookmarked) {
    state.bookmarks.push(recipe);
    state.recipe.bookmarked = true;
  } else {
    recipe.bookmarked = false;
    state.bookmarks = state.bookmarks.filter((b) => b.id !== recipe.id);
  }

  persistBookmarks();
};

const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

// 页面刷新时恢复书签
const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) {
    state.bookmarks = JSON.parse(storage);
  }
};
init();
