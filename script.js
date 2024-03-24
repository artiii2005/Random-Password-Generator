const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function getRandomCharacters() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    let randomIndex2 = Math.floor(Math.random() * characters.length)
    let randomIndex3 = Math.floor(Math.random() * characters.length)
    let randomIndex4 = Math.floor(Math.random() * characters.length)
    let randomIndex5 = Math.floor(Math.random() * characters.length)
    let randomIndex6 = Math.floor(Math.random() * characters.length)
    let randomIndex7 = Math.floor(Math.random() * characters.length)
    let randomIndex8 = Math.floor(Math.random() * characters.length)
    let randomIndex9 = Math.floor(Math.random() * characters.length)
    let randomIndex10 = Math.floor(Math.random() * characters.length)
    let randomIndex11 = Math.floor(Math.random() * characters.length)
    let randomIndex12 = Math.floor(Math.random() * characters.length)
    let randomIndex13 = Math.floor(Math.random() * characters.length)
    let randomIndex14 = Math.floor(Math.random() * characters.length)
    let randomIndex15 = Math.floor(Math.random() * characters.length)
    for (let i = 0; i < 16; i++) {
        passwordEl.textContent = characters[randomIndex] + characters[randomIndex2] + characters[randomIndex3] + characters[randomIndex4] + characters[randomIndex5] + characters[randomIndex6] + characters[randomIndex7] + characters[randomIndex8] + characters[randomIndex9] + characters[randomIndex10] + characters[randomIndex11] + characters[randomIndex12] + characters[randomIndex13] + characters[randomIndex14] + characters[randomIndex15]
    }
}

let passwordEl = document.getElementById("password-el")

function generate() {
    getRandomCharacters()
}