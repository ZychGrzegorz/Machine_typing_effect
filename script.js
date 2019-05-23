const header = document.querySelector('header')
const text = ["Witaj na mojej stronie.", 'Chciałbym Ci przedstawić "Machine Typing".', "Oto krótka prezentacja mojego skryptu."]
const spanText = document.querySelector('span.text')
let sentence = 0
let letter = 0

const typing = () => {
  if (letter === text[sentence].length) { //jesli litera ostatnia w wierszu
    if (sentence === text.length - 1) return //jesli litera ostatnia i wiersz ostatni to wyjscie
    return setTimeout(() => {
      spanText.textContent = "" //jesli tylko litera ostatnia to nowy wiersz
      letter = 0
      sentence++
      console.log('nowy wiersz')
      setTimeout(typing, 500)
    }, 2000) //przerwa na koniec wiersza
  }
  spanText.textContent += text[sentence][letter]
  letter++
  setTimeout(typing, 100)
}
typing()