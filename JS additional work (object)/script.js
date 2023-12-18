let Contacts = function (name, phone, email) {

    this.name = name;
    this.phone = phone;
    this.email = email;

    this.inform = function () {
        console.log(`${this.name} (${this.email}), ${this.phone}`);
        document.write(`<li><strong> ${this.name} 
        </strong>: <a href="mailto:${this.email}">Написать письмо</a>
        </strong> <a href="tel:${this.phone}">Позвонить</a></li>`)

    }; 




}

let contact1 = new Contacts('Ben', '+375338996633', 'ertp@gmail.com');
let contact2 = new Contacts('Alex', '+375338996622', 'pppp@gmail.com');
let contact3 = new Contacts('Mike', '+375338996611', 'oooo@gmail.com');
let contact4 = new Contacts('ola', '+375338996600', 'rrrr@gmail.com');
let contact5 = new Contacts('IRA', '+375330000000', 'ira@gmail.com');

console.log(contact1);

contact1.inform();
contact2.inform();


let arr =[];

arr.push(contact1,contact2,contact3);

console.log(arr);


function addContacts(contactName) {
    arr.push(contactName);
    
}

addContacts(contact4);
console.log(arr);


let MyContacts = function () {
    this.arr = arr;

    this.add = function (contactName) {
        arr.push(contactName);   
    }

    this.show = function(){
        arr.forEach(function(elem){
console.log(elem);
        });
    }
 
}

let mycontact = new MyContacts();
mycontact.add(contact5);

mycontact.show();





let Contact = {
    name: "Alex",
    phone: "+375298885566",
    email: "fgh@gmail.com",

    inform: function () {
        console.log(this.name + '('+ this.email + '),' + this.phone) 
        document.write(`<li><strong> ${this.name} 
        </strong>: <a href="mailto:${this.email}">Написать письмо</a>,
        <a href="tel:${this.phone}">Позвонить</a></li>`)

    }


}

// Contact.inform()