abstract class ZooAnimal {
    public name: string;
    readonly id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

    abstract makeSound(): string;

    getInfo():string {
        return `${this.name} (#${this.id})`
    }
}
class Lion extends ZooAnimal {
    static totalLions = 0;

    constructor(name: string, id: number, private hungerLevel: number) {
        super(name, id);
        Lion.totalLions++;
    }

    makeSound(): string {
        return "Roar!!"
    }

    getInfo(): string {
        return `${super.getInfo()} is a lion`;
    }
}
class Elephant extends ZooAnimal {
    constructor(name: string, id: number, protected trunkLength: number) {
        super(name, id);
    }
    makeSound(): string {
        return "Trumpet"
    }
}
const l1 = new Lion("Leo", 123, 4);
const l2 = new Lion("Ozzy", 124, 5);
const e1 = new Elephant("Johny", 125, 34);
console.log(l1.getInfo(), l1.makeSound());
console.log(l2.getInfo(), l2.makeSound());
console.log(e1.getInfo(), e1.makeSound());


