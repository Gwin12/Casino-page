let observer;
let observingElement;

function observeElement(element) {
  if (observer && observingElement) {
    observer.unobserve(observingElement);
  }
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Load content for the visible element
      } else {
        // Pause loading content for the hidden element
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
  observingElement = element;
}

let currentPage = '';
let loadedSections = {};
function showContent(contentToShow) {
    if (contentToShow !== currentPage) {
        currentPage = contentToShow;
        if (!loadedSections[contentToShow]) {
            loadedSections[contentToShow] = true;
            document.getElementById('loading').classList.remove('hidden');
            setTimeout(() => {
                if (contentToShow === 'casino') {
                    showCasino();
                } else if (contentToShow === 'sports') {
                    showSports();
                } else if (contentToShow === 'main') {
                    showMain();
                }
                document.getElementById('loading').classList.add('hidden');
            }, 1000);
        } else {
            if (contentToShow === 'casino') {
                showCasino();
            } else if (contentToShow === 'sports') {
                showSports();
            } else if (contentToShow === 'main') {
                showMain();
            }
        }
    }
}

function getElementsById(id) {
  return Array.from(document.querySelectorAll(`[id="${id}"]`));
}

function showMain() {
    // Add your logic here for showing the main home content

    const mainElement = document.getElementById('mainHome');
    const casinoElement = document.getElementById('casinoHome');
    const sportsElement = document.getElementById('sportsHome');

    document.querySelector('.casinoHb').style.display = 'block';
    document.querySelector('.sportsHb').style.display = 'none';
    mainElement.style.display = 'block';
    casinoElement.style.display = 'none';
    sportsElement.style.display = 'none';
    mainElement.style.opacity = '1';
    casinoElement.style.opacity = '0';
    sportsElement.style.opacity = '0';
    window.history.pushState(null, null, '/');


    const casinoButtons = getElementsById("casinoButton");
    const sportsButtons = getElementsById("sportsButton");

    casinoButtons.forEach((element) => {
        element.classList.add("selected");
        element.classList.add("reactMenu2");
    });
    sportsButtons.forEach((element) => {
        element.classList.remove("selected");
        element.classList.remove("reactMenu2");
    });

    const sidebar = document.querySelector(".sidebar.visible");
    const page = document.querySelector(".page.blur-background");
    if (sidebar) {
        sidebar.classList.remove("visible");
    }
    if (page) {
        page.classList.remove("blur-background");
    }

    casinoElement.classList.add('visibleSection');
    sportsElement.classList.remove('visibleSection');

    observeElement(document.getElementById('mainHome'));
}



/**/


function showCasino() {
    const mainElement = document.getElementById('mainHome');
    const casinoElement = document.getElementById('casinoHome');
    const sportsElement = document.getElementById('sportsHome');

    document.querySelector('.casinoHb').style.display = 'none';
    document.querySelector('.sportsHb').style.display = 'none';
    casinoElement.style.display = 'block';
    sportsElement.style.display = 'none';
    casinoElement.style.opacity = '1';
    sportsElement.style.opacity = '0';
    mainElement.style.display = 'none';
    mainElement.style.opacity = '0';
    window.history.pushState(null, null, '/casino');

    const casinoButtons = getElementsById("casinoButton");
    const sportsButtons = getElementsById("sportsButton");

    casinoButtons.forEach((element) => {
        element.classList.add("selected");
        element.classList.add("reactMenu2");
    });
    sportsButtons.forEach((element) => {
        element.classList.remove("selected");
        element.classList.remove("reactMenu2");
    });

    const sidebar = document.querySelector(".sidebar.visible");
    const page = document.querySelector(".page.blur-background");
    if (sidebar) {
        sidebar.classList.remove("visible");
    }
    if (page) {
        page.classList.remove("blur-background");
    }

    casinoElement.classList.add('visibleSection');
    sportsElement.classList.remove('visibleSection');

    observeElement(casinoElement);
}


/**/

function showSports() {
    const mainElement = document.getElementById('mainHome');
    const casinoElement = document.getElementById('casinoHome');
    const sportsElement = document.getElementById('sportsHome');

    document.getElementById("meta-title").textContent = "Shiba Sportsbook";
    document.getElementById("meta-description").setAttribute("content", "The Future Of Defi Sportsbetting");
    document.getElementById("meta-twitter-description").setAttribute("content", "The Future Of Defi Sportsbetting");
    document.getElementById("meta-og-description").setAttribute("content", "The Future Of Defi Sportsbetting");

    document.querySelector('.casinoHb').style.display = 'none';
    document.querySelector('.sportsHb').style.display = 'block';
    casinoElement.style.display = 'none';
    sportsElement.style.display = 'block';
    casinoElement.style.opacity = '0';
    sportsElement.style.opacity = '1';
    mainElement.style.display = 'none';
    mainElement.style.opacity = '0';
    window.history.pushState(null, null, '/sports');

    const casinoButtons = getElementsById("casinoButton");
    const sportsButtons = getElementsById("sportsButton");
    casinoButtons.forEach((element) => {
        element.classList.remove("selected");
        element.classList.remove("reactMenu2");
    });
    sportsButtons.forEach((element) => {
        element.classList.add("selected");
        element.classList.add("reactMenu2");
    });

    const sidebar = document.querySelector(".sidebar.visible");
    const page = document.querySelector(".page.blur-background");
    if (sidebar) {
        sidebar.classList.remove("visible");
    }
    if (page) {
        page.classList.remove("blur-background");
    }

    casinoElement.classList.remove('visibleSection');
    sportsElement.classList.add('visibleSection');

    observeElement(sportsElement);
}


/**/
window.addEventListener('popstate', function(event) {
    if (window.location.pathname === '/') {
        showMain();
    } else if (window.location.pathname === '/casino') {
        showCasino();
    } else if (window.location.pathname === '/sports') {
        showSports();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/') {
        showMain();
    } else if (window.location.pathname === '/casino') {
        showCasino();
    } else if (window.location.pathname === '/sports') {
        showSports();
    }
});
