/* VALIDACION DEL FORMULARIO: */



var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    mensaje = formulario.mensaje,
    actividad = formulario.actividad,
    terminos = formulario.terminos,
    error = document.getElementById('error');

    function validarNombre(e){
      if(nombre.value == '' || nombre.value == null){
        alert('Por favor completa el campo Nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el campo Nombre</li>'; // el += es para sumarle un elemento sin borrar el anterior

        e.preventDefault(); // para no enviar los datos del formulario.
      } else {
        error.style.display = 'none';
      }
    }

    function validarCorreo(e){
      if(correo.value == '' || correo.value == null){
        alert('Por favor completa el campo Correo');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el campo Correo</li>'; // el += es para sumarle un elemento sin borrar el anterior

        e.preventDefault(); // para no enviar los datos del formulario.
      } else {
        error.style.display = 'none';
      }
    }

    function validarMensaje(e){
      if(correo.value == '' || correo.value == null){
        alert('Por favor completa el campo Mensaje');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el campo Mensaje</li>'; // el += es para sumarle un elemento sin borrar el anterior

        e.preventDefault(); // para no enviar los datos del formulario.
      } else {
        error.style.display = 'none';
      }
    }

    function validarActividad(e){
      if(actividad.value == '' || actividad.value == null){
        alert('Por favor escoja una de las actividades');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor escoja una de las actividades</li>'; // el += es para sumarle un elemento sin borrar el anterior

        e.preventDefault(); // para no enviar los datos del formulario.
      } else {
        error.style.display = 'none';
      }
    }

    function validarTerminos(e){
  		if (terminos.checked == false){
  			alert('Por favor acepta los terminos');
  			error.style.display = 'block';
  			error.innerHTML += '<li>Por favor acepta los terminos</li>';

  			e.preventDefault();
  		} else {
  			error.style.display = 'none';
  		}
  	}
    function validarFormulario(e){
      error.innerHTML = "";
      validarNombre(e);
      validarCorreo(e);
      validarMensaje(e);
      validarActividad(e);
      validarTerminos(e);
    }

formulario.addEventListener('submit', validarFormulario);
