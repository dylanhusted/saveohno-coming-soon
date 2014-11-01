$(document).ready(function() {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('header').css("height", "12%");
        $('.logo').css("width", "12%");
        $('.points').css("font-size", "55%");
        $('.ohno-sad').css("width", "4%");
        $('.ohno-neutral').css("width", "5%");
        $('.ohno-tornado').css("width", "10%");
        $('.who-is-ohno-content').css("font-size", "1.5em");
        $('.what-is-saveohno-content').css("font-size", "1.5em");
        $('.stay-updated-content').css("font-size", "1.5em");
        $('#start-here').css("width", "40%");
    }

    /* $('.floating-display').resizable(); */
    $('.floating-display').draggable();
    $('#fingerprint2').hide();
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
    $('.ohno-tornado').hide();
    $('.next-button-wrapper').hide();
    $('.stay-updated-content').hide();
    $('#access-granted').hide();

    $('body').click(function() {
        $('#start-here').hide();
        $('.overlay').fadeOut('slow');
    });

    $('#fingerprint').unbind('click');
	$('#fingerprint')
	.button()
	.click(function () {
    	$('#fingerprint2').fadeIn('slow').delay(150).fadeOut('slow');
        $('#fingerprint').fadeOut('fast');
    	$('#access-granted').delay(900).fadeIn('slow');
        $('#hub-start').delay(900).fadeOut('slow');
    	$('#who-is-ohno').delay(900).fadeIn('slow');
    	$('#what-is-saveohno').delay(900).fadeIn('slow');
    	$('#stay-updated').delay(900).fadeIn('slow');
    });

    $('#who-is-ohno').unbind('click');
    $('#who-is-ohno')
    .button()
    .click(function () {
        $('#who-is-ohno-line2').stop();
        $('#what-is-saveohno-line2').stop();
        $('#what-is-saveohno-line3').stop();
        $('.next-button-wrapper').stop();
        $('.ohno-sad').stop();
        $('.ohno').stop();
        $('#who-is-ohno-line1').hide();
        $('#who-is-ohno-line2').hide();
        $('.ohno-sad').hide();
        $('.ohno').hide();
        $('#what-is-saveohno-line1').hide();
        $('#what-is-saveohno-line2').hide();
        $('#what-is-saveohno-line3').hide();
        $('.ohno-neutral').hide();
        $('.ohno-tornado').hide();
        $('.next-button-wrapper').hide();
        $("#what-is-saveohno").prop("onclick", false);
        $('.stay-updated-content').hide();
        $('.next-button-wrapper').hide();

        $('#who-is-ohno-line1').fadeIn('slow');
        $('.ohno').fadeIn('slow');
        $('#who-is-ohno-line1').delay(1300).fadeOut('slow');
        $('.ohno').delay(1300).fadeOut('slow').css("margin-top", "0.8%");
        $('#who-is-ohno-line2').delay(2840).fadeIn('slow');
        $('.ohno-sad').delay(2840).fadeIn('slow').css("margin-top", "0.8%");
    });

    $('#what-is-saveohno').unbind('click');
    $('#what-is-saveohno')
    .button()
    .click(function () {
        $('#who-is-ohno-line2').stop();
        $('#what-is-saveohno-line2').stop();
        $('#what-is-saveohno-line3').stop();
        $('.ohno-sad').stop();
        $('.ohno-neutral').stop();
        $('.ohno-tornado').hide();
        $('#who-is-ohno-line1').hide();
        $('#who-is-ohno-line2').hide();
        $('#what-is-saveohno-line1').hide();
        $('#what-is-saveohno-line2').hide();
        $('#what-is-saveohno-line3').hide();
        $('.ohno').hide();
        $('.ohno-sad').hide();
        $('.ohno-neutral').hide();
        $('.stay-updated-content').hide();

        $('#what-is-saveohno-line1').fadeIn('slow').delay(3500).fadeOut('slow');
        $('.ohno-tornado').fadeIn('slow').delay(3500).fadeOut('slow');
        $('#what-is-saveohno-line2').delay(4700).fadeIn('slow');
        $('.next-button-wrapper').delay(4700).fadeIn('slow');
    });
    $('#next-button').unbind('click');
    $('#next-button')
    .button()
    .click(function () {
        $('#what-is-saveohno-line2').fadeOut('slow');
        $('.next-button-wrapper').fadeOut('slow');
        $('#what-is-saveohno-line3').delay(1000).fadeIn('slow');
        $('.ohno-neutral').delay(1000).fadeIn('slow').css("margin-top", "1.5%");
    });

    $('#stay-updated').unbind('click');
    $('#stay-updated')
    .button()
    .click(function () {
        $('#who-is-ohno-line2').stop();
        $('#what-is-saveohno-line2').stop();
        $('#what-is-saveohno-line3').stop();
        $('.ohno-sad').stop();
        $('.ohno-neutral').stop();
        $('.next-button-wrapper').stop();
        $('#who-is-ohno-line1').hide();
        $('#who-is-ohno-line2').hide();
        $('#what-is-saveohno-line1').hide();
        $('#what-is-saveohno-line2').hide();
        $('#what-is-saveohno-line3').hide();
        $('.ohno').hide();
        $('.ohno-sad').hide();
        $('.ohno-neutral').hide();
        $('.ohno-tornado').hide();
        $('.next-button-wrapper').hide();

        $('.stay-updated-content').fadeIn('slow');
    });

});




