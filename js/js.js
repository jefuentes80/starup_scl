var  btn_proyecto, btn_biografia;
btn_proyecto = document.getElementById('proyectos');
btn_biografia = document.getElementById('biografia');

var caja_proyectos, caja_biografia;
caja_proyectos = document.getElementById('caja-proyectos');
caja_biografia = document.getElementById('caja-biografia');

function index(){
    caja_proyectos.classList.add("activarCaja");
}
index();


btn_proyecto.addEventListener("click", function(){
    caja_proyectos.classList.add("activarCaja");
    caja_biografia.classList.remove("activarCaja");
    
});

btn_biografia.addEventListener("click", function(){
    caja_biografia.classList.add("activarCaja");
    caja_proyectos.classList.remove("activarCaja");
    
});