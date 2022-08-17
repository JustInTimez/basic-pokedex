function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Will only give objects
    console.log(name + " - " + type + " - " + region + " region") // remove once you have clear understanding


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;


    // Can log them since they are now pure Strings
    console.log(name + " - " + type + " - " + region + " region") // remove once you have clear understanding

    /*-----------------------------------------------
     * Add your solution code here
     *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */

    // Use If to ensure input validation (ensure input fields are !empty)
    if (name == null || name == "") {
        document.getElementById("otherText").innerHTML = "Trainer, you need to <i>enter</i> a valid Pokemon name! <br>" + " Grab a Pokemon name from " + `<a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number" target="_blank"> bulbapedia!</a>` + " and try again!";
    } else {
        document.getElementById("otherText").style.display = "none";
    }

    // Create pokemon object here (const pokemon) using user input Strings
    const pokemon = {name, type, region};

    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it
    const pokemonData = document.createElement("span");
    const newSpan = document.createTextNode(name, type, region);
    pokemonData.appendChild(newSpan); 
    document.getElementById("addText").appendChild(pokemonData);
    console.log(pokemon);

    /* --- Part 2 : Creating other DOM Objects --- */

    // Create HTML li element here (const pokedexEntry)
    const pokedexEntry = document.createElement("li");

    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
    pokedexEntry.classList.add(pokemon.type);
    console.log(pokedexEntry);


    // Creating a preview button (using a Template Literal)
    // this code is for an html form that will Google search the name of the pokemon
    const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit">
            </form>
        `
}

/* --- Part 3 : Add things into the DOM --- */

        // Firstly append pokemonData to the innerHTML of pokedexEntry


        // Secondly append the previewButton to innerHTML of pokedexEntry


        // Lastly we will get the ul List element that is meant to contain all pokedex entries
        // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


/*-----------------------------------------------
* Solution must be above this comment
*---------------------------------------------*/

