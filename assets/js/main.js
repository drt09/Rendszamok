var t = []

function Tarol()
{
    var obj = {
        rendsz: document.getElementById("rendszam").value,
        b: document.getElementById("benzin").selected,
        d: document.getElementById("dizel").selected,
        e: document.getElementById("elektr").selected,
        elstul: document.getElementById("elsoTul").checked,
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
    var benzin, elektr, dizel
    for (let i = 0; i < t.length; i++) 
    {
        if (t[i].b) benzin++
        if (t[i].d) dizel++
        if (t[i].e) elektr++
    }
    document.getElementById("statisztika").innerHTML += "<table><tr><td>Üzemanyag szerint</td><td>Benzin</td><td>Dízel</td><td>Elektromos</td><td></td>"
    document.getElementById("statisztika").innerHTML += "<tr><td>"+benzin+"</td><td></td><td></td></tr>"
    document.getElementById("statisztika").innerHTML += "</table>"
}