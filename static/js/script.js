$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('input[type="checkbox"]').on('change', function(e){
    if(e.target.checked){
      $('#issue').modal();
    }
 });

$('#inputDate,#inputDate2').datepicker({
    language:"zh-CN", 
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
    format:"yyyy-mm-dd"
});

$(document).ready(function() {

  $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().addClass('active');
  });

  $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().removeClass('active');
  });

});