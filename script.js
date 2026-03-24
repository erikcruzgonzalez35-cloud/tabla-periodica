const tabla = document.getElementById("tabla");

/* TRADUCCIÓN */

const nombresES = {
Hydrogen:"Hidrógeno",Helium:"Helio",Lithium:"Litio",Beryllium:"Berilio",
Boron:"Boro",Carbon:"Carbono",Nitrogen:"Nitrógeno",Oxygen:"Oxígeno",
Fluorine:"Flúor",Neon:"Neón",Sodium:"Sodio",Magnesium:"Magnesio",
Aluminium:"Aluminio",Silicon:"Silicio",Phosphorus:"Fósforo",Sulfur:"Azufre",
Chlorine:"Cloro",Argon:"Argón",Potassium:"Potasio",Calcium:"Calcio",
Scandium:"Escandio",Titanium:"Titanio",Vanadium:"Vanadio",Chromium:"Cromo",
Manganese:"Manganeso",Iron:"Hierro",Cobalt:"Cobalto",Nickel:"Níquel",
Copper:"Cobre",Zinc:"Zinc",Gallium:"Galio",Germanium:"Germanio",
Arsenic:"Arsénico",Selenium:"Selenio",Bromine:"Bromo",Krypton:"Kriptón",
Rubidium:"Rubidio",Strontium:"Estroncio",Yttrium:"Itrio",Zirconium:"Circonio",
Niobium:"Niobio",Molybdenum:"Molibdeno",Technetium:"Tecnecio",
Ruthenium:"Rutenio",Rhodium:"Rodio",Palladium:"Paladio",Silver:"Plata",
Cadmium:"Cadmio",Indium:"Indio",Tin:"Estaño",Antimony:"Antimonio",
Tellurium:"Telurio",Iodine:"Yodo",Xenon:"Xenón",Cesium:"Cesio",
Barium:"Bario",Lanthanum:"Lantano",Cerium:"Cerio",Praseodymium:"Praseodimio",
Neodymium:"Neodimio",Promethium:"Prometio",Samarium:"Samario",
Europium:"Europio",Gadolinium:"Gadolinio",Terbium:"Terbio",
Dysprosium:"Disprosio",Holmium:"Holmio",Erbium:"Erbio",Thulium:"Tulio",
Ytterbium:"Iterbio",Lutetium:"Lutecio",Hafnium:"Hafnio",Tantalum:"Tántalo",
Tungsten:"Wolframio",Rhenium:"Renio",Osmium:"Osmio",Iridium:"Iridio",
Platinum:"Platino",Gold:"Oro",Mercury:"Mercurio",Thallium:"Talio",
Lead:"Plomo",Bismuth:"Bismuto",Polonium:"Polonio",Astatine:"Astato",
Radon:"Radón",Francium:"Francio",Radium:"Radio",Actinium:"Actinio",
Thorium:"Torio",Protactinium:"Protactinio",Uranium:"Uranio",
Neptunium:"Neptunio",Plutonium:"Plutonio",Americium:"Americio",
Curium:"Curio",Berkelium:"Berkelio",Californium:"Californio",
Einsteinium:"Einsteinio",Fermium:"Fermio",Mendelevium:"Mendelevio",
Nobelium:"Nobelio",Lawrencium:"Lawrencio",Rutherfordium:"Rutherfordio",
Dubnium:"Dubnio",Seaborgium:"Seaborgio",Bohrium:"Bohrio",
Hassium:"Hassio",Meitnerium:"Meitnerio",Darmstadtium:"Darmstadtio",
Roentgenium:"Roentgenio",Copernicium:"Copernicio",Nihonium:"Nihonio",
Flerovium:"Flerovio",Moscovium:"Moscovio",Livermorium:"Livermorio",
Tennessine:"Tenesino",Oganesson:"Oganesón"
};

/* AÑO DE DESCUBRIMIENTO */
const aniosDescubrimiento = {
"Hidrógeno":1766,"Helio":1868,"Litio":1817,"Berilio":1798,"Boro":1808,"Carbono":"Antigüedad",
"Nitrógeno":1772,"Oxígeno":1774,"Flúor":1886,"Neón":1898,
"Sodio":1807,"Magnesio":1755,"Aluminio":1825,"Silicio":1824,"Fósforo":1669,"Azufre":"Antigüedad",
"Cloro":1774,"Argón":1894,
"Potasio":1807,"Calcio":1808,"Escandio":1879,"Titanio":1791,"Vanadio":1801,"Cromo":1797,
"Manganeso":1774,"Hierro":"Antigüedad","Cobalto":1735,"Níquel":1751,"Cobre":"Antigüedad",
"Zinc":1746,"Galio":1875,"Germanio":1886,"Arsénico":"Antigüedad","Selenio":1817,"Bromo":1826,"Kriptón":1898,
"Rubidio":1861,"Estroncio":1790,"Itrio":1794,"Circonio":1789,"Niobio":1801,"Molibdeno":1778,
"Tecnecio":1937,"Rutenio":1844,"Rodio":1803,"Paladio":1803,"Plata":"Antigüedad","Cadmio":1817,
"Indio":1863,"Estaño":"Antigüedad","Antimonio":"Antigüedad","Telurio":1782,"Yodo":1811,"Xenón":1898,
"Cesio":1860,"Bario":1808,"Lantano":1839,"Cerio":1803,"Praseodimio":1885,"Neodimio":1885,
"Prometio":1945,"Samario":1879,"Europio":1901,"Gadolinio":1880,"Terbio":1843,"Disprosio":1886,
"Holmio":1878,"Erbio":1843,"Tulio":1879,"Iterbio":1878,"Lutecio":1907,
"Hafnio":1923,"Tantalio":1802,"Wolframio":1783,"Renio":1925,"Osmio":1803,"Iridio":1803,
"Platino":"Antigüedad","Oro":"Antigüedad","Mercurio":"Antigüedad","Talio":1861,"Plomo":"Antigüedad",
"Bismuto":"Antigüedad","Polonio":1898,"Astato":1940,"Radón":1900,
"Francio":1939,"Radio":1898,"Actinio":1899,"Torio":1829,"Protactinio":1913,"Uranio":1789,
"Neptunio":1940,"Plutonio":1940,"Americio":1944,"Curio":1944,"Berkelio":1949,"Californio":1950,
"Einsteinio":1952,"Fermio":1952,"Mendelevio":1955,"Nobelio":1958,"Lawrencio":1961,
"Rutherfordio":1964,"Dubnio":1967,"Seaborgio":1974,"Bohrio":1981,"Hassio":1984,
"Meitnerio":1982,"Darmstadtio":1994,"Roentgenio":1994,"Copernicio":1996,
"Nihonio":2004,"Flerovio":1998,"Moscovio":2003,"Livermorio":2000,"Tenesino":2010,"Oganesón":2002
};

/* CONFIGURACIÓN ELECTRÓNICA */

function configuracionElectronica(Z){
const orbitales=[
["1s",2],["2s",2],["2p",6],
["3s",2],["3p",6],
["4s",2],["3d",10],["4p",6],
["5s",2],["4d",10],["5p",6],
["6s",2],["4f",14],["5d",10],["6p",6],
["7s",2],["5f",14],["6d",10],["7p",6]
];

let e=Z, config="";
for(let i=0;i<orbitales.length;i++){
if(e<=0) break;
let usar=Math.min(e,orbitales[i][1]);
config+=orbitales[i][0]+usar+" ";
e-=usar;
}
return config;
}

/* ESTADO */

function estadoFisico(e){
if(e=="Gas") return "Gas";
if(e=="Liquid") return "Líquido";
if(e=="Solid") return "Sólido";
return "Desconocido";
}

/* DATOS */

fetch("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json")
.then(res=>res.json())
.then(data=>{

const elementos=data.elements.filter(e=>e.number<=118);

elementos.forEach(e=>{

let div=document.createElement("div");

/* COLORES */

let categoria=e.category;

if(categoria.includes("alkali metal")) categoria="alcalino";
else if(categoria.includes("alkaline earth metal")) categoria="alcalinoterreo";
else if(categoria.includes("transition metal")) categoria="transition";
else if(categoria.includes("metalloid")) categoria="metaloide";
else if(categoria.includes("noble gas")) categoria="gas-noble";
else if(categoria.includes("lanthanide")) categoria="lanthanide";
else if(categoria.includes("actinide")) categoria="actinide";
else categoria="no-metal";

div.className="elemento "+categoria;

div.style.gridColumn=e.xpos;
div.style.gridRow=e.ypos;

div.innerHTML =
"<div class='numero'>"+e.number+"</div>"+
"<div class='simbolo'>"+e.symbol+"</div>"+
"<div class='nombre'>"+(nombresES[e.name] || e.name)+"</div>"+
"<div class='masa'>"+parseFloat(e.atomic_mass).toFixed(2)+"</div>";

/* CLICK */

div.onclick=function(){

let nombre=nombresES[e.name] || e.name;

/* 🔬 IMAGEN LABORATORIO (FIJA Y SIN ERROR) */
let imagen="https://loremflickr.com/320/240/"+e.name+",element";

/* INFO */

document.getElementById("info").innerHTML=

"<h2>"+nombre+"</h2>"+

"<img src='"+imagen+"' width='230' style='border-radius:10px' onerror=\"this.style.display='none'\"><br>"+

"<p><b>Símbolo:</b> "+e.symbol+"</p>"+

"<p><b>Número atómico:</b> "+e.number+"</p>"+

"<p><b>Masa atómica:</b> "+e.atomic_mass+"</p>"+

"<p><b>Electronegatividad:</b> "+(e.electronegativity_pauling??"No disponible")+"</p>"+

"<p><b>Descubrido por:</b> "+(e.discovered_by || "Desconocido")+"</p>"+

"<p><b>Año de descubrimiento:</b> "+(aniosDescubrimiento[nombre] || "Desconocido")+"</p>"+

"<p><b>Estado:</b> "+estadoFisico(e.phase)+"</p>"+

"<p><b>Configuración electrónica:</b> "+configuracionElectronica(e.number)+"</p>";

};

tabla.appendChild(div);

});

});

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function(){

let texto = buscador.value.toLowerCase();
let elementos = document.querySelectorAll(".elemento");

elementos.forEach(el => {

let contenido = el.innerText.toLowerCase();

if(texto === ""){
    // 🔥 SI ESTÁ VACÍO → TODO NORMAL
    el.style.display = "flex";
    el.style.opacity = "1";
}
else if(contenido.includes(texto)){
    // ✔ Coincide
    el.style.display = "flex";
    el.style.opacity = "1";
}
else{
    // ❌ No coincide
    el.style.opacity = "0.2";
}

});

});