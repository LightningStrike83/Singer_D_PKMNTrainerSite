(() => {
    const trainerButtons = document.querySelectorAll(".trainer-button")

    let trainerData = [
        {
            image : "trainer",
            era : "Era: Trainer",
            position : "Main Team: Eevee, Swampert, Charizard, Torterra, Staraptor, Sableye",
            description: "Bio: Ever since she was young, Delilah loved Pokemon. She couldn't wait for the day until she could set off on her own journey with them. She had done research and planned for a few species she wanted on her team, and saved up enough money so she could make it a reality. Her journey began on Professor Birch's doorsteps, which quickly led her to the Kalos region, then to the Kanto region, all before she earned a single gym badge. Once she had the Pokemon she wanted to raise he most at her disposal, she travelled across the Hoenn region, eventually ending as the region's current champion. After that point, she decided to travel across the world to other regions, wanting to see other Pokemon that inhabit the world, and meet new people that loved Pokemon as much as she does!",
        },

        {
            image : "gym",
            era : "Era: Gym Leader",
            position : "Position Team: Sableye (Ace), Dusknoir, Runerigus, Golurk, Chandelure, Aegislash",
            description: "Bio: After a long journey across the world, spanning across many years, Delilah decided to settle down and establish an island for trainers to visit and meet various kinds of people and Pokemon! She wanted to make her own Pokemon League for visitors to challenge, comprised of some of the closest friends she's met along the way of her journey. Everyone, including herself, got a role as a Gym Leader, with select few working as Elite Four members. Delilah decided that for her gym, she wanted to specialize in the Ghost-type, and run a haunted house for her Gym's design. Trainers would have to solve some mind-boggling puzzles in order to reach her room, where she would sneak up on them and scare them before their showdown. Looks like her Sableye rubbed off a bit on her!",
        },

        {
            image : "e4",
            era : "Era: Elite 4",
            position : "Position Team: Swampert, Torterra, Runerigus, Ursaluna (Blood Moon), Mudsdale, Krookodile",
            description: "Bio: Delilah knew that Elite Four responsibilities were much stricter than those of a Gym Leader. The Elite Four represent the region's best-of-the-best, so she sought out help from two ladies she was close with: Karen from Johto and Rika from Paldea. There was a point where the pressure started to get to Delilah and she began losing her way, wanting to mimic their styles instead of being herself, but a wake-up call from the ladies was exactly what she needed. When she battles as an Elite Four member, she dons an elegant, orange ball gown, as she wants to feel elegant as she fights with Ground-type Pokemon. No Earthquake can trip her up!",
        },

        {
            image : "champion",
            era : "Era: Champion",
            position : "Main Team: Eevee, Swampert, Charizard, Torterra, Staraptor, Sableye",
            description: "Bio: As the owner of the island, she wants to give challengers one final challenge before bestowing the title of Champion upon them. The Pokemon League restricts its trainers to only use one type of Pokemon, but never their Champions. As such, Delilah finds it only fitting that the final challenge is a no-holds barred fight with her true team. All of their experiences, everything they've learned, all leads up to this point. Mega Evolution, Gigantamax, everything is on the table as Delilah brings out her true strength to see who is truly worthy of the title of 'Champion'.",
        },

    ]

    function displayInfo() {
        let trainerImage = document.querySelector("#trainer-image")
        let trainerInstructions = document.querySelector("#trainer-instructions")
        let imageDiv = document.querySelector("#trainer-main-image")
        let bioDiv = document.querySelector("#trainer-bio")
        let trainerPic = document.createElement("img")
        let trainerCredit = document.createElement("p")
        let eraText = document.createElement("p")
        let positionText = document.createElement("p")
        let bioText = document.createElement("p")

        imageDiv.innerHTML = ""
        bioDiv.innerHTML = ""

        trainerImage.style.display = "none"
        trainerInstructions.display = "none"

        bioDiv.style.border = "1px solid white"
        bioDiv.style.backgroundColor = "#f88294"

        trainerPic.src = `images/${trainerData[this.dataset.member].image}-main.png`
        trainerCredit.textContent = "Art by Sunbiscuit"
        trainerCredit.setAttribute('class', 'pink-bg')

        eraText.textContent = `${trainerData[this.dataset.member].era}`
        positionText.textContent = `${trainerData[this.dataset.member].position}`
        bioText.textContent = `${trainerData[this.dataset.member].description}`

        imageDiv.appendChild(trainerPic)
        imageDiv.appendChild(trainerCredit)
        bioDiv.appendChild(eraText)
        bioDiv.appendChild(positionText)
        bioDiv.appendChild(bioText)
    }

    trainerButtons.forEach(button => button.addEventListener("click", displayInfo))
})();