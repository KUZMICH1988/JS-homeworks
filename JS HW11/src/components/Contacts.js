class Contacts {
    #data = [];
    #lastId = 0;

    add = function(contactData = {}) {
        if (!contactData || contactData.name.length == 0 || (contactData.phone.length == 0 && contactData.email.length == 0 && contactData.address.length == 0))
        return;

        const user = new User(contactData.name, 
        contactData.email,
        contactData.address,
        contactData.phone    
        );

        if (!user) return;

        this.#lastId++;
        user.id = this.#lastId;

        this.#data.push(user);
        
    }

    edit = function(id, userData = {}) {
        if (!id) return;

        let user = this.#data.find(function(item) {
            return item.id == id;
        });

        if (!user) return;

        user.edit(userData);
        
    }

    remove = function(id) {
        if (!id) return;

        let dataTmp = [];

        dataTmp = this.#data.filter(function(item) {
            return item.id != id;
        });

        this.#data = dataTmp;
        
    }

    get = function(print = false) {
        let dataTmp = [];

        switch (print) {
            case 1:
                this.#data.forEach(function(item) {
                    dataTmp.push(item.get());
                });
            break;
            default:
                dataTmp = this.#data;
        }

        return dataTmp;
        
    }
}

// const contacts = new Contacts();

// console.log(contacts);

// contacts.edit(1,{name: "Serg",
// email: "www@gmail.com",
// address: "Minsk",
// phone: "+375293336699"});

// contacts.remove(1);

// console.log(contacts.get());