let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const bta = document.querySelector('adicionar');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (count >=0) {
        document.getElementById('currentNumber').style.color="black";

    }
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (count <=-1) {
        document.getElementById('currentNumber').style.color="red";
    }
}

function test() {
	kdowkdpo;
}

    