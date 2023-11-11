import axios from 'axios';
require('dotenv').config();

exports.handler = async (event) => {

const apiKey = process.env.DRONELOGBOOK_API_KEY;

if (!apiKey) {
  console.error("DRONELOGBOOK_API_KEY not found in environment variables");
  process.exit(1);
}

const apiUrl = 'https://api.dronelogbook.com/drone';

axios
  .get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  })
  .then(response => {
    console.log('API Response:', response.data);
  })
  .catch(error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
  });
}