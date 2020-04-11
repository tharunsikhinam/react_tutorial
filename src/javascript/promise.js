import axios from 'axios'
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// javascript runs  a single thread


// callback hell
// function foo3(){
//     // modifies some element on the UI
// }
// function foo2(){
//     http.get(" ", foo3())
// }
//
// let a =  1 + 2
// foo()
//
// // async function - api calls, db connections, cache, queue,
// http.get("twitter.com/getTweets", foo2(foo3()))
//
// foo2()

//Promises
//two states
// pending during the operation
// fulfilled on success
// rejected on failure

let promise = new Promise((resolve,reject)=>{
    console.log("promise started")
    try {
        let temp = 1 / 0;
        throw new Error("ERROR")
        //resolve(temp);
    }
    catch(error){
        reject(error)
    }
});

promise.then((results)=>{
    console.log("promise fulfilled")
    console.log(results)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{

});

// make a dummy API call


