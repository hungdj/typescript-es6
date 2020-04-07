class Person{
    constructor(name){
        this.name = name;
        console.log(this.name + " constructor.");
    }

    static talk(){
        console.log('This static method is talk');
    }

    run(){
        console.log('Person is running...');
    }
}

let p = new Person('Tedu'); 
p.run();

Person.talk();