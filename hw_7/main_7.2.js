function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Vasyl', 'Pylypiv', 'pylyp@js.com', '+380509574122'),
    new User(2,'Ivan', 'Fil', 'fil_ivan@gmail.com', '+380735489563'),
    new User(3, 'Andrii', 'Mysak', 'super55@i.ua', '+380975238745'),
    new User(4, 'Nadiia', 'Klym', 'klymyk@yaxoo.com', '+380953578951'),
    new User(5, 'Taras', 'Slymak', 'mushlia@usa.com)', '+380936549832'),
    new User(6, 'Yuriy', 'Lampa', 'svitlo@ukr.net', '+380672589631'),
    new User(7, 'Roman', 'Bigun', 'swirce@ukr.net', '+380984127586'),
    new User(8, 'Lidiya', 'Cymba', 'cymbaly@gmail.com', '+380675896321'),
    new User(9, 'Orest', 'Meleshko', 'koral458@i.ua', '+380997258461'),
    new User(10, 'Iryna', 'Kypyatok', 'buh@temp.ua', '+380509764592'),
];

const filterIdUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterIdUsers);