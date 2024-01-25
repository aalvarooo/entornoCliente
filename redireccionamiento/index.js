document.addEventListener("DOMContentLoaded", () => {


    const sumbit = document.querySelector(".submit");
    sumbit.addEventListener("click", submitForm);

    function submitForm() {
        const nombre = document.getElementById('fname').value;
        const apellido = document.getElementById('lname').value;
        const cicloFormativo = document.getElementById('country').value;
        const curso = document.getElementById('curso').value;

        const queryParams = `?nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}&cicloFormativo=${encodeURIComponent(cicloFormativo)}&curso=${encodeURIComponent(curso)}`;

        window.location.href = "tarjeta.html" + queryParams;
    }

});
