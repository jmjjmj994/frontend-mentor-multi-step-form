
let steps = 0;


window.addEventListener("load", (e) => {
    const container = document.querySelector("[data-type-section='content-container']")
    paginationButtons()
})



const paginationButtons = () => {

    const prevBtn = document.querySelector("[data-type-pagination='prev']")
    const nextBtn = document.querySelector("[data-type-pagination='next']")
    const buttonContainer = document.querySelector("[data-type-pagination='button-container']")
    buttonContainer.className = "flex justify-between items-center article-padding"
    prevBtn.addEventListener("click", () => {
        if (steps > 0) {
            steps--;

        }
        updateUrl(steps);
        handleParams()
    });

    nextBtn.addEventListener("click", () => {

        if (steps < 3) {
            steps++;
        }
      
        if(steps === 3) nextBtn.innerHTML ="Confirm"
        updateUrl(steps);
        handleParams()
    });


}


const updateUrl = (param) => {

    if (param === 0) {
        param = "register"
    } else if (param === 1) {
        param = "plan"
    } else if (param === 2) {
        param = "add-ons"
    } else if (param === 3) {
        param = "confirmation"
    }

    window.history.pushState({}, "", `index.html?${param}`);

}


const handleParams = () => {
    const params = new URLSearchParams(window.location.search)
    if (params.has("register")) {
        render("register")
    } else if (params.has("plan")) {
        render("plan")
    } else if (params.has("add-ons")) {
        render("add-ons")
    } else if (params.has("confirmation")) {
        render("confirmation")
    }

}




const render = (params) => {
    const register = document.querySelector("[data-type-section='register']")
    const plan = document.querySelector("[data-type-section='plan']")
    const addOns = document.querySelector("[data-type-section='add-ons']")
    const confirmation = document.querySelector("[data-type-section='confirmation']")
    const sections = [register, plan, addOns, confirmation]
    if (params === "register") {
        register.classList.remove("article-hidden")
        plan.classList.add("article-hidden")
    } else if (params === "plan") {
        plan.classList.remove("article-hidden")
        register.classList.add("article-hidden")
        addOns.classList.add("article-hidden")
    }
    else if (params === "add-ons") {
        addOns.classList.remove("article-hidden")
        plan.classList.add("article-hidden")
        confirmation.classList.add("article-hidden")
    }
    else if (params === "confirmation") {
        confirmation.classList.remove("article-hidden")
        addOns.classList.add("article-hidden")
    }
}
    
    
    
function handleSteps(value) {
     
 }   
    

    ;(() => {
        if (steps === 0) render("register")
        window.history.pushState({}, "", `index.html?register`);
        const nextBtn = document.querySelector("[data-type-pagination='next']")
        nextBtn.innerHTML ="Next page"
    })();

