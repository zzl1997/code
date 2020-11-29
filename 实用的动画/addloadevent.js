function addLoadEvent(fun) {
    var old = window.onload
    if (typeof old != "function") {

        window.onload = fun

    }
    else {
        window.onload = function () {

            old()
            fun()
        }

    }

}