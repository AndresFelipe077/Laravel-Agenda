document.addEventListener('DOMContentLoaded', function () {

  let formulario = document.getElementById("formEvento"); // change querySelector to getElementById for problems with other form logout

  var calendarEl = document.getElementById('agenda');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: "es",

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },

    events: "http://127.0.0.1:8000/eventos/mostrar",

    dateClick: function (info) { // show modal

      formulario.reset();

      formulario.start.value = info.dateStr
      formulario.end.value   = info.dateStr

      $("#evento").modal("show");
    },

    eventClick: function(info){

      var evento = info.event;
      console.log(evento);

      axios.post('http://127.0.0.1:8000/eventos/edit/' + info.event.id).
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
    sendData("http://127.0.0.1:8000/eventos");
  });

  document.getElementById('btnEliminar').addEventListener("click", function() {
    
    sendData("http://127.0.0.1:8000/eventos/eliminar/" + formulario.id.value);

  });


  function sendData(url) {

    const datos = new FormData(formulario);

    axios.post(url, datos).
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