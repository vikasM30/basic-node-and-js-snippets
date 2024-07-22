	var newReleases = [{
	            "id": 70111470,
	            "title": "Die Hard",
	            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	            "rating": [4.0],
	            "bookmark": []
	        },
	        {
	            "id": 654356453,
	            "title": "Bad Boys",
	            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	            "rating": [5.0],
	            "bookmark": [{
	                id: 432534,
	                time: 65876586
	            }]
	        },
	        {
	            "id": 65432445,
	            "title": "The Chamber",
	            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	            "rating": [4.0],
	            "bookmark": []
	        },
	        {
	            "id": 675465,
	            "title": "Fracture",
	            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	            "rating": [5.0],
	            "bookmark": [{
	                id: 432534,
	                time: 65876586
	            }]
	        }
	    ],
	    videoAndTitlePairs = [];

	newReleases.forEach((arr) => {
	    if (arr.rating == 5.0) {
	        videoAndTitlePairs.push(arr);
	    }
	    // videoAndTitlePairs.push({
	    //     id: arr.id,
	    //     title: arr.title
	    // });
	})
	console.log(videoAndTitlePairs)
	var s = newReleases
	    .filter((task) => {
	        return task.rating == 5.0
	    })
	    .map((task) => {
	        return {
	            id: task.id,
	            title: task.title
	        }
	    })
	console.log(s)

	newReleases.filter((arr) => {
	    return arr.rating == 5.0
	}).map((arr) => {
	    return {
	        id: arr.id
	    }
	})