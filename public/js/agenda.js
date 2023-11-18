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

    dateClick: function (info) { // show modal
      $("#evento").modal("show");
    }

  });

  calendar.render();

  document.getElementById('btnGuardar').addEventListener("click", function() {
    const datos = new FormData(formulario);

    console.log(datos);

    axios.post("http://127.0.0.1:8000/evento", datos).
      then(
        (respuesta) => {
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