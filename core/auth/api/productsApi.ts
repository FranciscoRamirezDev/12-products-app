import axios from 'axios';
// TODO: conectar mediante envs vars, android e IOS

const productsApi = axios.create({
    baseURL: 'localhost:3000/api',

});

//interceptor axios


export {
    productsApi
};

