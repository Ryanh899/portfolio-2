
$(function() {
    setTimeout(function () {
        $('.sequenced.name')
        .transition({
            animation : 'fade',
            reverse   : 'false', // default setting
            duration: 1500, 
            interval  : 2000
        });
    }, 300); 
});

$('.ui.sticky')
  .sticky({
    context: '#page-container'
  }); 

$('#vision-card').on('click', function () {
    $('.ui.modal.vision')
        .modal('show'); 
})

$('#books-card').on('click', function () {
    $('.ui.modal.books')
        .modal('show'); 
})

$('#brew-card').on('click', function () {
    $('.ui.modal.brew')
        .modal('show'); 
})

$('.menu .item')
  .tab()
;

