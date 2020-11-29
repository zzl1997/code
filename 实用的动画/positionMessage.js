function move(){
    if(!document.getElementById){return false}

    if(!document.getElementById("yidong")){return false}
    
    var elem=document.getElementById("yidong")
    elem.style.position="absolute"
    elem.style.left="50px"
    elem.style.top="50px"
    moveElement("yidong",200,200,10)
}
addLoadEvent(move)