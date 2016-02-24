var game = require('./modules/game_func');
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin, 
	output: process.stdout
});

for(var i = 0; i < 50; i++) console.log(); // отступы, чтобы ничего не сливалось в кашу
console.log('Я хочу сыграть с тобой в одну игру...');

for(var i = 0; i < 5; i++) console.log();
rl.question('Введите "y" - для начала игры "Орел или решка"!', function(answer) {
	if (answer.toLowerCase() === 'y') {
		for(var i = 0; i < 50; i++) console.log();
		game();
	} else {
  		for(var i = 0; i < 50; i++) console.log();
		console.log('До скорых встреч!');
		for(var i = 0; i < 5; i++) console.log();
		rl.close();
	}
});