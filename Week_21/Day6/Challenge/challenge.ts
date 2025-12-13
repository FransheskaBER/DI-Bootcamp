type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

type Data = User | Product | Order;

function handleData(items: Data[]): string[] {
    return items.map(item => {
        switch (item.type) {
            case "user":
                return `Welcome ${item.name}! You are ${item.age} years old.`;
            case "order":
                return `Your order ID is ${item.orderId} and the total amount is ${item.amount}`;
            case "product":
                return `Your product ID is ${item.id} and its price is ${item.price}`
            default:
                const unknown: never = item;
                return unknown;
        }
    });
}
const myOrder: Order = {
    type: "order",
    orderId: "12345",
    amount: 23,
}
const myProduct: Product = {
    type: "product",
    id: 55655,
    price: 100,
}
const myUser: User = {
    type: "user",
    name: "Fransheska",
    age: 35,
}
const myArray = [myOrder, myProduct, myUser]
console.log(handleData(myArray));
