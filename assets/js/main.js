var t = []

function Tarol()
{
    var obj = {
        rendszam: document.getElementById("rendszam").value,
        uzemanyag: document.getElementById("uzemSelect").value,
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
    var b = 0, d = 0, e = 0, atlag = 0, regi = 0, uj = 0, ajto = "", elsotulajdonos = 0, ajto3 = 0, ajto5 = 0
    var s = ""

    for (let i = 0; i < t.length; i++) 
    {
        if (t[i].uzemanyag == "benzin") b++
        else if (t[i].uzemanyag == "dizel") d++
        else if (t[i].uzemanyag == "elektromos") e++
        if (t[i].elsotulajdonos)
        {
            elsotulajdonos++    
        }
        atlag = Math. round((elsotulajdonos/t.length)*100)
        if (t[i].ajtoharom) ajto3++
        else if (t[i].ajtoot) ajto5++
        if (ajto3 < ajto5) ajto = "Az 5 ajtós modell"
        else ajto = "A 3 ajtós modell"
        if (t[i].rendszam.length >= 7) uj++
        else regi++
    }

    s += "<table id='statisztikatable'><tr><td>"
    s +=
    "<b>Üzemanyag szerint</b></td><td>Benzin</td><td>Dízel</td><td>Elektromos</td><td></td></tr>"
    s += 
    "<tr><td></td><td>"+b+"</td><td>"+d+"</td><td>"+e+"</td></tr>"
    s += 
    "<tr><td><b>Első tulajdonosok százalékos aránya</b></td><td></td><td>"+atlag+"%</td></tr>"
    s += 
    "<tr><td><b>Rendszámok megoszlása</b></td><td>Régi rendszám</td><td></td><td>Új rendszám</td></tr>"
    s += 
    "<tr><td></td><td>"+regi+"</td><td></td><td>"+uj+"</td></tr>"
    s +=
    "<tr><td><b>Melyik népszerűbb?</b></td><td></td><td>"+ajto+"</td></tr>"
    s += "</table>"
    document.getElementById("statisztika").innerHTML = s
}

