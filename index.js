const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let one = document.getElementById('one')
let two = document.getElementById('two')

function generatePasswords() {
    let password = []
    for (let i = 0; i < 16; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        password.push(characters[randomNum])
    }
    return password.join('')
}

function handleClick() {
    let passwordOne = generatePasswords()
    let passwordTwo = generatePasswords()

    one.textContent = passwordOne
    two.textContent = passwordTwo
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
    copyContent(one);
}

function copyPasswordTwo() {
    copyContent(two);
}