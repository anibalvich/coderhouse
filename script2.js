let pas = parseInt(prompt("ingrese pas"))
let intentos = 3

switch (pas) {
    case 12345:
        alert("bienvenido")
        break;

    default:
        while ((pas != 12345) && (intentos > 0)) {
            alert("inc")
            pas = parseInt(prompt("ingrese numero quedan " + intentos))
            intentos --;
            if (intentos == 0)
            alert(" se acabaron los intentos")
        }

    if (pas == 12345) {
        alert("bienvenido")
        
    }
}
