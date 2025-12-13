function handleData(items) {
    return items.map(function (item) {
        switch (item.type) {
            case "user":
                return "Welcome ".concat(item.name, "! You are ").concat(item.age, " years old.");
            case "order":
                return "Your order ID is ".concat(item.orderId, " and the total amount is ").concat(item.amount);
            case "product":
                return "Your product ID is ".concat(item.id, " and its price is ").concat(item.price);
            default:
                var unknown = item;
                return unknown;
        }
    });
}
var myOrder = {
    type: "order",
    orderId: "12345",
    amount: 23,
};
var myProduct = {
    type: "product",
    id: 55655,
    price: 100,
};
var myUser = {
    type: "user",
    name: "Fransheska",
    age: 35,
};
var myArray = [myOrder, myProduct, myUser];
console.log(handleData(myArray));
