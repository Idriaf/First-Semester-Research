var twit = require('twitter'),
	twitter = new twit({
		consumer_key: 'GIWQftqJiuaRwfqZIV8nIeMFf',
		consumer_secret: 'Df0d6Cs5wVPVfe929XYXj3TdWxIAI9ePMqdRoyZvnWqfYZu43V',
		access_token_key: '3356957645-VxXBpgQ1y9PSlCHlKzrVn7w3wvmtN9DAwcaGYR9 ',
		access_token_secret:'Q5VkdatXroTPlWrtLLtLDU6gubUI42fgapuA1Gbl9uUL',

	});


	
var count = 0,
	util = require('util');

twitter.stream('filter', {track: 'love'}, function(stream){
	stream.on('data', function(data){
		console.log(util.inspect(data));
		stream.destroy();

	})

});