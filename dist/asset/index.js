import './index.css';
import './index.html';
import dataCountries from './countries.json'

// regular expression for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

//////////////////////////

const counrtyList = document.getElementById('country-list');
const fullscreenDiv = document.getElementById('fullscreen-div');
const addBtn = document.getElementById('add-btn');
const closeBtn = document.getElementById('close-btn');
const modalBtn = document.getElementById('modal-btn');
const form = document.getElementById('modal');
const addrBookList = document.querySelector('#addr-book-list tbody');

//////////////////////////

let addrName = "";
let firstName = "";
let lastName = "";
let email = "";
let phone = "";
let streetAddr = "";
let postCode = "";
let city = "";
let country = "";
let labels = "";
// UI class 

class UI {
    static showModal() {
        form.style.display = "block";
        fullscreenDiv.style.display = "block";
    }

    static closeModal() {
        modal.style.display = "none";
        fullscreenDiv.style.display = "none"
    }
}


//DOM content Loaded 
window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
    addEventListeners();
})

//event listeners
function addEventListeners(){
    // show add item modal
    addBtn.addEventListener('click', () => {
        form.reset();
        UI.showModal();
    })
    // close add item modal
    closeBtn.addEventListener('click', UI.closeModal);

    // add an address item
    modalBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.id == "save-btn"){
            let isFormValid = getFormData();
            if(!isFormValid) {
                form.querySelector('input').forEach(input => {
                    setTimeout(() => {
                       input.classList.remove('errorMsg');
                    }, 2500);
                })
            }
        }
    })
}

//load countries list 
function loadJSON() {
        let html = "";
        dataCountries.forEach(country => {
            html += `<option> ${country.country} </option>`;
        });
        counrtyList.innerHTML = html;
    }

// get form data
function getFormData() {
    let inputValidStatus = [];
    if(!strRegex.test(form.addr_ing_name.value) || form.addr_ing_name.value.trim().length == 0){
        addErrMsg(form.addr_ing_name);
        inputValidStatus[0] = false;
    } else {
        addrName = form.addr_ing_name.value;
        inputValidStatus[0] = true;
    }

    if(!strRegex.test(form.first_name.value) || form.first_name.value.trim().length == 0){
        addErrMsg(form.first_name);
        inputValidStatus[1] = false;
    } else {
        firstName = form.first_name.value;
        inputValidStatus[1] = true;
    }

    if(!strRegex.test(form.last_name.value) || form.last_name.value.trim().length == 0){
        addErrMsg(form.last_name);
        inputValidStatus[2] = false;
    } else {
        lastName = form.last_name.value;
        inputValidStatus[2] = true;
    }

    if(!emailRegex.test(form.email.value)){
        addErrMsg(form.email);
        inputValidStatus[3] = false;
    } else {
        email = form.email.value;
        inputValidStatus[3] = true;
    }
    
    if(!phoneRegex.test(form.phone.value)){
        addErrMsg(form.phone);
        inputValidStatus[4] = false;
    } else {
        phone = form.phone.value;
        inputValidStatus[4] = true;
    }

    if(!(form.street_addr.value.trim().length > 0)){
        addErrMsg(form.street_addr);
        inputValidStatus[5] = false;
    } else {
        streetAddr = form.street_addr.value;
        inputValidStatus[5] = true;
    }

    if(!digitRegex.test(form.postal_code.value)){
        addErrMsg(form.postal_code);
        inputValidStatus[6] = false;
    } else {
        postCode = form.postal_code.value;
        inputValidStatus[6] = true;
    }

    if(!strRegex.test(form.city.value) || form.city.value.trim().length == 0){
        addErrMsg(form.city);
        inputValidStatus[7] = false;
    } else {
        city = form.city.value;
        inputValidStatus[7] = true;
    }
    country = form.country.value;
    labels = form.labels.value;
    return inputValidStatus.includes(false) ? false : true;
}

function addErrMsg(inputBox) {
    inputBox.classList.add('errorMsg')
}
