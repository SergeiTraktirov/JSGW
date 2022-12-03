let res = $('.res').html()
function plus() {
	res++
	$('.res').html(res)
}
$('.button_plus').on('click', plus)