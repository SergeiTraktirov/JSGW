let prt__count = $('.prt__count').html()
//let cena = $('.cena').html()
//let itog = $('.itog').html()

function plus() {
	prt__count++
	$('.prt__count').html(prt__count)
//	$('.itog').html(cena * res)
}

function minus() {
	if (prt__count > 1) {
	prt__count--
	$('.prt__count').html(prt__count)
//	$('.itog').html(cena * res)
	}
}


$('.button_plus').on('click', plus)
$('.button_minus').on('click', minus)
