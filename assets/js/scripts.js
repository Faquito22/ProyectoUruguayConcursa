const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {faq.addEventListener ("click", () => {faq.classList.toggle("active");});});

let UbicaciónPrincipal = window.pageYOffset;
window.onscroll = function(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(UbicaciónPrincipal >= Desplazamiento_Actual){
        document.getElementById('header').style.top = '0';
    }
    else{
        document.getElementById('header').style.top = '-1000px';
    }
    UbicaciónPrincipal = Desplazamiento_Actual;
}