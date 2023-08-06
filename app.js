const header = document.querySelector("h1")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@$&*_"

// Setting Default Text
header.textContent = header.getAttribute("data-value")

let interval = null
header.addEventListener("mouseover", (e) => {
    let iteration = 0

    clearInterval(interval)
    interval = setInterval(() => {
        e.target.innerHTML = e.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return `<span>${e.target.dataset.value[index]}</span>`
                }

                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("")
        if (iteration >= e.target.dataset.value.length) {
            clearInterval(interval)
        }
        iteration += 1 / 3
    }, 100)
})
