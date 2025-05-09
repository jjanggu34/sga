$(document).ready(function() {
	$('.move_tbl .check_stl').on('change', function() {
		const $tr = $(this).closest('tr');
		if ($(this).is(':checked')) {
			$tr.addClass('checked');
		} else {
			$tr.removeClass('checked');
		}
	});
});