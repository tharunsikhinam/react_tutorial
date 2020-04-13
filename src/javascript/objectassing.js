let obj = {
    key1: "abc",
    key2: { key2_key1: "123", key2_key1_key1: "xyz"},
    key3: "something"
};

let modifiedObj ={
    key1: "bde"
};
// method 1
let newObj = Object.assign({},obj, {key1: "THARUN", key2: {key2_key1: "react", key2_key1_key1: "abc"}})
console.log(newObj)

//
let newObj2 = Object.assign({},obj)

newObj2.key3 = "Something else"