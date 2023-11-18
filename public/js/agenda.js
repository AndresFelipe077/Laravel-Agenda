document.addEventListener('DOMContentLoaded', function () {

  let formulario = document.getElementById("formEvento"); // change querySelector to getElementById for problems with other form logout

  var calendarEl = document.getElementById('agenda');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: "es",
    displayEventTime: false,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth', // 'dayGridMonth,timeGridWeek,listWeek', // si queres le colocas todo esto que hace referencia al mes, semana y hoy
    },

    // events: baseURL + "/eventos/mostrar",

    eventSources: {
      url: baseURL + "/eventos/mostrar",
      method: "POST",
      extraParams: {
        _token: formulario._token.value,
      }
    },

    dateClick: function (info) { // show modal

      formulario.reset();

      formulario.start.value = info.dateStr
      formulario.end.value   = info.dateStr

      $("#evento").modal("show");
    },

    eventClick: function(info){

      var evento = info.event;

      axios.post(baseURL + '/eventos/edit/' + info.event.id).
      then(
        (respuesta) => {

          formulario.id.value          = respuesta.data.id;
          formulario.title.value       = respuesta.data.title;
          formulario.descripcion.value = respuesta.data.descripcion;
          formulario.start.value       = respuesta.data.start;
          formulario.end.value         = respuesta.data.end;

          $("#evento").modal("show");

        }
      ).catch(
        error => {
          if(error.response) {
            console.log(error.response.data);
          }
        }
      )

    }

  });

  calendar.render();

  document.getElementById('btnGuardar').addEventListener("click", function() {
    sendData("/eventos");
  });

  document.getElementById('btnModificar').addEventListener("click", function() {
    
    sendData("/eventos/update/" + formulario.id.value);

  });

  document.getElementById('btnEliminar').addEventListener("click", function() {
    
    sendData("/eventos/eliminar/" + formulario.id.value);

  });


  function sendData(url) {

    const datos = new FormData(formulario);

    const newURL = baseURL + url;

    axios.post(newURL, datos).
      then(
        (respuesta) => {
          calendar.refetchEvents();
          $("#evento").modal("hide");
        }
      ).catch(
        error => {
          if(error.response) {
            console.log(error.response.data);
          }
        }
      )

  }


});