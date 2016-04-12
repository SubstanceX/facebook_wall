$(document).ready(function() {
	$("#post-btn").click(function() {

		var message = '<br><div class="row"><div class="col-md-2"><img src="http://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg" width="75px" class="fb"><h3> Wensael Jean Marie</h3><img src="http://cdn.bgr.com/2016/03/clash-royale.jpg" width="720px"></div><div class="col-md-10">';
		message += $('#message').val().trim();
		message += '<div></div>';
		$("#wall").prepend(message);
	});
});