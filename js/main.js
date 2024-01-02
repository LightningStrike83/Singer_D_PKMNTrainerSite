(() => {

    const hamMenu = document.querySelector("#ham-icon")
    const linkMenu = document.querySelector("#links")

    function openMenu() {
        if (linkMenu.style.display === "flex") {
            linkMenu.style.display = "none"
        } else {
            linkMenu.style.display = "flex"
        }
    }

    hamMenu.addEventListener("click", openMenu)

})();