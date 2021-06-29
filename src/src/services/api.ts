import axios from 'axios';
import md5 from 'md5';

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const timestamp = new Date().getTime(); 
const hash = md5( timestamp + (privateKey ? privateKey : '') + publicKey );

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: publicKey,
    ts: timestamp,
    hash: hash,
  }
});

export default api;