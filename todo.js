
let colorsArray = ['red', 'yellow', 'blue', 'green', 'pink', 'gray']
let randomColorIndex

setInterval(function () {
    randomColorIndex = Math.floor(Math.random() * colorsArray.length)
    document.body.style.backgroundColor = colorsArray[randomColorIndex]
}, 2000)

let inputtodo = document.getElementById("todo")


let buttonadd = document.getElementById("add")

let ull = document.getElementById("ull")


buttonadd.addEventListener("click", funadd)




function funadd() {
    let inputtodoo = inputtodo.value

    if (inputtodoo) {
        let newtodoli = document.createElement("li")

        newtodoli.className = "list-group-item list-group-item-action d-flex justify-content-between bg-info "

        let newdiv1 = document.createElement("span")

        newdiv1.innerHTML = inputtodoo

        let newdiv = document.createElement("div")

        newdiv.className = "form-check "

        let newinput = document.createElement("input")

        newinput.className = "form-check-input "
        newinput.setAttribute("type", "checkbox")

        newinput.style.margin = "5px"


        let newi = document.createElement("i")

        newi.className = "fa fa-trash-o delete"



        newdiv.append(newinput, newi)

        newtodoli.append(newdiv1, newdiv)

        ull.append(newtodoli)

        newi.addEventListener("click", fundelet)

        function fundelet() {

            newtodoli.remove()
        }


    }


}


inputtodo.addEventListener("keydown", funkeydown)

function funkeydown(event) {
    let valuekey = event.target.value.trim()

    if (event.keyCode === 13) {
        if (valuekey) {
            funadd()

        }
    }


}


