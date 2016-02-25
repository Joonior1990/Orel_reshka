var async    = require('async'); // добавим немного динамики
var timeout = 1000; // время бросания монетки

// анонимная функция с названием для рекурсивного вызова самой себя
module.exports = function game(rl) {
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
					console.log('Монетка брошена, но что же мы видим?');
					var res = result[1];

					// обработка ответа
					rl.question('Орел(o)/решка(r)?', function(answer) {
						if (answer.toLowerCase() === 'o') {

							if (res === 1) console.log('Зрение тебя все еще не подводит');
							else console.log(str + 'орел тебе показался');
						} 
						if (answer.toLowerCase() === 'r') {

							if (res === 0) console.log('Зрение тебя все еще не подводит');
							else console.log(str + 'решка тебе показалась');
						}

						// приглашение на еще один раунд
						rl.question('Хочешь еще раз проверить остроту своего зрения? y/n', function(answer) { 
							if (answer.toLowerCase() == 'y') {

								game(rl);	// повторный вызов функции
							}
							else {
								console.log('До скорых встреч!');
								rl.close();	
							}
						});
					});
				}, timeout);
			}
		}
	);
}