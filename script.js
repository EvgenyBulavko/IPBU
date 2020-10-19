


function Go() {

    $('#bazkom').removeClass('hidden');
    $('#q1').addClass('hidden');
    $('#q2').removeClass('hidden');

    let ip0 = document.getElementsByTagName("input")[0].value;
    let ip1 = document.getElementsByTagName("input")[1].value;
    let ip2 = document.getElementsByTagName("input")[2].value;
    let ip3 = document.getElementsByTagName("input")[3].value;
    let ip4 = document.getElementsByTagName("input")[4].value;

    let ip = [ip0, ip1, ip2, ip3];

    let ip0vs2 = (+ip0).toString(2);
    let ip1vs2 = (+ip1).toString(2);
    let ip2vs2 = (+ip2).toString(2);
    let ip3vs2 = (+ip3).toString(2);

    let ipvs2 = [ip0vs2, ip1vs2, ip2vs2, ip3vs2];




   

    //Подровняем к 8 зн
    for (let i = 0; i < 4; i++) {
        while (ipvs2[i].length < 8) {
            ipvs2[i] = '0' + ipvs2[i];
        }
    }

    //Создаем маску
    let Mask = "";
    let ObMask = "";
    ip4 = +ip4;
    console.log(typeof (ip4));
    for (let i = 0; i < 32; i++) {
        if (ip4 == 0) { Mask = Mask + '0'; ObMask = ObMask + '1'; }
        else { Mask = Mask + '1'; ip4--; ObMask = ObMask + '0';  }


    }

    //Ищем адрес
    let AdresP = "";
    let NomerYzlaP = "";
    let SHirokoVe = "";
    let strIPvs2 = ipvs2.join('');
   
    for (let i = 0; i < 32; i++) {
        AdresP = AdresP + `${strIPvs2[i] & Mask[i]}`;
        NomerYzlaP = NomerYzlaP + `${strIPvs2[i] & ObMask[i]}`;
        SHirokoVe = SHirokoVe + `${strIPvs2[i] | ObMask[i]}`;
    }





    console.log(Mask);
    console.log(strIPvs2);
    console.log(AdresP);
    console.log(NomerYzlaP);
    console.log(SHirokoVe);
    console.log(ipvs2);
    console.log(parseInt(SHirokoVe.substr(0, 8), 2),parseInt(SHirokoVe.substr(8, 8), 2),
    parseInt(SHirokoVe.substr(16, 8), 2),parseInt(SHirokoVe.substr(24, 8), 2));
    

    let clsety = "";

    let Chislo1vmas =parseInt(SHirokoVe.substr(0, 8), 2);
    if (Chislo1vmas>=1&&Chislo1vmas<=126) {clsety = "A";}
    else if (Chislo1vmas>=128&&Chislo1vmas<=191) {clsety = "B";}
    else if (Chislo1vmas>=192&&Chislo1vmas<=223) {clsety = "C";}
    else if (Chislo1vmas>=192&&Chislo1vmas<=223) {clsety = "C";}
    else if (Chislo1vmas>=224&&Chislo1vmas<=239) {clsety = "D";}
    else if (Chislo1vmas>=240&&Chislo1vmas<=247) {clsety = "D";}
    else {clsety = "illegal"; }


// asd
document.getElementById("help").textContent = "Подсказка(стирай):"


let varA = document.getElementById("varA");
varA.textContent = `a)  Класс подсети - ${clsety}`;


let varB = document.getElementById("varB");
varB.textContent = `b) ${Mask.substr(0, 8)},${Mask.substr(8, 8)},${Mask.substr(16, 8)},${Mask.substr(24, 8)} - Маска подсети
(${parseInt(Mask.substr(0, 8), 2)}.${parseInt(Mask.substr(8, 8), 2)}.${parseInt(Mask.substr(16, 8), 2)}.${parseInt(Mask.substr(24, 8), 2)})`;

let varC = document.getElementById("varC");
varC.textContent = `c) ${AdresP.substr(0, 8)},${AdresP.substr(8, 8)},${AdresP.substr(16, 8)},${AdresP.substr(24, 8)} - Адрес подсети
(${parseInt(AdresP.substr(0, 8), 2)}.${parseInt(AdresP.substr(8, 8), 2)}.${parseInt(AdresP.substr(16, 8), 2)}.${parseInt(AdresP.substr(24, 8), 2)})`;

let varD = document.getElementById("varD");
varD.textContent = `d) ${NomerYzlaP.substr(0, 8)},${NomerYzlaP.substr(8, 8)},${NomerYzlaP.substr(16, 8)},${NomerYzlaP.substr(24, 8)} - Номер узла в подсети
(${parseInt(NomerYzlaP.substr(0, 8), 2)}.${parseInt(NomerYzlaP.substr(8, 8), 2)}.${parseInt(NomerYzlaP.substr(16, 8), 2)}.${parseInt(NomerYzlaP.substr(24, 8), 2)})`;

let varE = document.getElementById("varE");
varE.textContent = `e) ${SHirokoVe.substr(0, 8)},${SHirokoVe.substr(8, 8)},${SHirokoVe.substr(16, 8)},${SHirokoVe.substr(24, 8)} - Широковещательный адрес для подсети
(${parseInt(SHirokoVe.substr(0, 8), 2)}.${parseInt(SHirokoVe.substr(8, 8), 2)}.${parseInt(SHirokoVe.substr(16, 8), 2)}.${parseInt(SHirokoVe.substr(24, 8), 2)})`;

let varF = document.getElementById("varF");
varF.textContent = `f) ${parseInt(AdresP.substr(24, 8), 2)}-${parseInt(SHirokoVe.substr(24, 8), 2)}; - Диапазон (не включая ${parseInt(AdresP.substr(24, 8), 2)},${parseInt(SHirokoVe.substr(24, 8), 2)} )`;


let podB = document.getElementById("podB");
podB.textContent = `b) Берем значение маски, это количество единиц, остальное количество нулей до 32`;

let podС = document.getElementById("podC");
podС.textContent = `c) Побитово сравниваем 2 числа (IP&Маску) `;

let podD = document.getElementById("podD");
podD.textContent = `d) Побитово сравниваем 2 числа (IP&(!Маску)) `;

let podE = document.getElementById("podE");
podE.textContent = `e) Побитово сравниваем 2 числа (IP|(!Маску)) `;

let podF = document.getElementById("podF");
podF.textContent = `f) И так понятно:) `;

    return false;
};

function input(){

    let el = "";
    

}



