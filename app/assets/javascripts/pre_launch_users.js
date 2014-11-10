$(document).ready(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('header').addClass('importantHeight');
        $('.perk').css('width', '82.75%');
        $('.perk-small').css('height', '450px');
        $('.perk-med').css('height', '535px');
        $('.perk-big').css('height', '575px');
        $('.perk-huge').css('height', '610px');
        $('.perk-img').css('width', '10%');
        $('.spacing').html();
        $('.perk').css('font-size', '1.75em');
        $('.not-perk').css('font-size', '1.25em');
    }

	$('.overlay2').hide();
	$('.new-user-form').hide();

	$('.perk').click(function() {
		$('.overlay2').fadeIn('slow');
	});

	$('.not-perk').click(function() {
		$('.overlay2').fadeIn('slow');
	});

	$('.button-yes').click(function() {
		$('.select-question').fadeOut('fast');
		$('.new-user-form').fadeIn('slow');
	});

	$('.button-no').click(function() {
		$('.overlay2').fadeOut('slow');
	});

	$('.button-close').click(function() {
		$('.new-user-form').hide();
		$('.select-question').show();
	});
});