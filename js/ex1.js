'use strict';

// 1. взяти дані з інпутів і створити екземпляр класу Student з цими даними
class Student {
    constructor(name, city, course) {
        this.name = name;
        this.city = city;
        this.course = course;
    }
}

let btnSubmit = document.querySelector('.btn');
btnSubmit.addEventListener('click', inputInfo);

function inputInfo(event) {
    event.preventDefault();
    let nameNew = document.getElementById('name').value;
    let cityNew = document.getElementById('city').value;
    let courseNew = document.getElementById('course').value;

    let newStudent = new Student(nameNew, cityNew, courseNew);
    console.log(newStudent);
}


