var data = require("../data.json");





exports.addFriend = function(req, res) {    
	var newFriend =
		{
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"			
		}

	console.log(data);

	res.render('add', data);
	data['friends'].push(newFriend)
}