// export const handler = async () => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: 'Hello World!',
//       }),
//     }
//   }

 import fetch from 'node-fetch'


// export const handler = async () => {
//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*', // Allow requests from any origin
//       'Access-Control-Allow-Headers': 'Content-Type', // Allow Content-Type header
//     },
//     body: JSON.stringify({
//       message: 'Hello World!',
//     }),
//   };
// };

//const fetch = require('node-fetch');

exports.handler = async (event) => {
  try {
    const apiKey = process.env.DRONE_DEPLOY_API_KEY;
    const url = 'https://www.dronedeploy.com/graphql';
    const query = JSON.stringify({
      query: `
        {
          viewer {
            organization {
              name
            }
          }
        }
      `
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE' // Allow the specified methods
      },
      body: query
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
