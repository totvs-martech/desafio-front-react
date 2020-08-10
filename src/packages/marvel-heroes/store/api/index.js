const apiUrl = (endpoint) => (
  `http://gateway.marvel.com/v1/public/${endpoint}?ts=${apiAuth.ts}&apikey=${apiAuth.publicKey}&hash=${apiAuth.md5}`
);

const apiAuth = {
  publicKey: '98b6c9ddb20d947c8c5da3609f1e343d',
  privateKey: '0027db3f96139469754d306c709a4a5108559606',
  ts: '1597021360',
  md5: '92da8313f9c2febc55f21af7b4edcfd2'
}

export default apiUrl;
  