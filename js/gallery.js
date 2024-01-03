(() => {
    const galleryCarousel = document.querySelector("#gallery-carousel")
    let count = 0

    let imageCarousel = [
        {
            path : "trainer-card.png",
            description : "Trainer Card of Delilah and Viola by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "champion.png",
            description : "Champion outfit drawing by",
            credit : "DucessaEva",
            creditlink : "https://ducessaeva.carrd.co/#",
        },

        {
            path : "pokemon-champion.png",
            description : "Champion outfit reference by",
            credit : "DucessaEva",
            creditlink : "https://ducessaeva.carrd.co/#",
        },

        {
            path : "gym-ref.png",
            description : "Gym Leader outfit reference by",
            credit : "Yumichan216",
            creditlink : "https://yumichanhamano.carrd.co/#",
        },

        {
            path : "champion-portrait.jpg",
            description : "Portrait of Champion Outfit by",
            credit : "Aegis Asu",
            creditlink : "https://twitter.com/Aegis_Asu",
        },

        {
            path : "sparkle.png",
            description : "Champion Delilah with Viola and Skipper by",
            credit : "CarefreeJules",
            creditlink : "https://twitter.com/carefreejules15?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },

        {
            path : "champion-samus.png",
            description : "Champion Delilah with Zero Suit Samus (Crossover) by",
            credit : "DucessaEva",
            creditlink : "https://ducessaeva.carrd.co/#",
        },

        {
            path : "elite-main.jpg",
            description : "Fullbody look at Delilah's Elite 4 outfit by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "fam.png",
            description : "Delilah's Champion team by",
            credit : "Desinhox",
            creditlink : "https://studiompup.tumblr.com/post/647095522156593152/hey-guys-i-decided-to-make-a-post-to-fix-the",
        },

        {
            path : "full-team.png",
            description : "Delilah's main team by",
            credit : "Orihimes2",
            creditlink : "https://old.reddit.com/user/Orihimes2",
        },

        {
            path : "trainer-main.png",
            description : "Delilah's trainer outfit by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "gym-main.png",
            description : "Delilah's gym leader outfit by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "e4-main.png",
            description : "Delilah's elite four outfit by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "champion-main.png",
            description : "Delilah's champion outfit by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "eevee-main.png",
            description : "Delilah and Viola by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "swampert-main.png",
            description : "Delilah and Skipper by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "charizard-main.png",
            description : "Delilah and Blaze by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "torterra-main.png",
            description : "Delilah and Mikey by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "staraptor-main.png",
            description : "Delilah and Striker by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "sableye-main.png",
            description : "Delilah and Shadow by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "jirachi-main.png",
            description : "Delilah and Jirachi by",
            credit : "Sunbiscuit",
            creditlink : "https://sunbiscuit.wixsite.com/portfolio",
        },

        {
            path : "trainer-sprite.png",
            description : "Retro sprite of Delilah's trainer outfit with Viola by",
            credit : "Legitimate Username",
            creditlink : "https://www.reddit.com/user/Legitimate__Username/",
        },

        {
            path : "gym-sprite.png",
            description : "Retro sprite of Delilah's gym leader outfit with Shadow by",
            credit : "Legitimate Username",
            creditlink : "https://www.reddit.com/user/Legitimate__Username/",
        },

        {
            path : "e4-sprite.png",
            description : "Retro sprite of Delilah's elite four outfit with Skipper by",
            credit : "Legitimate Username",
            creditlink : "https://www.reddit.com/user/Legitimate__Username/",
        },

        {
            path : "champion-sprite.png",
            description : "Retro sprite of Delilah's Champion outfit with Viola by",
            credit : "Legitimate Username",
            creditlink : "https://www.reddit.com/user/Legitimate__Username/",
        },

        {
            path : "hexagon-pokemon.png",
            description : "Hexagon Silhouettes of Delilah's Family by",
            credit : "Pokehexdex",
            creditlink : "https://pokehexdex.wordpress.com/",
        },
    ]

    function imageGallery() {
        let imageCreation = document.createElement("img")
        let leftArrowCreation = document.createElement("p")
        let rightArrowCreation = document.createElement("p")
        let divDescription = document.createElement("div")
        let descriptionCreation = document.createElement("p")
        //let creditCreation = document.createElement("p")

        galleryCarousel.innerHTML = ""

        imageCreation.src = `images/${imageCarousel[count].path}`

        descriptionCreation.textContent = `${imageCarousel[count].description} ${imageCarousel[count].credit}`
        divDescription.setAttribute('id', 'image-description')

        leftArrowCreation.textContent = "◄"
        rightArrowCreation.textContent = "►"
        leftArrowCreation.setAttribute('class', "arrow")
        leftArrowCreation.setAttribute('id', "left-arrow")
        leftArrowCreation.addEventListener("click", previousImage)
        rightArrowCreation.setAttribute('class', "arrow")
        rightArrowCreation.setAttribute('id', "right-arrow")
        rightArrowCreation.addEventListener("click", nextImage)

        galleryCarousel.appendChild(imageCreation)
        galleryCarousel.appendChild(divDescription)
        galleryCarousel.appendChild(leftArrowCreation)
        galleryCarousel.appendChild(rightArrowCreation)
        divDescription.appendChild(descriptionCreation)
    }

    function nextImage() {
        count++;

        if (count>=imageCarousel.length) {
            count = 0
        }

        imageGallery()
    }

    function previousImage() {
        count --;

        if (count < 0) {
            count = imageCarousel.length-1;
        }

        imageGallery()
    }

    imageGallery()
})();