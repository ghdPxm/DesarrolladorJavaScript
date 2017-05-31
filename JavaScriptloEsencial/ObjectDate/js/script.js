//Obejto Date

var date1 = new Date();
var date2 = new Date("December 26, 2016 12:30:20");
var date3 = new Date(2016, 0, 5);

document.getElementById('d1').innerHTML = date1;
document.getElementById('d2').innerHTML = date2;
document.getElementById('d3').innerHTML = date3;

//Metodos del objeto date

//Obtener solo el año de una fecha
document.getElementById('d4').innerHTML = date1.getFullYear();

//Asignar un año en especifico a una fecha
date1.setFullYear(2017);
document.getElementById('d5').innerHTML = date1.getFullYear();

//Obtener el mes de una fecha
document.getElementById('d6').innerHTML = date2.getMonth();

//Asignar un mes en especifico a una fecha
date2.setMonth(5);
document.getElementById('d7').innerHTML = date2.getMonth();

//Obtener el dia de una fecha
document.getElementById('d8').innerHTML = date3.getDate();

//Asignar un dia en especifico a una fecha
date3.setDate(19);
document.getElementById('d9').innerHTML = date3.getDate();

//Obtener la hora especifica de una fecha
document.getElementById('d10').innerHTML = date1.getHours();

//Asignar una hora en especifico a una fecha
date1.setHours(4);
document.getElementById('d11').innerHTML = date1.getHours();
