const win = document.getElementById("windower")
const ctx = win.getContext("2d")

const white = "rgb(250, 250, 250)"
const grey = "rgb(120, 124, 126)"
const yellow = "rgb(201, 180, 88)"
const green = "rgb(106, 170, 100)"
var chosen = 0
var txt = [""]
var code = ""
var answer = ""
var tries = 5
ctx.fillStyle = white
ctx.fillRect(0, 0, 1000, 1000)

function write(letter, x, y, size) {
  if (letter == "a") {
    ctx.fillRect(x, y, 3 * size, size)
    ctx.fillRect(x, y + 1 * size, 1 * size, 4 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 2 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 4 * size)
  }
  else if (letter == "b") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 2 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 3 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
  }
  else if (letter == "c") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 2 * size, 1 * size)
  }
  else if (letter == "d") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 1 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 3 * size)
  }
  else if (letter == "e") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 2 * size, 1 * size)
  }
  else if (letter == "f") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
  }
  else if (letter == "g") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 2 * size, y + 2 * size, 1 * size, 3 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x, y + 4 * size, 2 * size, 1 * size)
  }
  else if (letter == "h") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 2 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 5 * size)
  }
  else if (letter == "i") {
    ctx.fillRect(x + 1 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x, y, 3 * size, 1 * size)
    ctx.fillRect(x, y + 4 * size, 3 * size, 1 * size)
  }
  else if (letter == "j") {
    ctx.fillRect(x + 1 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x, y + 4 * size, 2 * size, 1 * size)
  }
  else if (letter == "k") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 2 * size)
    ctx.fillRect(x + 2 * size, y + 3 * size, 1 * size, 2 * size)
  }
  else if (letter == "l") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 2 * size, 1 * size)
  }
  else if (letter == "m") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 1 * size, 1 * size, 1 * size)
  }
  else if (letter == "n") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 1 * size, 1 * size, 2 * size)
  }
  else if (letter == "o") {
    ctx.fillRect(x, y, 3 * size, 1 * size)
    ctx.fillRect(x, y + 4 * size, 3 * size, 1 * size)
    ctx.fillRect(x, y + 1 * size, 1 * size, 3 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 3 * size)
  }
  else if (letter == "p") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 2 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 1 * size)
  }
  else if (letter == "q") {
    ctx.fillRect(x, y, 3 * size, 1 * size)
    ctx.fillRect(x, y + 2 * size, 3 * size, 1 * size)
    ctx.fillRect(x, y + 1 * size, 1 * size, 2 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 4 * size)
  }
  else if (letter == "r") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y, 2 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 3 * size, 1 * size, 2 * size)
  }
  else if (letter == "s") {
    ctx.fillRect(x, y, 3 * size, 1 * size)
    ctx.fillRect(x, y + 2 * size, 3 * size, 1 * size)
    ctx.fillRect(x, y + 4 * size, 3 * size, 1 * size)
    ctx.fillRect(x, y + 1 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 3 * size, 1 * size, 1 * size)
  }
  else if (letter == "t") {
    ctx.fillRect(x + 1 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x, y, 3 * size, 1 * size)
  }
  else if (letter == "u") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 1 * size, 1 * size)
  }
  else if (letter == "v") {
    ctx.fillRect(x, y, 1 * size, 4 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 4 * size)
    ctx.fillRect(x + 1 * size, y + 4 * size, 1 * size, 1 * size)
  }
  else if (letter == "w") {
    ctx.fillRect(x, y, 1 * size, 5 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 5 * size)
    ctx.fillRect(x + 1 * size, y + 3 * size, 1 * size, 1 * size)
  }
  else if (letter == "x") {
    ctx.fillRect(x, y, 1 * size, 2 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 2 * size)
    ctx.fillRect(x, y + 3 * size, 1 * size, 2 * size)
    ctx.fillRect(x + 2 * size, y + 3 * size, 1 * size, 2 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
  }
  else if (letter == "y") {
    ctx.fillRect(x, y, 1 * size, 2 * size)
    ctx.fillRect(x + 2 * size, y, 1 * size, 2 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 3 * size)
  }
  else if (letter == "z") {
    ctx.fillRect(x, y, 3 * size, 1 * size)
    ctx.fillRect(x, y + 4 * size, 3 * size, 1 * size)
    ctx.fillRect(x + 2 * size, y + 1 * size, 1 * size, 1 * size)
    ctx.fillRect(x + 1 * size, y + 2 * size, 1 * size, 1 * size)
    ctx.fillRect(x, y + 3 * size, 1 * size, 1 * size)
  }
}

function convertAnswerToCode(answer) {
  let code = ""
  offset = Math.floor(Math.random() * 26)
  code += String.fromCharCode(97 + offset)
  let count = 0
  for (let i = 0; i < answer.length; i++) {
    count += 1
    if ((count+offset) == 27) {
      count -= 26
    }
    code += String.fromCharCode(97 + (answer.charCodeAt(i) - 97 + offset + count) % 26)
  }
  return code
}

function convertCodeToAnswer(code) {
  let answer = ""
  offset = code.charCodeAt(0) - 97
  let count = 0
  for (let i = 1; i < code.length; i++) {
    count += 1
    if ((count+offset) == 27) {
      count -= 26
    }
    answer += String.fromCharCode(97 + (code.charCodeAt(i) - 97 - offset - count + 26) % 26)
  }
  return answer
}

for (let i = 0; i < 26; i++) {
  let x = 0
  let y = 0
  if (i > 13) {
    x = 200 + 40 * (i - 13)
    y = 570
  }
  else {
    x = 200 + 40 * i
    y = 500
  }
  ctx.fillStyle = grey
  write(String.fromCharCode(97 + i), x, y, 10)
}
ctx.fillRect(720, 570, 30, 50)
ctx.fillRect(200, 570, 30, 50)


function mouseDown(e) {
  let rect = win.getBoundingClientRect()
  let x = e.clientX - rect.left
  let y = e.clientY - rect.top
  return [x, y]
}

win.addEventListener("mousedown", function(e) {
  let pos = mouseDown(e)
  let x = pos[0]
  let y = pos[1]
  if (chosen != 2) {
    if (x > 200 && x < 750 && y > 100 && y < 200) {
      chosen = 1
    }
    if (x > 200 && x < 750 && y > 300 && y < 400) {
      chosen = 0
    }
  }
  for (let i = 0; i < 28; i++) {
    if (i < 14) {
      if (x > 200 + 40 * i && x < 230 + 40 * i && y > 500 && y < 550) {
        if (chosen == 2) {
          if (txt[txt.length-1].length < answer.length && txt.length <= tries) {
            txt[txt.length-1] += (String.fromCharCode(97 + i))
          }
        }
        else if (chosen == 1) {
          answer += (String.fromCharCode(97 + i))
        }
        else {
          code += (String.fromCharCode(97 + i))
        }
      }
    }
    else {if (x > 200 + 40 * (i - 14) && x < 230 + 40 * (i - 14) && y > 570 && y < 620) {
      if (i == 27) {
        if (chosen == 2 && txt.length <= tries) {
          txt.push("")
        }
        else if (chosen == 1) {
          code = convertAnswerToCode(answer)
          chosen = 0
        }
        else {
          answer = convertCodeToAnswer(code)
          chosen = 2
        }
      }
      else if (i == 14) { //backspace
        if (chosen == 2) {
          if (txt.length <= tries) {
            txt[txt.length-1] = txt[txt.length-1].slice(0, -1)
          }
        }
        else if (chosen == 1) {
          answer = answer.slice(0, -1)
        }
        else {
          code = code.slice(0, -1)
        }
      } //backspace

      else {
        if (chosen == 2){
          if (txt[txt.length-1].length < answer.length && txt.length <= tries) {
            txt[txt.length-1] += (String.fromCharCode(97 + i -1))
          }
        }
        else if (chosen == 1) {
          answer += (String.fromCharCode(97 + i -1))
        }
        else {
          code += (String.fromCharCode(97 + i -1))
        } // other
      }
    }
  }
}

});

function run(whatever) {
  if (chosen == 2) {
    ctx.fillStyle = grey
    for (let i = 0; i < tries; i++) {
      for (let j = 0; j < answer.length; j++) {
        ctx.fillRect(195 + j*(550/answer.length), i*60, (550/answer.length)+10, 70)
        ctx.fillStyle = white
        ctx.fillRect(205 + j*(550/answer.length), 10 + i*60, (550/answer.length)-10, 50)
        ctx.fillStyle = grey
      }
    }
    for (let i = 0; i < txt.length; i++) {
      for (let j = 0; j < txt[i].length; j++) {
        if (i < txt.length-1) {
          if (answer.includes(txt[i][j])) {
            ctx.fillStyle = yellow
            if (answer[j] == txt[i][j]) {
              ctx.fillStyle = green
            }
          }
          else {
            ctx.fillStyle = grey
          }
        }
        else {
          ctx.fillStyle = grey
        }
        write(txt[i][j], 200 + (j+0.5)*(550/answer.length)-15, i*60+10, 10)
      }
    }
  }
  else {
    ctx.fillStyle = grey
    ctx.fillRect(200, 300, 550, 100)
    ctx.fillStyle = white
    ctx.fillRect(210, 310, 530, 80)
    ctx.fillStyle = grey
    ctx.fillRect(200, 100, 550, 100)
    ctx.fillStyle = white
    ctx.fillRect(210, 110, 530, 80)
    ctx.fillStyle = grey
    let txt1 = "generate code"
    for (let i = 0; i < txt1.length; i++) {
      write(txt1[i], 200 + (i+0.5)*(550/txt1.length)-15, 40, 10)
    }
    let txt2 = "enter code"
    for (let i = 0; i < txt2.length; i++) {
      write(txt2[i], 200 + (i+0.5)*(550/txt2.length)-15, 240, 10)
    }
    if (chosen == 1) {
      for (let i = 0; i < answer.length; i++) {
        write(answer[i], 200 + (i+0.5)*(550/answer.length)-15, 125, 10)
      }
    }
    else {
      for (let i = 0; i < code.length; i++) {
        write(code[i], 200 + (i+0.5)*(550/code.length)-15, 325, 10)
      }
    }
  }
}

setInterval(run, 100)
//aaaaaaaaaaaaAaaaaaaaaaAaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaAaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaAaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaAaaaaaaaaaaaaaaAaaaaaaAaaaaaaaAaaaaaaaaaaAaaaaAaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaAaaaaaaAaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaAaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh