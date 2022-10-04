var screenWidth = screen.width;
var screenHeight = screen.height;

console.log(screenHeight,screenWidth)


const _textarea = document.getElementById("textarea")
const _encrBtn = document.querySelector('.btnE')
const _decrBtn = document.querySelector('.btnD')


//encriptar
_encrBtn.addEventListener('click',()=>{

  console.log(_textarea.value.length)

  if (_textarea.value.length <= 0) {
    console.log("No hay nada")
  }else{
    if (Validate(_textarea.value)) {
      console.log("Hay caracteres especiales")
    }else{
      encrypt(_textarea.value)
    }
  }

})

//Desencriptar
_decrBtn.addEventListener('click',()=>{

  console.log(decrypt(_textarea.value))

  if (_textarea.value.length <= 0) {
    console.log("No hay nada")
  }else{
    if (Validate(_textarea.value)) {
      console.log("Hay caracteres especiales")
    }else{
      decrypt(_textarea.value)
    }
  }

})

function decrypt(message) {
  const regex = /ai|enter|imes|ober|ufat/gi;
  const replaceCase = ["a", "e", "i", "o", "u"]
  let decryptMessage = message.replace(regex, function (match) {
    return replaceCase[match.length - 1]
  })
  console.log(decryptMessage)
}






//Encriptar
function encrypt(message){
  let splitMessage= message.toLowerCase().split("")
  let replaceCase = ["ai", "enter", "imes", "ober", "ufat"]
  let encryptMessage = []

  for (let i = 0; i < splitMessage.length; i++) {
    if (splitMessage[i] === "a") {
      encryptMessage.push(replaceCase[0]);
    } else if (splitMessage[i] === "e") {
      encryptMessage.push(replaceCase[1]);
    } else if (splitMessage[i] === "i") {
      encryptMessage.push(replaceCase[2]);
    } else if (splitMessage[i] === "o") {
      encryptMessage.push(replaceCase[3]);
    } else if (splitMessage[i] === "u") {
      encryptMessage.push(replaceCase[4]);
    } else {
      encryptMessage.push(splitMessage[i]);
    }
    
  }
  finalMessage = encryptMessage.join("")
  console.log(finalMessage)
}



//Validar caracteres especiales
  function Validate(message) {
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{}':"\\|,.<>\/?~]/
    return specialChars.test(message);
    console.log(specialChars.test(message))
}


// To decrypt message
function decrypt(message) {
  const regex = /ai|enter|imes|ober|ufat/gi;
}

/* 
// Decrypt function
decrypt.addEventListener("click", function () {
  let string = input.value;
  const regex = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  string = string.replace(/ai|enter|imes|ober|ufat/gi, function (matched) {
    return regex[matched];
  });

  showMessage.style.display = "block";
  showMessage.innerHTML = `<h2>${string}</h2>`;
  input.value = "";
});  */


 