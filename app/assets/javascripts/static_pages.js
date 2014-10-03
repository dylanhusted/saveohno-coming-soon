$(document).ready(function() {
    /* $('.floating-display').resizable(); */
    $('.floating-display').draggable();
    $('#fingerprint').hide();
    $('#access-granted').hide();
    $('#who-is-ohno').hide();
    $('#how-can-i-help').hide();
    $('#stay-updated').hide();

    $('#hub-start').unbind('click');
	$('#hub-start')
	.button()
	.click(function () {
    	$('#fingerprint').fadeIn('fast').delay(100).fadeOut('slow');
    	$('#access-granted').delay(900).fadeIn('slow');
    	$('#who-is-ohno').delay(900).fadeIn('slow');
    	$('#how-can-i-help').delay(900).fadeIn('slow');
    	$('#stay-updated').delay(900).fadeIn('slow');
    });
}); 