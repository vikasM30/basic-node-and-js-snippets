	var boxarts = [{
	        width: 200,
	        height: 200,
	        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
	    },
	    {
	        width: 150,
	        height: 200,
	        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
	    },
	    {
	        width: 300,
	        height: 200,
	        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
	    },
	    {
	        width: 425,
	        height: 150,
	        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
	    }
	]

	var largestBoxart = boxarts.reduce((acc, curr) => (acc.width * acc.height > curr.width * curr.height) ? [acc] : [curr], 0)
	    .map((boxart) => boxart);
	console.log(largestBoxart);

	var ratings = [2, 3, 1, 4, 5];
	var ll = ratings.reduce((acc, curr) => {
	    return {
	        val: Math.max(curr),
	        atIndex: ratings.indexOf(Math.max(curr)),
	    }
	});
    console.log(ll)
    
    let swap = [
        {a: 1},
        {b: 2}
    ];

    let k = swap.reduce((prev, curr, swap) => {
        var temp = prev.a
        curr.a = curr.b
        curr.b = temp
        return curr
    })
    console.log(k)
    