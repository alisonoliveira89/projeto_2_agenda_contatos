const form = document.getElementById("form-agenda");
const nomeContato = document.getElementById("nome-contato");
const telefoneContato = document.getElementById("telefone-contato");
const nomeList = [];
const telList = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validFields()) {
        addContact();
    }

    resetFields();
})

function addContact() {
    nomeList.push(nomeContato.value);
    telList.push(parseInt(telefoneContato.value));


    let item = '<tr>'
    item += `<td>${nomeContato.value}</td>`
    item += `<td>${telefoneContato.value}</td>`
    item += '</tr>'

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML += item;
}

function validFields() {
    if (nomeList.includes(nomeContato.value) || telList.includes(parseInt(telefoneContato.value))) {
        alert("Nome ou Telefone já cadastrado");
        return false;
    }
    return true;
}

function resetFields() {
    nomeContato.value = '';
    telefoneContato.value = '';
}