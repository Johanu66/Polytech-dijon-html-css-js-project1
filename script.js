// let area = "VIDE";
// const width = 1920;
// const height = 1080;
// area = width * height;
// console.log(area);
// try {
//     height = 1200;
// } catch (error) {
//     console.log(error);
// }
// console.log(height);

// const empty_array = [];
// const filled_array = [1, 2, 3, 4];
// const array = [87, "étudiants"];
// array.push(55);
// array.push("Chaine");
// console.log(array);

// notTrue = false;
// zero = 0;
// if(notTrue === zero){
//     console.log( "Elles sont égales")
// }
// else{
//     console.log("Elles ne sont pas égales");
// }

// for (let i = 0; i < 30; i++) {
//     empty_array[i] = Math.random();
// }
// console.log(empty_array);

// function average(tab){
//     moy = 0;
//     for (let index = 0; index < tab.length; index++) {
//         moy += tab[index];
//     }
//     return (moy / tab.length);
// }
// console.log(average(empty_array));


/********************************************************************************/


function changeContent(){
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Polytech Dijon";
    h1.style.color = "#469177";

    let a = document.querySelector("p a");
    a.href = "https://esirem.u-bourgogne.fr";
}
changeContent();


/********************************************************************************/


function testValue(){
    let input = document.querySelector("input");
    let value = input.value;
    let color = "";
    if(value == null || value === ""){
        color = "red";
    }else if(value % 2 == 0){
        color = "yellow";
    }
    else{
        color = "blue";
    }
    input.style.backgroundColor = color;
}
let input = document.querySelector("input");
input.addEventListener("input", testValue);

function connectClickEvent(){
    let button = document.querySelector("button");
    button.addEventListener("click", testValue);
}
connectClickEvent();

/********************************************************************************/

// function sample() {
//     if (true) {
//         let x = 10; // x est uniquement accessible dans ce bloc if
//         var y = 20; // y est accessible dans toute la fonction exampleScope
//     }
//     console.log(x); // Erreur : x is not defined
//     console.log(y); // Affiche 20
// }
// sample();


/********************************************************************************/


let btn_ajouter = document.getElementById("ajouter");
btn_ajouter.addEventListener("click", function(){
    let select = document.querySelector("select");
    let input = document.querySelector("input");
    select.innerHTML += "<option>Valeur " + input.value + "</option>";
});


let btn_supprimer = document.getElementById("supprimer");
btn_supprimer.addEventListener("click", function(){
    let select = document.querySelector("select");
    select.removeChild(select.selectedOptions[0]);
});