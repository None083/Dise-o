$(document).ready(function () {
  // Validación cuando el campo pierde el foco
  $('#nombre').blur(function () {
    if ($(this).val().trim() === '') {
      $('#nombreError').css('visibility', 'visible');
      $('#nombreError').text('Este campo es requerido.');
    } else {
      $('#nombreError').css('visibility', 'hidden');
      $('#nombreError').text('a');
    }
  });

  $('#email').blur(function () {
    if ($(this).val().trim() === '') {
      $('#emailError').css('visibility', 'visible');
      $('#emailError').text('Este campo es requerido.');
    } else {
      $('#emailError').css('visibility', 'hidden');
      $('#emailError').text('a');
    }
  });

  // Inicializar el DatePicker
  $('#fecha').datepicker({
    dateFormat: 'dd/mm/yy'
});

  // Contador de caracteres del mensaje
  $('#mensaje').on('input', function () {
    var mensajeLength = $(this).val().length;
    var remainingChars = 100 - mensajeLength;
    $('#mensajeCount').text('Ha escrito ' + mensajeLength + ' caracteres de 100. Dispone de ' + remainingChars + ' caracteres');
  });

});