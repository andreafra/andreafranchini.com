const projectsBtn = document.querySelector("#projectsBtn")
const projects = document.querySelector("#projects")
projectsBtn.addEventListener("click", (ev) => {
	projects.scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
	ev.preventDefault()
})
