(() => {

    const pokemonButton = document.querySelectorAll(".pokemon-button")

    let pokemonData = [
        {
            image : "eevee",
            name : "Name: Viola",
            species : "Species: Eevee",
            ability : "Ability: Adaptability",
            gimmick : "Gimmick: Bond Phenomenon",
            bio : "Story: Delilah first met Viola in the Kalos region, unbeknownst to her. The young Eevee saw the trainer desperately attempt to find an Eevee to be her partner. After she gave up, the Eevee followed her all the way to the Kanto region, where the two finally met and became life-long partners. Through their bond, Viola has developed a unique power called Bond Phenomenon that allows her to use special moves that normal Eevee can't."
        },

        {
            image : "swampert",
            name : "Name: Skipper",
            species : "Species: Swampert",
            ability : "Ability: Torrent",
            gimmick : "Gimmick: Mega Evolution",
            bio : "Story: Skipper was the very first Pokemon Delilah acquired when she became a trainer. As a gift from Professor Birch, she was given a selection of three Pokemon to choose from. She had her whole trainer career planned out, and selected the Mud Fish Pokemon, Mudkip. Together, the little Mudkip grew into a powerful Swampert thanks to the many battles Delilah used him in. Delilah found a mysterious stone that resonated with Skipper, and thanks to a new accessory, the two took their bond even further and gave Skipper the ability to mega evolve."
        },

        {
            image : "charizard",
            name : "Name: Blaze",
            species : "Species: Charizard",
            ability : "Ability: Blaze",
            gimmick : "Gimmick: Gigantamax",
            bio : "Story: After hearing that a young, new trainer was travelling half way across the world just to capture a Pokemon, Professor Birch contacted his fellow colleague, Professor Sycamore, to help guide her. Sycamore met Delilah at the airport to hear her goal. While he was impressed by her determination, he was concerned about her safety, and offered her a Pokemon to help protect her, much to her surprise. She selected the Lizard Pokemon, Charmander, to help her achieve her goals. Through countless battles, Blaze evolved into a Charmeleon, then into Charizard, and gained the ability to fly. He is protective of his trainer and won't hesitate to unleash his flames when they're needed."
        },

        {
            image : "torterra",
            name : "Name: Mikey",
            species : "Species: Torterra",
            ability : "Ability: Overgrow",
            gimmick : "Gimmick: None",
            bio : "Story: After succeeding Wallace in Hoenn's Pokemon League, Delilah decided to travel around the world to experience what the Pokemon world had to offer. Her first stop was Sinnoh, where she met the region's Champion, Cynthia, in Sandgem Town. The two battled, which ended in Delilah's loss. Though, impressed with her strength and skill, she asked Professor Rowan to bestow a welcoming gift to the young Champion. She selected the Tiny Leaf Pokemon, Turtwig, to become a new part of her family. Eventually evolving into a Torterra, Mikey has proven to be an invaluable part of Delilah's team."
        },

        {
            image : "staraptor",
            name : "Name: Striker",
            species : "Species: Staraptor",
            ability : "Ability: Intimidate",
            gimmick : "Gimmick: None",
            bio : "Story: Delilah met Striker when he was a young Starly. First encountering him when she was travelling the world, she was initially impressed at his feistiness. He never backed away from a challenge and would always fight to his very last breath, sometimes against Delilah's wishes. Eventually evolving into the Staraptor he is today, the two have developed a strong bond where she can always rely on him for his strength and speed whenever she needs."
        },

        {
            image : "sableye",
            name : "Name: Shadow",
            species : "Species: Sableye",
            ability : "Ability: Prankster",
            gimmick : "Gimmick: None",
            bio : "Story: A shadow lurked deep within Dewford Cave, watching the young trainer carefully as she traversed her way through the cave. The moment she let her guard down, the shadow rose and took physical form, causing her shrieks to echo throughout the cave, disturbing all the Pokemon that dwelled within, except for this Sableye. Frustrated and embarrassed, Delilah caught the Sableye just to spite it. What she didn't realize at the time was just how much she'd grow attached to the prank-loving mischief maker."
        },

        {
            image : "Jirachi",
            name : "Name: Jirachi",
            species : "Species: Jirachi",
            ability : "Ability: Serene Grace",
            gimmick : "Gimmick: None",
            bio : "Story: For one week, every thousand years, Jirachis arise from their slumber and are able to grant any wish that's bestowed upon them. Delilah met Jirachi by chance, as it was fleeing from a Pokemon Hunter. She fought off the hunter and the two bonded, where Delilah offered to protect the Jirachi. After learning the truth behind Jirachi's species, and an intense confrontation from those who wished to misuse Jirachi's power, Delilah's final wish to the Wish Pokemon was for it to never sleep again. Though, this came at a cost: Jirachi could never grant wishes ever again. However, both Delilah and Jirachi didn't mind this. Though not an official member of Delilah's team, Jirachi and her are best friends and they come to visit her from time to time, as it explores the world to see how the world changed since it last awoke."
        },
    ]

    function displayInfo() {
        let pokemonImage = document.querySelector("#pokemon-image")
        let pokemonInstructions = document.querySelector("#pokemon-instructions")
        let imageDiv = document.querySelector("#pokemon-main-image")
        let bioDiv = document.querySelector("#pokemon-bio")
        let pokemonPic = document.createElement("img")
        let pokemonCredit = document.createElement("p")
        let pokemonName = document.createElement("p")
        let pokemonSpecies = document.createElement("p")
        let pokemonAbility = document.createElement("p")
        let pokemonGimmick = document.createElement("p")
        let pokemonText = document.createElement("p")
        
        bioDiv.innerHTML = ""
        imageDiv.innerHTML = ""

        pokemonImage.style.display = "none"
        pokemonInstructions.style.display = "none"

        bioDiv.style.border = "1px solid white"
        bioDiv.style.backgroundColor = "#f88294"

        pokemonPic.src = `images/${pokemonData[this.dataset.member].image}-main.png`
        pokemonCredit.textContent = "Art by Sunbiscuit"
        pokemonCredit.setAttribute('class', 'pink-bg')
        //pokemonText.textContent = `${pokemonData[this.dataset.member].name}<br>${pokemonData[this.dataset.member].species}${pokemonData[this.dataset.member].ability}<br>${pokemonData[this.dataset.member].gimmick}<br>`
        pokemonName.textContent = `${pokemonData[this.dataset.member].name}`
        pokemonSpecies.textContent = `${pokemonData[this.dataset.member].species}`
        pokemonAbility.textContent = `${pokemonData[this.dataset.member].ability}`
        pokemonGimmick.textContent = `${pokemonData[this.dataset.member].gimmick}`
        pokemonText.textContent = `${pokemonData[this.dataset.member].bio}`
        

        imageDiv.appendChild(pokemonPic)
        imageDiv.appendChild(pokemonCredit)
        bioDiv.appendChild(pokemonName)
        bioDiv.appendChild(pokemonSpecies)
        bioDiv.appendChild(pokemonAbility)
        bioDiv.appendChild(pokemonGimmick)
        bioDiv.appendChild(pokemonText)
    }

    pokemonButton.forEach(button => button.addEventListener("click", displayInfo))

})();