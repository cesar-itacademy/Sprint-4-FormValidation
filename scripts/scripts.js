//SPRINT- 4 EJERCICIO DE VALIDACIÓN DE FORMULARIOS
// LEVEL 3  JQUERY VALIDATION PLUGIN

// =======================================
// ===  Validacion formulario Registro ===
// =======================================

// Seleccionamos todos los campos del forumulario Registro
//========================================================
const nameF = document.getElementById("valName");
const emailF = document.getElementById("valEmail");
const provinciaF = document.getElementById("valProvincias");
const passwordF = document.getElementById("valPassword");
const rPasswordF = document.getElementById("valRPassword");
const btnRegis = document.getElementById("btn-registrar");
const btnSubmit = document.getElementById("btn-submit");

// Carga de las provincias
// =======================

//Codigo a Ejecutar al pulsar boton Registrar en el menu
btnRegis.addEventListener("click", cargarProvincias());

// Función donde cargamos las provincias en una array y las pasamos como parámetro más el nombre
// del campo select en el DOM.
function cargarProvincias() {
  const arrayProvincias = [
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ceuta",
    "Ciudad Real",
    "Córdoba",
    "Cuenca",
    "Girona",
    "Las Palmas",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Illes Balears",
    "Jaén",
    "A Coruña",
    "La Rioja",
    "León",
    "Lleida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Melilla",
    "Murcia",
    "Navarra",
    "Ourense",
    "Palencia",
    "Pontevedra",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Santa Cruz de Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valéncia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza",
  ];
  addOptions("provincia", arrayProvincias);
}

// Rutina para agregar opciones a un <select> una vez le hemos pasados el array de elementos y el nombre en el DOM.
function addOptions(domElement, array) {
  const select = document.getElementsByName(domElement)[0];
  // Recorremos la array de <select> insertando los elementos del array como options
  for (value in array) {
    let option = document.createElement("option");
    option.text = array[value];
    select.add(option);
  }
}

// Validación de los campos por eventos
// ====================================

// Validar Nombre
nameF.addEventListener("input", (value) => {
  //Comprobamos que el campo no esté vacío y el nombre tenga más de un carácter
  if (nameF.value.length <= 1) {
    nameF.classList.add("is-invalid");
    nameF.classList.remove("is-valid");
  } else {
    nameF.classList.replace("is-invalid", "is-valid");
  }
});

// Validar provincia - Escuchamos todos los cambios del select provincias
provinciaF.addEventListener("change", () => {
  //Comprobamos que el valor del option seleccionado es el de Selecciona una provincia.
  if (provinciaF.value === "0") {
    provinciaF.classList.add("is-invalid");
    provinciaF.classList.remove("is-valid");
  } else {
    provinciaF.classList.add("is-valid");
    provinciaF.classList.remove("is-invalid");
  }
});

// Validar email
emailF.addEventListener("input", (value) => {
  //Comprobamos que no está vacío y llamamos a la función de validación de la biblioteca
  if ((emailF.value == "") | validateEmail(emailF.value)) {
    emailF.classList.add("is-invalid");
    emailF.classList.remove("is-valid");
  } else {
    emailF.classList.replace("is-invalid", "is-valid");
  }
});

// Validar password ( 1 mayuscula, 1 minuscula, 1 numero y 8 char min.)
passwordF.addEventListener("input", (value) => {
  //Comprobamos que no está vacío y llamamos a la función de validación de la biblioteca
  if ((passwordF.value == "") | validatePassword(passwordF.value)) {
    passwordF.classList.add("is-invalid");
    passwordF.classList.remove("is-valid");
  } else {
    passwordF.classList.replace("is-invalid", "is-valid");
  }
});

// Validar confirmación password
rPasswordF.addEventListener("input", (value) => {
  //Comprovamos que el password sea idéntico al introducido con anterioridad
  if (rPasswordF.value != passwordF.value) {
    rPasswordF.classList.add("is-invalid");
    rPasswordF.classList.remove("is-valid");
  } else {
    rPasswordF.classList.replace("is-invalid", "is-valid");
  }
});

// Botón Submit - Registrar
// =========================
function validateRegister(event) {
  //Comprobar que todos los campos tienen la clase is-valid
  if (
    nameF.classList.contains("is-valid") &&
    provinciaF.classList.contains("is-valid") &&
    emailF.classList.contains("is-valid") &&
    passwordF.classList.contains("is-valid") &&
    rPasswordF.classList.contains("is-valid")
  ) {
  } else {
    return false;
  }
}

// =======================================
// ===  Validacion de formulario Buscar ==
// =======================================

// Seleccionamos todos los campos del forumulario Buscar
//======================================================
const buscarB = document.getElementById("buscarB");

// Validamos el campo de busqueda para que contenga mas de 3 caracteres.
buscarB.addEventListener("input", (value) => {
  if (buscarB.value.length <= 3) {
    buscarB.classList.add("is-invalid");
    buscarB.classList.remove("is-valid");
  } else {
    buscarB.classList.replace("is-invalid", "is-valid");
  }
});

// Boton Submit - Buscar
// =====================
function validateBuscar() {
  //Comprobamos que los campos tengan la clase is-valid para hacer el submit
  if (buscarB.classList.contains("is-valid")) {
  } else {
    return false;
  }
}

// ================================
// === Libreria de validaciones ===
// ================================

//Email - Utilizamos expresiones regulares para comprobar que el email introducido es válido
const validateEmail = (email) => {
  let invalid = true;
  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    invalid = false;
    console.log("email válido");
  } else {
    console.log("email incorrecto");
  }
  return invalid;
};

// =====================
//       LEVEL 2
// =====================
//Password - Utilizamos expresiones regulares para obligar a que el password sea más seguro.
const validatePassword = (password) => {
  //Debe tener 1 mayúscula, 1 minúscula, 1 número y 8 carácteres cómo mínimo.
  let invalid = true;
  const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
  if (passwordRegex.test(password)) {
    invalid = false;
    console.log("password válido");
  } else {
    console.log("password incorrecto");
  }
  return invalid;
};
