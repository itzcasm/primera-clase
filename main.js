document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelectorAll(".form")[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const cursos = document.querySelectorAll(".cursos")[0];
        const nombre = document.querySelectorAll(".nombre")[0].value;
        const apellidos = document.querySelectorAll(".apellidos")[0].value;

        const generoSeleccionado = document.querySelectorAll('input[name="genero"]:checked')[0].value;
        let saludo;

        switch (generoSeleccionado) {
            case "masculino":
              saludo = "Bienvenido";
              break
            case "femenino":
              saludo = "Bienvenida";
              break;
            default:
              saludo = "Bienvenidx";
        }

        const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
        mensajeTexto.innerHTML = `¡${saludo} al curso de ${cursos.options[cursos.selectedIndex].text} ${nombre} ${apellidos}!`;

    });
});
