'use strict';

// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. У класі User повинні бути такі компоненти: getName, getRole, login, logout, сhangeName, changePassword.
// У класі Admin повинні бути такі компоненти: addUser, removeUser, changeUserRole, getAllUsers,removeAllUsers.

class User {
    constructor(getName, getRole, login, logout, сhangeName, changePassword) {
        this.getName = getName;
        this.getRole = getRole;
        this.login = login;
        this.logout = logout;
        this.сhangeName = сhangeName;
        this.changePassword = changePassword;

    }
}

class Admin {
    constructor(addUser, removeUser, changeUserRole, getAllUsers, removeAllUsers) {
        this.addUser = addUser;
        this.removeUser = removeUser;
        this.changeUserRole = changeUserRole;
        this.getAllUsers = getAllUsers;
        this.removeAllUsers = removeAllUsers;
    }
}

let btnSbmt = document.getElementById('btnSbmt');
btnSbmt.addEventListener('click', newUser);

function newUser(event) {
    event.preventDefault();
    
    let newName = document.getElementById('names').value;
    let role = document.getElementById('role').value;
    
    if(role === "user"){
        console.log(User);
    } else {
        console.log(Admin);
    } 

    console.log(newName);
    // console.log(role);
}