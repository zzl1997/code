function moveElement(elementID, final_x, final_y, internal) {

    if (!document.getElementById) return false
    if (!document.getElementById("elementID")) return false
    var elem = document.getElementById("elementID")
    var x = parseInt(elem.style.left)
    var y = parseInt(elem.style.top)

    if (x == final_x && y == final_y) {
        return true
    }
    if (x < final_x) { x++ }
    if (x > final_x) { x-- }
    if (y < final_y) { y++ }
    if (y > final_y) { y-- }
    elem.style.left = x + "px"
    elem.style.top = y + "px"
    var repeat = "moveElement('" + elementID + "', " + final_x + ", " + final_y + ", " + internal + ")"
    movement = setTimeout(repeat, internal)

    //  movement=setTimeout("moveMessage()",10)
    // clearTimeout(movement)

}