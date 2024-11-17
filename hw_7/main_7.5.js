class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Vasyl', 'Pylypiv', 'pylyp@js.com', '+380509574122', [{title: 'TV', price: 16999}, {title: 'Smart-Watch', price: 2199}]),
    new Client(2,'Ivan', 'Fil', 'fil_ivan@gmail.com', '+380735489563', [{title: 'Smartphone', price: 6999}, {title: 'Smartphone Case', price: 499}]),
    new Client(3, 'Andrii', 'Mysak', 'super55@i.ua', '+380975238745', [{title: 'Refrigerator', price: 20999}]),
    new Client(4, 'Nadiia', 'Klym', 'klymyk@yaxoo.com', '+380953578951', [{title: 'Charging Station', price: 11999}]),
    new Client(5, 'Taras', 'Slymak', 'mushlia@usa.com)', '+380936549832', [{title: 'Notebook', price: 25999}, {title: 'Notebook Case', price: 1399}]),
    new Client(6, 'Yuriy', 'Lampa', 'svitlo@ukr.net', '+380672589631', [{title: 'Multicooker', price: 5999}]),
    new Client(7, 'Roman', 'Bigun', 'swirce@ukr.net', '+380984127586', [{title: 'Washing Machine', price: 14499}]),
    new Client(8, 'Lidiya', 'Cymba', 'cymbaly@gmail.com', '+380675896321', [{title: 'Vacuum Cleaner', price: 16999}]),
    new Client(9, 'Orest', 'Meleshko', 'koral458@i.ua', '+380997258461', [{title: 'Electric Kettle', price: 499}, {title: 'Blender', price: 2999}, {title: 'Knife', price: 749}]),
    new Client(10, 'Iryna', 'Kypyatok', 'buh@temp.ua', '+380509764592', [{title: 'Coffee Machine', price: 20999}, {title: 'Iron', price: 3999}]),
];

console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));