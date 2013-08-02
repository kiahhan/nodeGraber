var request = require('request'),
	settings = require('../settings');


exports.findByKeyword = function (keyword, callback) {
	var findFeedURL = settings.googleFindFeed + "?v=1.0&q=" + keyword;

	request(findFeedURL, function (err, response, data) {
		if(!err && response.statusCode == 200){
			var body = JSON.parse(data.toString());
			callback(body);
		}
	});
}


exports.loadByURL = function (url, callback) {
	var loadFeedURL = settings.googleLoadFeed + "?v=1.0&num=20&q=" + settings.feedURL;
	request(loadFeedURL, function (err, response, data) {
		if(!err && response.statusCode == 200){
			var body = JSON.parse(data.toString());
			callback(body);
		}
	});
}