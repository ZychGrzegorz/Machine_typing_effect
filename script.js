const header = document.querySelector('header')
const text = ["Witaj na mojej stronie.", 'Chciałbym Ci przedstawić "Machine Typing".', "Oto krótka prezentacja mojego skryptu."]
const spanText = document.querySelector('span.text')
let sentence = 0
let letter = 0

const pause = (ms) => {
  const d = new Date()
  let d2 = null
  do {
    d2 = new Date()
  }
  while (d2 - d < ms)
}

const typing = () => {
  if (sentence === (text.length - 1) && letter === text[text.length - 1].length) {
    clearInterval(interval)
    return
  }
  if (letter === 0) pause(700)
  spanText.textContent += text[sentence][letter]
  if (letter < text[sentence].length) {
    letter++
  } else {
    sentence++;
    letter = 0
    spanText.textContent = ""
    pause(1300)
  }
}
const interval = setInterval(typing, 50)
typing()