var MainMenu = function() {
	this.navLi = $('#main-nav li').children('ul').hide().end();
	this.navLi.hover(function() {
		$(this).find('> ul').stop(true, true).slideDown('slow', 'easeOutBounce');
	}, function() {
		$(this).find('> ul').stop(true, true).hide(); 		
	});
};