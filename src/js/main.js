const projectsBtn = document.querySelector("#projectsBtn")
const projects = document.querySelector("#projects")
projectsBtn.addEventListener("click", (ev) => {
	projects.scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
	ev.preventDefault()
})

/* See https://parceljs.org/hmr.html */
if (module.hot) {
	module.hot.accept()
}
