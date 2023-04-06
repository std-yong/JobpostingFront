import axios from 'axios';

export async function getContent() {
  try {
    const response = await axios.get('http://192.168.30.56:8080/api/content');
    const data = response.data;
    return data;
  } 
  catch (error) {
    console.error(error);
  }
}
