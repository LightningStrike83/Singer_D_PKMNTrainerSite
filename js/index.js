(() => {

    const animatedIntro = document.querySelector("#animated-intro");
    let tl = gsap.timeline();

    tl.to("#animated-intro", {autoAlpha: 0, delay: 2.8}),
    tl.from("header, #greeting, #intro",{autoAlpha: 0})

})();