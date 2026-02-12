import {getRandomPokemon} from "./fetch-helpers.js"

const renderPokemon = (pokemonObj) => {

    const ul = document.getElementById("discovered-list");

const newLi = document.createElement('li')
const newName = document.createElement('p')
const newTypes = document.createElement('p')
const newImg = document.createElement('img')

newName.textContent = `Name: ${pokemonObj.name}`
newTypes.textContent = `Types: ${pokemonObj.types}`
newImg.src = pokemonObj.sprite;
newImg.alt = pokemonObj.name

newLi.append(newName, newTypes, newImg)
ul.prepend(newLi)
};

export const renderError = (msg) => {
    const newError = document.getElementById('error')
    newError.textContent = msg
};


export const renderSuccess = (msg) => {
    const newSuccess = document.getElementById('success')
    newSuccess.textContent = msg
};

export  {renderPokemon}