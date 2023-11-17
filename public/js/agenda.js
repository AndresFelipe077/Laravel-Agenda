document.addEventListener('DOMContentLoaded', function () {

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

})