const getRandomPokemon = async ()=>{
    try{
        const randonmPokimon = Math.floor(Math.random() * 150) + 1

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randonmPokimon}`)
        
        if (!response.ok){
            throw new Error("Could not fetch the resousrce")
        }
        const data = await response.json()

        const pokemonTypes = data.types.map(item => item.type.name).join(', ');
        const spriteURL = data.sprites.front_default;

        const pokemonObj = {
            name: data.name,
            types: pokemonTypes,
            sprite: spriteURL
        }
        return { data: pokemonObj, error: null }; 

    } catch (err){
        return { data: null, error: err }
    }
}
export { getRandomPokemon };


//  Post a Discovered Pokémon part 2B
const postDiscoveredPokemon = async (formData) =>{
    try{
        const response = await fetch("https://formspree.io/f/mreegkrb", {
            method: "POST",
            body: JSON.stringify(formData),
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

       const responseData = await response.json()

      return { data: responseData, error: null }
    } catch(err) {
        return { data: null, error: err }
    }
}
export {postDiscoveredPokemon};
