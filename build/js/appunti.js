const JAVA_GUIDE_URL = "//raw.githubusercontent.com/QUB3X/Appunti/master/Java/java.md"

const body = document.getElementById("appunti")

marked.setOptions({
    renderer: new marked.Renderer(),
    langPrefix: "",
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    },
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    xhtml: false
})

fetch(JAVA_GUIDE_URL)
    .then((res) => res.text()
        .then(text => {
            body.innerHTML = marked(text)
        })
    )

