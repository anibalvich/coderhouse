
let password = parseInt( prompt("Ingrese password"))
let intentos = 3

switch (password) {
    case 12345 :
        alert('Bienvenido'); 
        break;

    default :
    while ((password != 12345) && (intentos > 0)) {
        alert("wrong password");
        password = parseInt(prompt("Ingrese password tienes " + intentos + " intentos mas"));
        intentos --;
        if(password == 12345){
            alert('Bienvenido');
        } else if (intentos == 0){
            alert("Se terminaron los intentos");
        }
    }
}


