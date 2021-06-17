/*Función que muestra la opción trivia*/
function trivia(){
	let principal= document.getElementsByClassName('trivia')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("colombia")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("organizacion")[0];
	tercero.style.display="none";
}

/*Función que muestra la opción organizacion*/
function organizacion(){
	let principal= document.getElementsByClassName('organizacion')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("colombia")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("trivia")[0];
	tercero.style.display="none";
}

/*Función que muestra la opción colombia*/
function colombia(){
	let principal= document.getElementsByClassName('colombia')[0];
	principal.style.display= "flex";
	let segundo= document.getElementsByClassName("organizacion")[0];
	segundo.style.display="none";
	let tercero= document.getElementsByClassName("trivia")[0];
	tercero.style.display="none";
}

