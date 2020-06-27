function num(n){
    var r = document.getElementById("mm")
    r.value += n
}
function clearr(){
    var r = document.getElementById("mm")
    r.value =""
}
function result(){
    var r = document.getElementById("mm")
    r.value =eval(r.value)
}
