var videos = [
    {
        "id": 65432445,
        "title": "The Chamber"
    },
    {
        "id": 675465,
        "title": "Fracture"
    },
    {
        "id": 70111470,
        "title": "Die Hard"
    },
    {
        "id": 654356453,
        "title": "Bad Boys"
    }
];

var res = videos.reduce((acc, vid) => {
    var obj = {}
    obj[vid.id] = vid.title
    		// Object.assign() takes all of the enumerable properties from
		// the object listed in its second argument (obj) and assigns them
		// to the object listed in its first argument (accumulatedMap).
    return Object.assign(acc, obj)
},
		// Use an empty map as the initial value instead of the first item in
		// the list.
{})

console.log(res)