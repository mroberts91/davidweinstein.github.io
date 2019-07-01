var input = document.getElementById("typeitem")
var button = document.getElementById("addItem")
var ul = document.querySelector("ul")
var deleteLi = document.getElementById("deleteondbl")
var clearAll = document.getElementById("clearAll").onclick = function() {
    deleteChild();
}

function deleteChild() {
    var child = ul.lastElementChild;
    while (child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }
}

function inputLength() {
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
ul.onclick = function(event) {
    var target = getEventTarget(event);
    target.classList.toggle("done");
}
deleteLi.ondblclick = function(event) {
    var target = getEventTarget(event);
    event.target.parentNode.removeChild(target);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);