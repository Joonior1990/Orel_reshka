var game = require('./modules/game_func'); // модуль с правилами игры
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin, 
	output: process.stdout
});

console.log('Я хочу сыграть с тобой в одну игру...');

rl.question('Введите "y" - для начала игры "Орел или решка"!', function(answer) {
	if (answer.toLowerCase() === 'y') {
		game(rl); // передаем функции readline для его дальнейшего использования
	} else {
		console.log('До скорых встреч!');
		rl.close();
	}
});