// Classes
class Developer {
    constructor(name){
        this.name = name;
    }

    hello(){
        return 'Hello World! I am ' + this.name + ' and I am a web developer';
    }
}

var tharun = new Developer('Tharun');
console.log(tharun.hello())

// Inheritance

class ReactDeveloper extends Developer {
    installReact(){
        return 'installing React .. Done.';
    }
}

let tharunReact = new ReactDeveloper('Tharun');
console.log(tharunReact.hello()); // Hello World! I am Tharun and I am a web developer
console.log(tharunReact.installReact()); // installing React .. Done.