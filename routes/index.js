var feed = require('../models/feed.js');

module.exports = function (app){
  app.get('/',function (req, res){
    res.render('index', { title: 'Node Graber' });
  });

  app.get('/sample',function (req, res){
    res.render('sample', { title: 'Node Graber' });
  });

  app.get('/find', function (req, res){
  	res.render('find', { title: 'Find Keyword'});
  });
  app.post('/find', function (req, res){
  	var keyword = req.body.keyword;
  	feed.findByKeyword(keyword, function (data) {
  		res.send(data);
  	});
  });

  app.get('/load', function (req, res){
  	//res.render('load', { title: 'Load Feed'});
  	var url = "";
  	feed.loadByURL(url, function (data) {
  		res.render('load', {
  			title: 'Load Feed',
  			feeds: data
  		});
  	});
  });
};