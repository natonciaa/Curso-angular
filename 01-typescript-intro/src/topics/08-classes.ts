export class Person{
    // public name: string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = 'No address'){
        // this.name = name;
        // this.address = address;
    }
}

export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realname: string
    ){
        super(realname,'pastoland');
    }
}

const ironman = new Hero('ironman',45,'guatever');
console.log(ironman);

