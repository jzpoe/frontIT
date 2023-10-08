import axios from "axios";




export const Delete = (_id, datosGet, setDatosGet) => {
    const confirmacion = window.confirm("¿Seguro que deseas eliminar la tarea?");
  
    if (confirmacion) {
      axios
        .delete(`http://localhost:3001/eliminar/${_id}`)
        .then((response) => {
          if (response.status === 200) {
            alert("Tarea eliminada con éxito");
            const updatedDatos = datosGet.filter((dato) => dato._id !== _id);
            setDatosGet(updatedDatos);
          }
        })
        .catch((error) => {
          // Manejar el error aquí
          console.error("Error al eliminar la tarea:", error);
          // Puedes mostrar un mensaje de error al usuario aquí
          alert("Error al eliminar la tarea");
        });
    }
  };