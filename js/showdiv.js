//var teste = document.querySelector('.cria'); //getElementbyXX creates an array with all selected elements.


let divcont = document.querySelector("#cria");
let divshow = document.querySelector("#infantil");

    divcont.addEventListener("click", () =>{
        console.log("click")
        if(divshow.style.display ==='none') {
            divshow.style.display = 'block'
        } else {
            divshow.style.display = 'none';
        }
    divshow.scrollIntoView();
    });
    

let divteen = document.querySelector("#teen");
let divshowt = document.querySelector("#adolescente");

    divteen.addEventListener("click", ()=> {
        console.log("clickteen")
        if(divshowt.style.display ==='none') {
            divshowt.style.display = 'block'          
        } else {
            divshowt.style.display = 'none';
        }
    divshowt.scrollIntoView();
    });

let divadult = document.querySelector("#adultos");
let divadultslicer = document.querySelector("#adultosdiv");

    divadult.addEventListener("click", () => {
        console.log("clickadult")
        if(divadultslicer.style.display === 'none') {
            divadultslicer.style.display = 'block'
        }else {
            divadultslicer.style.display = 'none'
        }
        divadultslicer.scrollIntoView();
    });