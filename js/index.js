/* 
let nombre = String(prompt("Ingrese su nombre")); 
let apellido = String(prompt("Ingrese su apellido"));
let edad = Number(prompt("Ingrese su edad"));

let saludo = "hola," + nombre;
let mayorEdad = nombre + " " + apellido + " tienes " + edad + " años y estas habilitada para cotizar un seguro en caso de incendio";
let menorEdad = nombre + " " + apellido + " tienes " + edad + " años y no estas habilitada para cotizar un seguro en caso de incendio";


if (edad < 18 ){
    console.log(menorEdad);
}else{
    console.log(mayorEdad); 
    let valor = Number(prompt("Ingrese el valor de su propiedad"));
    
    while (valor <= 0) {
        valor = Number(prompt("Ingrese un valor válido de su propiedad"));
        
    }    

    let costo = valor * 1.8;

    if(costo > 0){
        alert("El costo del seguro es $" + costo);
    }

    console.log("El costo del seguro es $" + costo);
} */


// Declarar las variables de JS necesarias
let nombre; 
let tipo; 
let valor; 
let prima; 
let seguro;

// Declarar el array de clientes
let clientes = [
    { nombre: "Ana", tipo: "A", prima: 1600 },
    { nombre: "Beto", tipo: "B", prima: 1200 },
    { nombre: "Carla", tipo: "C", prima: 800 },
    { nombre: "Diego", tipo: "A", prima: 2000 },
    { nombre: "Elena", tipo: "B", prima: 1500 },
    { nombre: "Felipe", tipo: "C", prima: 600 },
];

// Capturar las entradas del usuario mediante prompt()
nombre = prompt("Ingrese su nombre");
tipo = prompt("Ingrese el tipo de seguro (A, B o C)");
valor = prompt("Ingrese el valor de su propiedad");

// Validar las entradas del usuario
if (nombre == "" || tipo == "" || valor == "") {
    alert("Debe ingresar todos los datos");
} else if (tipo != "A" && tipo != "B" && tipo != "C") {
    alert("El tipo de seguro debe ser A, B o C");
} else if (isNaN(valor)) {
    alert("El valor de la propiedad debe ser un número");
} else

  // Declarar el objeto seguro
seguro = {
  tipo: tipo,
  cobertura: 0,
  prima: 0,
  calcularCobertura: function () {
      switch (this.tipo) {
          case "A":
              this.cobertura = valor * 0.8;
              break;
          case "B":
              this.cobertura = valor * 0.6;
              break;
          case "C":
              this.cobertura = valor * 0.4;
              break;
      }
  },
  calcularPrima: function () {
      switch (this.tipo) {
          case "A":
              this.prima = valor * 0.02;
              break;
          case "B":
              this.prima = valor * 0.015;
              break;
          case "C":
              this.prima = valor * 0.01;
              break;
      }
  },
  mostrarDatos: function () {
      alert(
          "Gracias por elegir nuestro seguro, " +
          nombre +
          ".\nSu tipo de seguro es: " +
          this.tipo +
          ".\nSu cobertura es de: $" +
          this.cobertura +
          ".\nSu prima mensual es de: $" +
          this.prima +
          "."
      );
  }
};


  // Llamar a los métodos del objeto seguro
seguro.calcularCobertura();
seguro.calcularPrima();
seguro.mostrarDatos();

  // Añadir el nuevo cliente al array
clientes.push({ nombre: nombre, tipo: tipo, prima: prima });

  // Mostrar los nombres y primas de los clientes en la consola
clientes.forEach((cliente) => {
    console.log(cliente.nombre + " tiene una prima de $" + cliente.prima);
});

  // Preguntar al usuario si quiere ver el array en pantalla
let respuesta = prompt("¿Quiere ver el array en pantalla? (S/N)");

  // Mostrar el array en pantalla si el usuario responde que sí
if (respuesta == "S" || respuesta == "s") {
    alert("El array es: \n" + JSON.stringify(clientes));
}
  // Mostrar un mensaje de despedida si el usuario responde que no
else if (respuesta == "N" || respuesta == "n") {
    alert("Gracias por usar nuestro programa. Hasta pronto.");
}
  // Mostrar un mensaje de error si el usuario responde otra cosa
else {
    alert("Respuesta inválida. Por favor, ingrese S o N.");
  }