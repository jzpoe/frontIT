import axios from "axios";



const inventarioGet = async () => {

 
  
  try {
    const  url = 'http://localhost:3001/obtener'

    const response = await axios.get(url)

    return  response.data
  } catch (error) {
    console.error("Error al guardar el objeto:", error);
  }
}

export default inventarioGet
