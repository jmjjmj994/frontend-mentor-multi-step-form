const h1 = document.querySelector(".h1")

const paginate1 = (num) => {
    if (!num) {
        window.history.pushState({}, "", ["http://127.0.0.1:5500/test.html"])
        h1.textContent = "page1"
    } else if (num === 1) { 
        window.history.pushState({}, "", ["http://127.0.0.1:5500/test.html?page=" + num])
        h1.textContent ="page2"
    }
}

paginate1(1)