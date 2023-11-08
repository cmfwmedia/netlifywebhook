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

export const handler = async (req, res) => {
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
    console.log('API Response:', data);
    res.set('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.status(200).send('API call successful');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};  