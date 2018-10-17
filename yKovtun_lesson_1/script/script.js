var prNum = Math.floor((Math.random() * 10) +1);

function resultGame() {
	var nam, out;
	num = document.getElementById('mynum').value;
	out = document.getElementById('out');

	if (num == prNum) {
		out.innerHTML = 'конгредюлейшн, ты угадал!!!';
	}
	else if (num > prNum) {
		out.innerHTML = 'ооо, слишком большое число, попробуй меньше)';
	}
	else {
		out.innerHTML = 'хм, попробуйте ввести число побольше)';
	}
}