import axios from "../axios";



const inventarioGet = async () => {

 
  
  try {
    

    const response = await axios.get("/obtener")

    return  response.data
  } catch (error) {
    console.error("Error al guardar el objeto:", error);
  }
}

export default inventarioGet
