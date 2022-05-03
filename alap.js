console.log("Hello");

let gep_pont =0;
let jatekos_pont =0;
let dontetlen_pont = 0;

const jatekos_pontok = document.getElementById("jatekos_pontok");
const gep_pontok = document.getElementById("gep_pontok");
const dontetlen_pontok = document.getElementById("dontetlen_pontok");
const ko_div = document.getElementById("ko");
const papir_div = document.getElementById("papir");
const ollo_div = document.getElementById("ollo");
const ko_ollo = document.getElementById("ko_ollo");
const papir_ko = document.getElementById("papir_ko");
const ollo_papir = document.getElementById("ollo_papir");
const ko_papir = document.getElementById("ko_papir");
const papir_ollo = document.getElementById("papir_ollo");
const ollo_ko = document.getElementById("ollo_ko");
const ko_ko = document.getElementById("ko_ko");
const papir_papir = document.getElementById("papir_papir");
const ollo_ollo = document.getElementById("ollo_ollo");
const ujrakezdes = document.getElementById("ujrakezdes");

function getGepvalasz(){
    const valasztasok = ['ko', 'papir', 'ollo'];
    console.log(Math.floor(Math.random()*3));
    const randomNumber = Math.floor(Math.random()*3);
    return valasztasok[randomNumber];
}
console.log(getGepvalasz());




function win(jatekosValasz,gepValaszt ){
    jatekos_pont++;
    jatekos_pontok.innerHTML = jatekos_pont;
    console.log("win");
    if(jatekosValasz=='ko' && gepValaszt=='ollo'){
        ko_ollo.style.display= 'contents';
        setTimeout(() => { ko_ollo.style.display= 'none' }, 2000)
    }

    if(jatekosValasz=='papir' && gepValaszt=='ko'){
        papir_ko.style.display= 'contents';
        setTimeout(() => {papir_ko.style.display= 'none' }, 2000)
    }

    if(jatekosValasz=='ollo' && gepValaszt=='papir'){
        ollo_papir.style.display= 'contents';
        setTimeout(() => {ollo_papir.style.display= 'none' }, 2000)
    }


}


function lose(jatekosValasz, gepValaszt){
    gep_pont++;
    gep_pontok.innerHTML = gep_pont;
    console.log("lose");

    if(jatekosValasz=='ko' && gepValaszt=='papir'){
        ko_papir.style.display= 'contents';
        setTimeout(() => { ko_papir.style.display= 'none' }, 2000)
    }

    if(jatekosValasz=='papir' && gepValaszt=='ollo'){
        papir_ollo.style.display= 'contents';
        setTimeout(() => { papir_ollo.style.display= 'none' }, 2000)
    }

    if(jatekosValasz=='ollo' && gepValaszt=='ko'){
        ollo_ko.style.display= 'contents';
        setTimeout(() => { ollo_ko.style.display= 'none' }, 2000)
    }


}

function draw(jatekosValasz, gepValaszt){
    dontetlen_pont++;
   dontetlen_pontok.innerHTML = dontetlen_pont;
    console.log("draw");


    if(jatekosValasz=='ko' && gepValaszt=='ko'){
        ko_ko.style.display= 'contents';
        setTimeout(() => { ko_ko.style.display= 'none' }, 2000)
    }

    if(jatekosValasz=='papir' && gepValaszt=='papir'){
        papir_papir.style.display= 'contents';
        setTimeout(() => { papir_papir.style.display= 'none' }, 2000)
    }

    if(jatekosValasz=='ollo' && gepValaszt=='ollo'){
        ollo_ollo.style.display= 'contents';
        setTimeout(() => { ollo_ollo.style.display= 'none' }, 2000)
    }



}

function jatek (jatekosValasz){
    const gepValaszt = getGepvalasz();
    
    console.log(jatekosValasz + " " + gepValaszt);
    switch(jatekosValasz + gepValaszt){
        case "koollo":
        case "papirko":
        case "ollopapir":
            win(jatekosValasz, gepValaszt);
            break;
        case "kopapir":
        case "papirollo":
        case "olloko":
            lose(jatekosValasz, gepValaszt);
            break;
        case "olloollo":
        case "papirpapir":
        case "koko":
            draw(jatekosValasz ,gepValaszt);
            break;
    }
}



function main(){
    ko_div.addEventListener('click', function(){
       jatek("ko");
    })
    papir_div.addEventListener('click', function(){
        jatek("papir");
    })
    ollo_div.addEventListener('click', function(){
        jatek("ollo");
    })

    ujrakezdes.addEventListener('click', function(){
        ujra();
    })
}
main();