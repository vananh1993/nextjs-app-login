'use server'
import axios from 'axios';


export const handleLoginAction = async (data) => {
	// console.log(process.env.NEXT_PUBLIC_URL_BACKEND);
    return await axios.post('https://dvinci.pro/the-gioi-an-dam-training/api/api/login', data);
}