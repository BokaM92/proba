//variables
const hamMenu = document.getElementById('ham_menu'),
    navClose = document.querySelectorAll('.sidenav a'),
    mySidenav = document.getElementById('mySidenav'),
    clubMenu = document.getElementById('club-info'),
    clubSection = document.querySelectorAll('.club-section'),
    dots = document.getElementById("dots"),
    moreText = document.getElementById("more"),
    btnReadMore = document.getElementById("readMore")



//listeners
eventListeners()
function eventListeners() {
    hamMenu.addEventListener('click', clickOpenSideNav),
    clubMenu.addEventListener('click', clubMenuHandler)
}



//side nav mobile view
function clickOpenSideNav(ev) {
    if (ev.target.tagName.toLowerCase() === 'span') {
        mySidenav.style.width = '250px'
    }
}

for (const close of navClose) {
    close.addEventListener('click', function (ev) {
        if (ev.target.tagName.toLowerCase() === 'a') {
            mySidenav.style.width = '0'
        }
    })
}

//section club buttons 
function clubMenuHandler(ev) {
    ev.preventDefault();
    if (ev.target.tagName.toLowerCase() !== 'a') {
        return
    }
    let target = ev.target.dataset.target;
    clubSection.forEach(item => {
        if (item.classList.contains(target)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

//read more text
function myFunction() {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnReadMore.innerHTML = "Procitaj vise"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnReadMore.innerHTML = "Procitaj manje"; 
      moreText.style.display = "inline";
    }
  }