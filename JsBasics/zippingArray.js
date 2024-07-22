// Array.zip = function(left, right, combinerFunction) {
// 	var counter,
// 		results = [];

// 	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
// 		results.push(combinerFunction(left[counter],right[counter]));
// 	}

// 	return results;
// };
        

function abc() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		];

	// return Array.
	// 	zip(
	// 	  videos,
	// 	  bookmarks,
	// 	  function(video, bookmark) {
	// 		return {videoId: video.id, bookmarkId: bookmark.id};
    // 	  });
    return [videos, bookmarks].map((data) => {
        return {videoId: data[0].id, bookmarkId: data[1].id}
    })
}

console.log(abc())

// [
//     { videoId: 70111470, bookmarkId: 470 },
//     { videoId: 654356453, bookmarkId: 453 },
//     { videoId: 65432445, bookmarkId: 445 }
//   ]