const input = document.querySelector(".input")
const button = document.querySelector("#button")
const result = document.querySelector("#result")
 

document.addEventListener("DOMContentLoaded", function() {
    button.disabled = true

    input.onkeyup = () => {
        if (input.value.length > 0) {
            button.disabled = false
            result.innerHTML = input.value
        } else {
            button.disabled = true
            result.innerHTML = ""
        }
        

    }
})

input.addEventListener('mouseover', function() {
    input.setAttribute('placeholder', '👋')
})

input.addEventListener('mouseout', function() {
    input.setAttribute('placeholder', 'Enter your email')
})