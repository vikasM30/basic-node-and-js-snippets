// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/playground')
// .then(() => console.log('connected to mongodb...'))
// .catch((err) => console.log('could not connect to mongodb...', err))

// const courseSchema = new mongoose.Schema({
//     name: String,
//     author: String,
//     tags: [String],
//     date: { type: Date, default: Date.now},
//     isPublished: Boolean
// })

// const Course = mongoose.model('Course', courseSchema)

// async function createCourse() {
//     const course = new Course({
//         name: 'demo course 2',
//         author: 'def',
//         tags: ['node', 'mongo'],
//         isPublished: true
//     })

//     const result = await course.save()
//     console.log(result)
// }

// async function getCourses() {
//     const courses = await Course
//     .find()
//     // .find({ author: 'abc', isPublished: true})
//     // .find({price: {$gte: 10, $lte: 20}}) // between 10 and 20
//     // .find({price: {$in: [10,20,30]}}) // price is either 10 or 20 or 30
//     // .or([{author: 'abc'}, {isPublished: true}])
//     // .and([{author: 'abc'}, {isPublished: true}])
//     // .find({author: /^Vikas/}) // Starts with Vikas
//     // .find({author: /Vikas$/i}) // ends with Vikas
//     // .find({author: /.*Vikas.*/i}) // contains Vikas
//     .limit(10)
//     .sort({name: 1})
//     .count()
//     // .count({ author: 'abc' }, function(err, result) {
//     //     if (err) {
//     //       throw err;
//     //     } else {
//     //       console.log(result)
//     //     }
//     //   })
//     .select({ name: 1})

//     console.log(courses)
// }

// async function getCoursesPagination() {
//   const pageNumber = 2
//   const pageSize = 10

//   const courses = await Course
//   .find()
//   .skip((pageNumber - 1) * pageSize)
//   .limit(pageSize)
//   .sort({ name: 1})
//   .select({ name: 1})
//   console.log(courses)
// }

// // update course (Query First), used if we get input from client and insure that update is a valid operation
// async function updateDocumentqueryfirst(id) {
//   const course = await Course.findById(id)
//   if (!course) return
//   course.set({
//     isPublished: false,
//     author: 'Updated Author 1'
//   })
//   const result = await course.save()
//   console.log(result)
// }
// // getCourses()
// // createCourse()
// // getCoursesPagination()
// // updateDocumentqueryfirst('5f0fb49ce96a0f2b74238ff0')
// function foo(outer_arg) { 
  
//   return function(inner_arg) { 
//       return outer_arg + inner_arg; 
//   } 
//   // return inner; 
// } 
// var get_func_inner = foo(5); 
// var get_func_inner1 = foo(5); 

// console.log(get_func_inner(4)); 
// console.log(get_func_inner1(3)); 

// const a =12
// a = '34'
// console.log(a)

var i = 0;
for (i=0; i<10;i++){
  setTimeout(() => {
    console.log(i)
  }, 100);
}