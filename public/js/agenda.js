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
    }

  });

  calendar.render();

  document.getElementById('btnGuardar').addEventListener("click", function() {
    const datos = new FormData(formulario);

    console.log(datos);

    axios.post("http://127.0.0.1:8000/eventos", datos).
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

  });

});