import axios from 'axios';

export async function getContent() {
  try {
    const response = await axios.get('http://web-back:8000/api/content');
    const data = response.data;
    return data;
  } 
  catch (error) {
    console.error(error);
  }
}
