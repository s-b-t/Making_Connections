function changename(element){
    document.querySelector(element).innerText = "Steve Tobias";
}

var requestSpan = document.querySelector("#requests");
var connectionsSpan = document.querySelector("#connections");

function accept(id) {
    var element = document.querySelector(id);
    (element).remove();
    connectionsSpan.innerText++;
    requestSpan.innerText--;
}

function ignore(id) {
    var element = document.querySelector(id);
    (element).remove();
    requestSpan.innerText--;
    
}



