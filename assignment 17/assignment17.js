movies = [
	{
		title: "In Brudges" ,
		rating: 5,
		has_watched: true
	},
	{
		title: "Frozen" ,
		rating: 4.5,
		has_watched: false
	},
	{
		title: "Mad Max Fury Road" ,
		rating: 5,
		has_watched: true
	},
	{
		title: "Les Miserables" ,
		rating: 3.5,
		has_watched: false
	}
]
	
movies.forEach (function(obj) {
	if(obj.has_watched === true) {
		console.log("You have watched \"" + obj.title + "\" - " + obj.rating + " stars");
	}
	else {
		console.log("You have not seen \"" + obj.title + "\" - " + obj.rating + " stars");
	}
})