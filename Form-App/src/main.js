import { getRandomPokemon, postDiscoveredPokemon } from "./fetch-helpers.js";
import { renderPokemon, renderError, renderSuccess } from "./dom-helpers.js";

const getAndRenderPokemon = async () => {
  try {
    const callPokemon = await getRandomPokemon();
    if (callPokemon.error) {
      renderSuccess("");
      renderError(callPokemon.error.message);
      return;
    }
    renderPokemon(callPokemon.data);
    renderSuccess(`${callPokemon.data.name} was discovered!`);
    renderError("");
  } catch (err) {
    console.error("Error: unable to capture Pokémon. Please try again later", err);
  }
};

getAndRenderPokemon();

const button = document.getElementById("discover-button");
button.addEventListener('click', getAndRenderPokemon);

const captureForm = document.getElementById("capture-form");
captureForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(captureForm);
  const formValues = Object.fromEntries(formData);
  formValues.isFavorite = captureForm.elements.isFavorite.checked; 

  const { data, error } = await postDiscoveredPokemon(formValues);

  if (error) {
    renderError("Error: unable to capture Pokémon. Please try again later"); 
    renderSuccess("");
    return;
  }

  renderSuccess(`${formValues.name} has been captured!`); 
  renderError("");
  captureForm.reset();
});