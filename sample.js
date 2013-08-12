var request = require('request');
var http = require('http');

var googleFindFeed = "https://ajax.googleapis.com/ajax/services/feed/find";
var googleLoadFeed = "https://ajax.googleapis.com/ajax/services/feed/load"

var findKeyword = "Official Google Blogs";
var feedURL = "http://36kr.com/feed";

http.createServer(function (req, res) {

	var findFeedURL = googleFindFeed + "?v=1.0&q=" + findKeyword;

	request(findFeedURL, function (err, response, data) {
		if(!err && response.statusCode == 200){
			res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});

			var body = JSON.parse(data.toString());
			res.write(body.responseData.query + '<p/>');
			for (var i = 0; i < body.responseData.entries.length; i++) {
				res.write(body.responseData.entries[i].title + '<br/>');
			};
			res.end();
		}
	});
}).listen(8000);

console.log("Server has been started on PORT 8000.")
