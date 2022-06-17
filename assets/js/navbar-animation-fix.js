$('#menu-cabecalho').on('show.bs.collapse', function () {
    $('.chamada__destaque').css('transform', 'translate(-50%, 10%)')
});
$('#menu-cabecalho').on('hide.bs.collapse', function () {
    $('.chamada__destaque').css('transform', 'translate(-50%, -50%)')
});