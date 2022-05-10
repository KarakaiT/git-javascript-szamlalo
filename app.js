
//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn")
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");
//alul az egyszerű és csunya

console.log(btns);

//ciklussal végiglépkedek az eltárolt gombokon amelyeken rajta van a btn class
btns.forEach((btn)=>{

    //az összes gomb közul amit bejárok ciklussal azt kattintom meg amelyimk az aktuális ciklusfutáskor jön a sorba (első futtás 0dik index decrea se)
    btn.addEventListener("click", (e)=>{

        //az éppen aktuálisan megkattintott gombom milyen class cslassokm vannak
        const style = e.currentTarget.classList;

        //ha az aktuzálisan megkattintoott gombom classzai közül tartalmazza a decrease clast 
        if(style.contains("decrease")){

            //csökkentjük az alapértéket
            count--;
        }

        // .. increase class
        else if (style.contains("increase")){

            //nöbveljük az alapértéket
            count++;
        }

        //ha ezek közül eggyik sem akkor marad a reset
        else{

            //visszaállitjumk az alapértéket
            count=0;
        }

        //szinek hozzáadása spanhez

        if(count > 0){

            value.style.color = "green";
        }

        else if(count < 0){

            value.style.color = "red";
        }

        else{

            value.style.color = "black";
        }


        value.textContent = count;
    })

})

























































/*
//Egyszerű lusta módszer
increase.addEventListener("click",()=>{

    //nöbvelem az értékét 1el
    count++;

    //megnézem hogy az alapértékem nagyobb mint 0
    if(count > 0){

        //ha igen hozzáadok egy zöld színt
        value.style.color = "green";
    }

    //
    value.textContent = count;

})

decrease.addEventListener("click",()=>{

    //csönkettem az értékét 1el
    count--;

    //megnézem hogy az alapértékem kissebb mint 0
    if(count < 0){

        //ha igen hozzáadok egy piros színt
        value.style.color = "red";
    }

    //
    value.textContent = count;

})

reset.addEventListener("click",()=>{

    //az alapértéket visszaálitjuk 0ra

    count = 0;

    value.style.color = "black";

    //az alapértékem aktuális értékett beállitom a value idivel ellátott spamnak
    value.textContent = count;

})*/

