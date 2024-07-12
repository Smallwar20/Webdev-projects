const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.querySelector("#pass1-el")
let pass2El = document.querySelector("#pass2-el")
let buttonGenerate = document.querySelector("#generate")

buttonGenerate.addEventListener("click",function passGen(){
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 15; i++){
        randomChar1 = characters[Math.floor(Math.random()*characters.length)]
        randomChar2 = characters[Math.floor(Math.random()*characters.length)]
        password1+=randomChar1
        password2+=randomChar2
    }
    pass1El.textContent = password1
    pass2El.textContent = password2
})

// function passGen(){
//     let password = ""
//     for (let i = 0; i < 15; i++){
//         randomChar = characters[Math.floor(Math.random()*characters.length)]
//         password+=randomChar
//     }
//     return password
// }





