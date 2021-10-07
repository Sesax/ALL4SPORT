import axios from 'axios';

const batiments = axios.get(`http://localhost:3000/batiment/see`).then(res => res.json().then((json) => {return (json)}))

export default batiments;