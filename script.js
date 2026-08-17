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



// scrolling projects slideshow on homepage
document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.gallery-track');
    const previousButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');

    if (!track || !previousButton || !nextButton) {
        return;
    }

    nextButton.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 5) {
            // loop back to image 1
            track.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // move to the next image
            track.scrollBy({
                left: track.clientWidth,
                behavior: 'smooth'
            });
        }
    });
    // and similarly for previous button
    previousButton.addEventListener('click', () => {
    if (track.scrollLeft <= 5) {
        track.scrollTo({
            left: track.scrollWidth - track.clientWidth,
            behavior: 'smooth'
        });
    } else {
        track.scrollBy({
            left: -track.clientWidth,
            behavior: 'smooth'
        });
    }
});
});


// current project content tabs (homepage)
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".content-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active state from all tabs
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    // add active state to clicked tab
    tab.classList.add("active");
    // get the clicked panel
    const tabName = tab.dataset.tab;
    // hide all panels
    panels.forEach(panel => {
      panel.classList.remove("active");
    });
    // show only selected panel
    document
      .getElementById(tabName)
      .classList.add("active");
  });
});

