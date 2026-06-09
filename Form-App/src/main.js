import { getRandomPokemon } from "./fetch-helpers.js";
import { renderPokemon } from "./dom-helpers.js";
import { renderError } from "./dom-helpers.js";
import { renderSuccess } from "./dom-helpers.js";

const getAndRenderPokemon = async () =>{
    try{
          const callPokemon = await getRandomPokemon()

    if (callPokemon.error){
        renderSuccess("")
        renderError(callPokemon.error.message)
        return
    }
    renderPokemon(callPokemon.data);
    renderSuccess(`${callPokemon.data.name} was discovered!`);
    renderError("");

    //  Form Submission Part 2C
    captureButton.addEventListener('sumbit', async (event) =>{
    event.preventDefault()



    captureButton.rest();
})

    } catch (err){
        console.error("Error: unable to capture Pokémon. Please try again later" , err )
    }
}
  

const button = document.getElementById("discover-button")
button.addEventListener('click', getAndRenderPokemon)