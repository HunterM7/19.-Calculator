function insert(num) {
	document.form.textview.value = document.form.textview.value + num;
}

function clean() {
	document.form.textview.value = "";
}

function back() {
	let tmp = document.form.textview.value;
	document.form.textview.value = tmp.substring(0, tmp.length - 1)
}

function equal() {
	let tmp = document.form.textview.value;
	if (tmp) {
		document.form.textview.value = eval(tmp);
	}
}