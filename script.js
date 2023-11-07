window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("textForm")
    form.onsubmit = saveData
    const dataIsSet = localStorage.getItem("data")

    if (dataIsSet) {
        // const textContainer = document.querySelector(".stored-name h3")
        // textContainer.innerText = dataIsSet
        replaceH3Text(dataIsSet)
    }


});

const saveData = (event) => {
    event.preventDefault();
    const input = document.getElementById("name");
    const text = input.value
    localStorage.setItem("data", text)
    // const textContainer = document.querySelector(".stored-name h3")
    // textContainer.innerText = text
    replaceH3Text(text)
}

const replaceH3Text = (str) => {
    const textContainer = document.querySelector(".stored-name h3")
    textContainer.innerText = str
}


const count = () => {
    let timerNumb = 0


    const timer = setInterval(timerNumb += 1, 1000)
    console.log(timerNumb)
}
