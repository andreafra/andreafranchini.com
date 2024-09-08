import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const EMPHASIS_SELECTOR = "b"
const EMPHASIS_CLASS = "inline-block relative"
const EMPHASIS_HIGHLIGHT_CLASS =
	"absolute h-full scale-y-75 -z-10 -skew-x-12 rounded-md left-0"
const EMPHASIS_DEFAULT_BG_CLASS = "bg-accent"

const SECTION_SELECTORS = [
	".gsap-job",
	".gsap-fields",
	".gsap-research",
	".gsap-uni",
	".gsap-tech-1",
	".gsap-tech-2",
	".gsap-tech-3",
	".gsap-gaming",
]

function createEmphasisOnElem(qs: string) {
	const elems = document.querySelectorAll(qs)
	elems.forEach((e) => {
		e.setAttribute("class", EMPHASIS_CLASS)
		const bgElem = document.createElement("span")
		const bgClass = e.getAttribute("data-bg") ?? EMPHASIS_DEFAULT_BG_CLASS
		bgElem.setAttribute("class", `${EMPHASIS_HIGHLIGHT_CLASS} ${bgClass}`)
		e.append(bgElem)
	})
}

function createGsapForSections() {
	for (const selector of SECTION_SELECTORS) {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: selector,
					start: "top 70%",
					end: "top 20%",
					scrub: 1,
				},
			})
			.addLabel("start")
			.from(
				selector,
				{
					opacity: 0,
				},
				"start"
			)
			.to(selector, {
				opacity: 1,
			})
			.to(
				`${selector} b > span`,
				{
					opacity: 1,
					width: "100%",
					stagger: 0.1,
				},
				"start+=2"
			)
	}
}

function init() {
	createEmphasisOnElem(EMPHASIS_SELECTOR)

	createGsapForSections()

	gsap
		.timeline()
		.to("body", {
			autoAlpha: 1,
		})
		.fromTo(
			".gsap-intro",
			{
				scale: 0.8,
				opacity: 0,
			},
			{
				scale: 1,
				opacity: 1,
			}
		)

	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".gsap-intro",
				start: "center center",
				end: "top 10%",
				scrub: 1,
			},
			defaults: {
				duration: 1,
			},
		})
		.addLabel("start")
		.to(".gsap-title", {
			autoAlpha: 0,
			scale: 0.8,
		})
		.to(
			".gsap-subtitle, .gsap-silhouette, #gsap-me-img",
			{
				autoAlpha: 0,
				scale: 0.8,
			},
			0.5
		)
		.addLabel("showHeader", -0.25)
		.from(
			".gsap-header",
			{
				borderRadius: "0% 0% 100% 100%",
				translateY: "-100%",
			},
			"showHeader"
		)

		.to(".gsap-header", {
			opacity: 1,
			ease: "power3.in",
		})
		.fromTo(
			".gsap-header > h1",
			{
				scale: 0.8,
				opacity: 0,
			},
			{
				opacity: 1,
				scale: 1,
				ease: "power3.in",
			},
			"showHeader"
		)
		.fromTo(
			"#gsap-scroll-down",
			{
				opacity: 1,
			},
			{
				opacity: 0,
			}
		)

	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".gsap-sdtf",
				start: "top 70%",
				end: "top 20%",
				scrub: 1,
			},
		})
		.addLabel("start")
		// .from(
		// 	".gsap-job",
		// 	{
		// 		opacity: 0,
		// 	},
		// 	"start"
		// )
		// .to(".gsap-job", {
		// 	opacity: 1,
		// })
		.from(
			".gsap-polimi-img",
			{
				height: "0px",
			},
			"<+=1"
		)
}

window.addEventListener("load", () => {
	init()
})
