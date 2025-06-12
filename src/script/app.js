const navBtnLine = document.querySelector(".nav-menu-icon")
const navContent = document.querySelector(".nav-content")

function toggleMenu() {
	navBtnLine.classList.toggle("nav-menu-icon-active")
	navContent.classList.toggle("mobile-nav-content-show")
}

function update() {
	if (window.innerWidth < 500) {
		navContent.classList.add("mobile-nav-content")
	} else {
		navContent.classList.remove("mobile-nav-content")
	}
}

window.addEventListener("resize", update)
update()
