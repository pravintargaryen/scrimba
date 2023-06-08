import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'
import {getDatabase, ref, push, onValue} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js'

const appSettings = {
    databaseURL : "https://we-are-the-champions-36935-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsements = ref(database, "endorsements")


const input = document.querySelector(".input-text")
const button = document.querySelector(".publish")
const endorsementsList = document.querySelector("#endorsements-list")

button.addEventListener("click", function() {
    let inputValue = input.value 

    push(endorsements, inputValue)
    input.value = ""
    

})

onValue(endorsements, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())
    endorsementsList.innerHTML = ""
    for (let i=0; i< itemsArray.length; i++) {
        endorsementsList.innerHTML += `<p class="resultlist">${itemsArray[i]}</p>`
    }
})