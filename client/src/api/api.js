import React from 'react';
import axios from 'axios';

function Loginad  (username,password) {
  axios.get('https://localhost:4000/login', { username, password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}


export default Loginad;