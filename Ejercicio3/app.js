// Funciones globales

const formularioUI = document.querySelector('#formulario');
const listaEmpresasUI = document.getElementById('listaActividades');
let arrayActividades = [];


// Funciones

const CrearItem = (id) => {

    let item = {
        id: id,
        estado: false
    }
    arrayActividades.push(item);

    return item;

}

const GuardarDB = () => {
    localStorage.setItem('empresa', JSON.stringify(arrayActividades));



}

const LeerDB = () => {

    listaEmpresasUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('empresa'));

    if (arrayActividades === null) {
        arrayActividades = [];
    } else {

        arrayActividades.forEach(element => {
            listaEmpresasUI.innerHTML += ` <div class="alert alert-danger" role="alert">
            <b>ID Empresa</b><br>
            <b>Nombre Empresa</b><br>
            <b>NIT Empresa</b><br>
            <b>Fecha de fundacion de la Empresa</b><br>
            <b>Direccion Empresa</b><br>
            <span class="float-righ">
        <i class="material-icons">
          done
      </span>
        </div>`
        });
    }


}

// EventListener

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();
    let idUI = document.querySelector('#id').value;

    CrearItem(idUI);
    GuardarDB();

    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', LeerDB)