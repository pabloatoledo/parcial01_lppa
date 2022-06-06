window.onload = function() {

    //----------------- variables -----------------//

    var nombre = document.getElementById("nombre")
    var errNom = document.getElementById("errNom")
    var apellido = document.getElementById("apellido")
    var errApe = document.getElementById("errApe")
    var email = document.getElementById("email")
    var errMail = document.getElementById("errMail")
    var edad = document.getElementById("edad")
    var errEdad = document.getElementById("errEdad")
    var errSexo = document.getElementById("errSexo")
    var errInt = document.getElementById("errInt")
    var intMus = document.getElementById("musica")
    var intDep = document.getElementById("deporte")
    var intJue = document.getElementById("juego")
    var intTec = document.getElementById("tecnologia")
    var intTemOtro = document.getElementById("tema_otro")
    var errPais = document.getElementById("errPais")
    var pais = document.getElementById("pais")
    var btnEviar = document.getElementById("enviar")
    var modal = document.getElementById("modal_ok")
    var span = document.getElementsByClassName("close")[0]
    var regOk = 0
    
    //----------------- detecta acciones en los input -----------------//

    nombre.addEventListener("blur", valNom)
    nombre.addEventListener("focus", remErrNom)
    apellido.addEventListener("blur", valApe)
    apellido.addEventListener("focus", remErrApe)
    email.addEventListener("blur", valEmail)
    email.addEventListener("focus", remErrMail)
    edad.addEventListener("blur", valEdad)
    edad.addEventListener("focus", remErrEdad)
    btnEviar.addEventListener("click", verifTodo)

    span.onclick = function() {
        modal.style.display = "none";
        }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //----------------- manejo mensajes de error -----------------//

    function showErrNom () {
        errNom.classList.remove("oculto")
        nombre.style.borderColor = "red"
    }
    function remErrNom () {
        errNom.classList.add("oculto")
        nombre.style.borderColor = "beige"
    }
    function showErrApe () {
        errApe.classList.remove("oculto")
        apellido.style.borderColor = "red"
    }
    function remErrApe () {
        errApe.classList.add("oculto")
        apellido.style.borderColor = "beige"
    }
    function showErrMail () {
        errMail.classList.remove("oculto")
        email.style.borderColor = "red"
    }
    function remErrMail () {
        errMail.classList.add("oculto")
        email.style.borderColor = "beige"
    }
    function showErrEdad () {
        errEdad.classList.remove("oculto")
        edad.style.borderColor = "red"
    }
    function remErrEdad () {
        errEdad.classList.add("oculto")
        edad.style.borderColor = "beige"
    }
    function showErrSexo () {
        errSexo.classList.remove("oculto")
    }
    function remErrSexo () {
        errSexo.classList.add("oculto")
    }
    function showErrInt () {
        errInt.classList.remove("oculto")
    }
    function remErrInt () {
        errInt.classList.add("oculto")
    }
    function showErrPais () {
        errPais.classList.remove("oculto")
    }
    function remErrPais () {
        errPais.classList.add("oculto")
    }



    //----------------- validaciones -----------------//

    function valNom (e) {
        var soloLetra = /^[ a-zA-ZáéíóúÁÉÍÓÚñ]+$/
        if (nombre.value.length < 3 || !soloLetra.test(nombre.value)) {
            showErrNom()
        } else {
            regOk++
        }
    }

    function valApe () {
        var soloLetra = /^[ a-zA-ZáéíóúÁÉÍÓÚñ]+$/
        if (apellido.value.length < 3 || !soloLetra.test(apellido.value)) {
            showErrApe()
        } else {
            regOk++
        }
    }

    function valEmail () {
        var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if (!emailRegex.test(email.value)) {
            showErrMail()
        } else {
            regOk++
        }
    }

    function valEdad () {
        var soloNro = /^[0-9]+$/
        if (edad.value < 1 || edad.value > 100 || !soloNro.test(edad.value)) {
            showErrEdad()
        } else {
            regOk++
        }
    }

    function valSexoVacio () {
        if(!document.querySelector('input[name="sexo"]:checked')) {
            showErrSexo()
        } else {
            remErrSexo()
            regOk++
        }
    }

    function valIntVacio () {
        if(!intMus.checked && !intDep.checked && !intJue.checked && !intTec.checked && !intTemOtro.checked) {
            showErrInt()
        } else {
            remErrInt()
            regOk++
        }
    }

    function valPais () {
        if (pais.value == "") {
            showErrPais()
        } else {
            remErrPais()
            regOk++
        }
    }

    function verifTodo () {
        regOk = 0
        valNom()
        valApe()
        valEmail()
        valEdad()
        valSexoVacio()
        valIntVacio()
        valPais()
        if (regOk == 7) {
            openModal()
        }
    }

    function openModal () {
        modal.style.display = "block";
    }
}