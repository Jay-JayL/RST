let r = 0
let h = 0
let number = 0
let number2 = 0

document.getElementById('button').addEventListener('click', area)

function area () {
  r = document.getElementById('input').value
  h = document.getElementById('input2').value

  r = parseInt(r)
  h = parseInt(h)

  while (r === parseInt(r) , h === parseInt(h)) {
    function math() {
    number = Math.PI(r)(r + Math.sqrt(h ** 2 + r ** 2))
    number2 = Math.PI(r ** 2)(h / 3)
    document.getElementById('paragraph').innerHTML = number
     document.getElementById('paragraph2').innerHTML = number2
    }} 
 }
