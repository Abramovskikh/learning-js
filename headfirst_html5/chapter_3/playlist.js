document.addEventListener("DOMContentLoaded", main, false);

var text;
var button;
var list;

function main() {
    
    list = document.getElementById("playlist");
    text = document.getElementById("songTextInput");
    button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();

}

function handleButtonClick() {
    var value = text.value;
    if (!value) {
        return;
    } else {
        var li = document.createElement("li");
        li.innerHTML = value;
        list.appendChild(li);
        save(value);
    }
}