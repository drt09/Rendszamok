var t = []

function Tarol()
{
    var obj = {
        rendszam: document.getElementById("rendszam").value,
        uzemanyag: document.getElementById("uzemselect").value,
        elsotulajdonos: document.getElementById("elsoTul").checked,
        ajtoharom: document.getElementById("harom").checked,
        ajtoot: document.getElementById("ot").checked
    }
    t.push(obj)
    document.getElementById("rendszam").focus()
    document.getElementById("rendszam").innerHTML = ""
    document.getElementById("elsoTul").checked = false
    document.getElementById("harom").checked = false
    document.getElementById("ot").checked = true
    if (document.getElementById("rendszam") == "")
    {
        alert("Írjon be egy rendszámot!")
    }
}

function Statisztika()
{
    var b = 0, d = 0, e = 0, atlag = 0, regi = 0, uj = 0, ajto = 0
    document.getElementById("statisztika").innerHTML += "<table><tr><td>"
    document.getElementById("statisztika").innerHTML +=
    "Üzemanyag szerint</td><td>Benzin</td><td>Dízel</td><td>Elektromos</td><td></td></tr>"
    document.getElementById("statisztika").innerHTML += 
    "<tr><td>"+b+"</td><td>"+d+"</td><td>"+e+"</td></tr>"
    document.getElementById("statisztika").innerHTML += 
    "<tr><td>Első tulajdonosok százalékos aránya</td><td>"+atlag+"</td></tr>"
    document.getElementById("statisztika").innerHTML += 
    "<tr><td>Rendszámok megoszlása</td><td>Régi rendszám</td><td>Új rendszám</td></tr>"
    document.getElementById("statisztika").innerHTML += 
    "<tr><td></td><td>"+regi+"</td><td>"+uj+"</td></tr>"
    document.getElementById("statisztika").innerHTML +=
    "<tr><td>Melyik népszerűbb?</td><td>"+ajto+"</td></tr>"
    document.getElementById("statisztika").innerHTML += "</table>"
}