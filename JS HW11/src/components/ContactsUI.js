class ContactsUI extends Contacts {

    data = this.get();


    create = function() {
        this.listElem = document.createElement('ul');
        this.listElem.classList.add('contacts__list');
    }


    modalRedact = function(id, data = {}) {

        const modalContactRedactElem = document.createElement('div');
        const modalContactRedactName = document.createElement('input');
        const modalContactRedactEmail = document.createElement('input');
        const modalContactRedactAddress = document.createElement('input');
        const modalContactRedactPhone = document.createElement('input');

        const modalContactRedactBtnSave = document.createElement('button');
        const modalContactRedactBtnCancel = document.createElement('button');

        modalContactRedactElem.setAttribute('class', 'contacts-form-redact');
        modalContactRedactName.setAttribute('name', 'name-field-title');
        modalContactRedactName.setAttribute('placeholder', 'name');
        modalContactRedactEmail.setAttribute('name', 'email-field-title');
        modalContactRedactEmail.setAttribute('placeholder', 'email');
        modalContactRedactAddress.setAttribute('name', 'address-field-title');
        modalContactRedactAddress.setAttribute('placeholder', 'address');
        modalContactRedactPhone.setAttribute('name', 'phone-field-title');
        modalContactRedactPhone.setAttribute('placeholder', 'phone');

        modalContactRedactName.value = data.name;
        modalContactRedactEmail.value = data.email;
        modalContactRedactAddress.value = data.address;
        modalContactRedactPhone.value = data.phone;

        modalContactRedactBtnSave.setAttribute('name', 'contacts-btn-save');
        modalContactRedactBtnCancel.setAttribute('name', 'contacts-btn-cancel');

        modalContactRedactBtnSave.innerHTML = 'Save';
        modalContactRedactBtnCancel.innerHTML = 'Cancel';



        this.listElem.append(modalContactRedactElem);

        modalContactRedactElem.append(
            modalContactRedactName,
            modalContactRedactEmail,
            modalContactRedactAddress,
            modalContactRedactPhone,
            modalContactRedactBtnSave,
            modalContactRedactBtnCancel
        );

        modalContactRedactBtnSave.addEventListener('click', () => {
            
            const newData = {
                name: modalContactRedactName.value,
                email: modalContactRedactEmail.value,
                address:modalContactRedactAddress.value,
                phone: modalContactRedactPhone.value
            }
            
            
            this.onSave(id, newData);
            modalContactRedactElem.remove();  // работает и без него
            console.log(this.get(1));
        
        })
        
        modalContactRedactBtnCancel.addEventListener('click', function(){
                modalContactRedactElem.remove();
        })

    }


    update = function(){

        let data = this.get();

        this.listElem.innerHTML = '';

        data.forEach((item) => {

        let liElem = document.createElement('li');
        let divName = document.createElement('div');
        let divData = document.createElement('div');
        let h3ElemName = document.createElement('h3');
        
        let spanElemEmail = document.createElement('span');
        let spanElemAddress = document.createElement('span');
        let spanElemPhone = document.createElement('span');

        let btnRedact = document.createElement('button');
        let btnDelete = document.createElement('button');

        liElem.setAttribute('class', 'contacts__item');
        divName.setAttribute('class', 'name');
        divData.setAttribute('class', 'data');
        spanElemEmail.setAttribute('class', 'email');
        spanElemAddress.setAttribute('class', 'address');
        spanElemPhone.setAttribute('class', 'phone');

        btnRedact.setAttribute('class', 'contact-btn-red');
        btnDelete.setAttribute('class', 'contact-btn-del');

        liElem.id = item.id;

        btnRedact.innerHTML = '&#10000';
        btnDelete.innerHTML = '&#128465';

        h3ElemName.innerHTML = item.get().name;
        spanElemEmail.innerHTML = item.get().email;
        spanElemAddress.innerHTML = item.get().address;
        spanElemPhone.innerHTML = item.get().phone;

        liElem.append(divName,divData,btnRedact, btnDelete);
        divName.append(h3ElemName);

        if (!spanElemEmail.innerHTML == '') divData.append(spanElemEmail);
        if (!spanElemAddress.innerHTML == '') divData.append(spanElemAddress);
        if (!spanElemPhone.innerHTML == '') divData.append(spanElemPhone);
        
        this.listElem.append(liElem);

        btnRedact.addEventListener('click', () => this.onRedact(item.id));
        btnDelete.addEventListener('click', () => this.onDelete(item.id));

        })

    }


    onSave = (id, newData) => {
        if (!id) return;

        let redCont = this.data.find(function(item) { return item.id == id });

        if (!redCont) return;

        redCont.edit(newData);
        this.update();

    }



    onRedact = (id) => {

        let redCont = this.data.find(function(item) { return item.id == id });

        if (!redCont) return;

        this.modalRedact(id, redCont.get())

    }


    onDelete = (id) => {
        let question = confirm('do you really want to delete the contact?')

        if(!question) return;

        this.remove(id);
        this.update();

    }


    onAdd = () => {
        const fieldName = this.contactsElem.querySelector('[name="name-field-title"]');
        const fieldEmail = this.contactsElem.querySelector('[name="email-field-title"]');
        const fieldAddress = this.contactsElem.querySelector('[name="adress-field-title"]');
        const fieldPhone = this.contactsElem.querySelector('[name="phone-field-title"]');

        const nameValue = fieldName.value;
        const emailValue = fieldEmail.value;
        const addressValue = fieldAddress.value;
        const phoneValue = fieldPhone.value;

        const dataContact = {
        name:nameValue,
        email: emailValue,
        address:addressValue,
        phone: phoneValue
        }

        this.add(dataContact);
        this.update();

        fieldName.value = '';
        fieldEmail.value = '';
        fieldAddress.value = '';
        fieldPhone.value = '';
    
    }


    init = function() {

        // if (!data) return;               //WHY??????????????????????
        
        this.contactsElem = document.querySelector('.contacts__add');
        this.create();
        
        this.contactsElem.append(this.listElem);

        
        const btnAdd = this.contactsElem.querySelector('[name="contacts-btn-add"]');

        if(!this.listElem) return;

        btnAdd.addEventListener('click', this.onAdd )
    }



}