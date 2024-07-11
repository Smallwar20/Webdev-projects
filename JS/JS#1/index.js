let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

countEl.innerText = count

function increment(){
    count+=1
    countEl.textContent = count
    console.log(count)
}

function save(){
    let countDash = count + " - "
    count = 0
    countEl.textContent = count
    saveEl.textContent += countDash
}