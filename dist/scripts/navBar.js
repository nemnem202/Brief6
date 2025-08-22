"use strict";
const navbarHandle = () => {
    const navBarInput = document.getElementById("navBarInput");
    const navBar = document.getElementById("navBar");
    if (!navBarInput || !navBar)
        return;
    navBarInput.addEventListener("input", async () => {
        if (navBarInput.value === "")
            return;
        try {
            const res = await fetch(`/recipes/byName/${navBarInput.value}`);
            navBar.querySelectorAll(".menuEl").forEach((e) => {
                e.remove();
            });
            const data = await res.json();
            if (!data || !data.length)
                return;
            for (const dataEl of data) {
                const menuEl = document.createElement("div");
                menuEl.className = "menuEl";
                menuEl.innerText = dataEl.title;
                navBar.appendChild(menuEl);
                menuEl.id = dataEl.id;
                menuEl.addEventListener("click", async () => {
                    window.location.href = `/recipes/byId/${dataEl.id}`;
                });
            }
        }
        catch (err) {
            console.log("error", err);
        }
    });
    const searchIcon = navBar.querySelector(".searchIcon");
    if (!searchIcon)
        return;
    searchIcon.addEventListener("click", () => {
        const menuEls = navBar.querySelectorAll(".menuEl");
        if (menuEls.length === 0) {
            navBarInput.placeholder = "Aucune recette cherchée !";
            return;
        }
        console.log("oeoe");
        window.location.href = `/recipes/byId/${menuEls[0].id}`;
    });
};
navbarHandle();
