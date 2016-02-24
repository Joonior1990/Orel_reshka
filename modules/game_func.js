var async    = require('async'); // добавим немного динамики
var readline = require('readline');
var rl       = readline.createInterface({
	input  : process.stdin, 
	output : process.stdout
});

var timeout = 1000; // время бросания монетки

module.exports = function game() { // анонимная функция с названием для рекурсивного вызова самой себя
	async.series(
		[
			function(callback) {
				setTimeout(function() {
					console.log('Замахиваемся при броске');
					callback();
				}, timeout);
			},
			function(callback) {
				setTimeout(function() {
					for(var i = 0; i < 3; i++) console.log();
					console.log('Бросаем монетку');
					callback( null, Math.round( Math.random() ) );
				}, timeout * 1.5);
			}
		],
		function(err, result) {
			if (err) {
				throw err; // условная обработка ошибки, хотя тут ее быть не может
			} else {


				var str = 'Все как в тумане, но поднося монетку поближе к глазам, ты с удивлением видишь, что ';
				setTimeout(function() {
					for(var i = 0; i < 3; i++) console.log();
					console.log('Монетка брошена, но что же мы видим?');
					var res = result[1];
					console.log(res);

					rl.question('Орел(o)/решка(r)?', function(answer) {
						if (answer.toLowerCase() === 'o') {
							for(var i = 0; i < 3; i++) console.log();
							if (res === 1) console.log('Зрение тебя все еще не подводит');
							else console.log(str + 'орел тебе показался');
						} 
						if (answer.toLowerCase() === 'r') {
							for(var i = 0; i < 3; i++) console.log();
							if (res === 0) console.log('Зрение тебя все еще не подводит');
							else console.log(str + 'решка тебе показалась');
						}

						rl.question('Хочешь еще раз проверить остроту своего зрения? y/n', function(answer) {
							if (answer.toLowerCase() == 'y') {
								for(var i = 0; i < 50; i++) console.log();

								game();	// повторный вызов функции
							}
							else {
								for(var i = 0; i < 50; i++) console.log();
								console.log('До скорых встреч!');
								for(var i = 0; i < 5; i++) console.log();
								rl.close();	
							}
						});
					});
				}, timeout);
			}
		}
	);
}