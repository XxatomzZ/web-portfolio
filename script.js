console.log("✅ JavaScript is connected!");

// navbar changing size when scrolling
const navbar = document.getElementById("navbar");

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});



// cover images for projects page with text window opening below
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".project-title");

    console.log(buttons.length);
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const info = button.parentElement.nextElementSibling;
            document.querySelectorAll(".project-info").forEach(panel => {
                if (panel !== info) {
                    panel.classList.remove("open");
                }
            });
            info.classList.toggle("open");
            setTimeout(() => {
                info.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 500);
        });
    });
});
