const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password = 12;

let pwordOne = document.getElementById("pword-one");
let pwordtwo = document.getElementById("pword-two");

function generateRandomChar(){
    let randomChar = Math.floor (Math.random()*characters.length)
    return characters[randomChar]
}

function generateRandomPassword(){
    let randomPassword = ""
   for (let i = 0; i < password; i++) {
        randomPassword += generateRandomChar()         
    }
    let o = randomPassword
    pwordOne.value = o
    
    
}
function generateSecondPassword(){
    let secondPassword = ""
    for (let r = 0; r< password; r++) {
        secondPassword += generateRandomChar()
    }
    let p = secondPassword
    pwordtwo.value = p
}
function clear(){
    pwordOne.value = ""
    p = ""
}





  



