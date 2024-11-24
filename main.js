$(document).ready(function () {
    // Activar los eventos del modal
    $('#exampleModal').on('show.bs.modal', function () {
        console.log('Modal está abriéndose');
        $('#openModalButton').prop('disabled', true).css('background-color', '#ccc');
    });

    $('#exampleModal').on('shown.bs.modal', function () {
        console.log('Modal se abrió completamente');
    });

    $('#exampleModal').on('hide.bs.modal', function () {
        console.log('Modal está cerrándose');
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
        console.log('Modal se cerró completamente');
        $('#openModalButton').prop('disabled', false).css('background-color', '#007bff');
    });
});
