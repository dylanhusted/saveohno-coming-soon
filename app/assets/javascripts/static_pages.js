$(document).ready(function() {
    /* $('.floating-display').resizable(); */
    $('.floating-display').draggable();
    $('#fingerprint').hide();
    $('#access-granted').hide();
    $('#who-is-ohno').hide();
    $('#what-is-saveohno').hide();
    $('#stay-updated').hide();
    $('#who-is-ohno-line1').hide();
    $('#who-is-ohno-line2').hide();
    $('.ohno').hide();
    $('.ohno-sad').hide();
    $('.ohno-sad').animate({width: "60"});
    $('#what-is-saveohno-line1').hide();
    $('#what-is-saveohno-line2').hide();
    $('#what-is-saveohno-line3').hide();
    $('.ohno-neutral').hide();

    $('#hub-start').unbind('click');
	$('#hub-start')
	.button()
	.click(function () {
    	$('#fingerprint').fadeIn('fast').delay(100).fadeOut('slow');
    	$('#access-granted').delay(900).fadeIn('slow');
    	$('#who-is-ohno').delay(900).fadeIn('slow');
    	$('#what-is-saveohno').delay(900).fadeIn('slow');
    	$('#stay-updated').delay(900).fadeIn('slow');
    });

    $('#who-is-ohno').unbind('click');
    $('#who-is-ohno')
    .button()
    .click(function () {
        $('#what-is-saveohno-line2').stop();
        $('#what-is-saveohno-line3').stop();
        $('#what-is-saveohno-line1').hide();
        $('#what-is-saveohno-line2').hide();
        $('#what-is-saveohno-line3').hide();
        $('.ohno-neutral').hide();
        $("#what-is-saveohno").prop("onclick", false);

        $('#who-is-ohno-line1').fadeIn('slow');
        $('.ohno').fadeIn('slow');
        $('#who-is-ohno-line1').delay(1300).fadeOut('slow');
        $('.ohno').delay(1300).fadeOut('slow');
        $('#who-is-ohno-line2').delay(2840).fadeIn('slow');
        $('.ohno-sad').delay(2840).fadeIn('slow');
    });

    $('#what-is-saveohno').unbind('click');
    $('#what-is-saveohno')
    .button()
    .click(function () {
        $('#who-is-ohno-line2').stop();
        $('#what-is-saveohno-line2').stop();
        $('#what-is-saveohno-line3').stop();
        $('#who-is-ohno-line1').hide();
        $('#who-is-ohno-line2').hide();
        $('#what-is-saveohno-line1').hide();
        $('#what-is-saveohno-line2').hide();
        $('#what-is-saveohno-line3').hide();
        $('.ohno').hide();
        $('.ohno-sad').hide();
        $('ohno-neutral').hide();

        $('#what-is-saveohno-line1').fadeIn('slow').delay(3500).fadeOut('slow');
        $('#what-is-saveohno-line2').delay(4700).fadeIn('slow').delay(7200).fadeOut('slow');
        $('#what-is-saveohno-line3').delay(13000).fadeIn('slow');
        $('.ohno-neutral').delay(13000).fadeIn('slow');
    });
});