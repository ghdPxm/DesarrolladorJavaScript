var opc  = 4;

switch (opc) {
  case 1:
    document.getElementById('mensaje').innerHTML = "El dia es Lunes";
    break;
    case 2:
      document.getElementById('mensaje').innerHTML = "El dia es Martes";
      break;
      case 3:
        document.getElementById('mensaje').innerHTML = "El dia es Miercoles";
        break;
        case 4:
          document.getElementById('mensaje').innerHTML = "El dia es Jueves";
          break;
          case 1:
            document.getElementById('mensaje').innerHTML = "El dia es Viernes";
            break;
  default:
  document.getElementById('mensaje').innerHTML = "Valor no permitido";

}
