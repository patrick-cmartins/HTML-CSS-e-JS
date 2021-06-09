function verificar () {
    var ntab = Number(document.getElementById('tab').value)
    var res = document.getElementById('res')
    var tabuada =""
    for(var count=1; count<=10; count++)
    tabuada += ntab+ "X"+count+"=" +
        ntab*count+"<br />"
        res.innerHTML = tabuada
 }