var movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ]
    },
    {
        name: "Thrillers",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
                    { width: 100, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture100.jpg" },
                    { width: 190, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture190.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id:432534, time:65876586 }]
            }
        ]
    }
];

var res = movieLists.map((movies) => {
    return movies.videos.map((video) => {
        return video.boxarts.reduce((acc, curr) => {
            (acc[0] == undefined) ? acc = acc : acc = acc[0]
			if (acc.width * acc.height < curr.width * curr.height) {
                return [acc];
              }
              else {
                return [curr];
              }
    })
        .map((mapData) => {
            return {
                id: video.id,
                title: video.title,
                url: mapData.url,
                videoSize: (mapData.width * mapData.height) 
            }
        })
    })
    .reduceRight((prev, curr) => {
        return curr.concat(prev)
    })
})
.reduceRight((prev, curr) => {
    return curr.concat(prev)
})
console.log(res)