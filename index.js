const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById('passwordOne')
let passwordTwo = document.getElementById('passwordTwo')

let getRandomNum = function() {
    return Math.floor(Math.random() * characters.length)
}

function generatePasswords(arr) {
    for (let i = 0; i < 15; i++) {
        arr.push(characters[getRandomNum()])
    }
    return arr.join('');
}


function handleClick() {
    let first = generatePasswords([])
    let second = generatePasswords([])
    
    passwordOne.textContent = first
    passwordTwo.textContent = second
}

async function copyContent(element) {
    try {
        await navigator.clipboard.writeText(element.textContent);
        console.log('Content copied to clipboard');
        alert("Copied to clipboard.")
        //alert("Copied the password: " + element.textContent);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

function copyPasswordOne() {
    copyContent(passwordOne);
}

function copyPasswordTwo() {
    copyContent(passwordTwo);
}
