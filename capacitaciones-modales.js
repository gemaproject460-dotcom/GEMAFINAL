
/*==========================================================
            ELEMENTOS DEL DOM
==========================================================*/

const overlayEmpresa = document.getElementById("overlayEmpresa");
const modalEmpresa = document.querySelector(".modal-empresa");

const overlayPublico = document.getElementById("overlayPublico");
const modalPublico = document.querySelector(".modal-publico");

const botonesEmpresa = document.querySelectorAll(".btn-empresa");
const botonesPublico = document.querySelectorAll(".btn-publico");

const cerrarEmpresa = document.getElementById("cerrarEmpresa");
const cerrarPublico = document.getElementById("cerrarPublico");

const cancelarEmpresa = document.getElementById("cancelarEmpresa");
const cancelarPublico = document.getElementById("cancelarPublico");


/*==========================================================
            ABRIR MODAL EMPRESAS
==========================================================*/

botonesEmpresa.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        const curso = boton.dataset.curso;

        console.log("Curso seleccionado:", curso);

        overlayEmpresa.classList.add("activo");

        document.body.style.overflow = "hidden";

        /*
            Esta función estará en
            capacitaciones-empresas.js
        */

        if (typeof cargarCursoEmpresa === "function") {

            cargarCursoEmpresa(curso);

        }

    });

});


/*==========================================================
            ABRIR MODAL PÚBLICO
==========================================================*/

botonesPublico.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        const curso = boton.dataset.curso;

        overlayPublico.classList.add("activo");

        document.body.style.overflow = "hidden";

        /*
            Esta función estará en
            capacitaciones-publico.js
        */

        if (typeof cargarCursoPublico === "function") {

            cargarCursoPublico(curso);

        }

    });

});

/*==========================================================
            CERRAR MODAL EMPRESAS
==========================================================*/

function cerrarModalEmpresa() {

    overlayEmpresa.classList.remove("activo");

    document.body.style.overflow = "";

}


/*==========================================================
            CERRAR MODAL PÚBLICO
==========================================================*/

function cerrarModalPublico() {

    overlayPublico.classList.remove("activo");

    document.body.style.overflow = "";

}


/*==========================================================
            BOTÓN X
==========================================================*/

cerrarEmpresa.addEventListener("click", cerrarModalEmpresa);

cerrarPublico.addEventListener("click", cerrarModalPublico);


/*==========================================================
            BOTÓN CANCELAR
==========================================================*/

cancelarEmpresa.addEventListener("click", cerrarModalEmpresa);

cancelarPublico.addEventListener("click", cerrarModalPublico);


/*==========================================================
            CERRAR AL HACER CLIC FUERA
==========================================================*/

overlayEmpresa.addEventListener("click", (e) => {

    if (e.target === overlayEmpresa) {

        cerrarModalEmpresa();

    }

});


overlayPublico.addEventListener("click", (e) => {

    if (e.target === overlayPublico) {

        cerrarModalPublico();

    }

});


/*==========================================================
            CERRAR CON ESC
==========================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (overlayEmpresa.classList.contains("activo")) {

            cerrarModalEmpresa();

        }

        if (overlayPublico.classList.contains("activo")) {

            cerrarModalPublico();

        }

    }

});


/*==========================================================
            EVITAR PROPAGACIÓN DEL CLIC
==========================================================*/

modalEmpresa.addEventListener("click", (e) => {

    e.stopPropagation();

});


modalPublico.addEventListener("click", (e) => {

    e.stopPropagation();

});


/*==========================================================
            FUNCIONES DISPONIBLES GLOBALMENTE
==========================================================*/

window.cerrarModalEmpresa = cerrarModalEmpresa;

window.cerrarModalPublico = cerrarModalPublico;