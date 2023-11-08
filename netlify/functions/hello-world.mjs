// export const handler = async () => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: 'Hello World!',
//       }),
//     }
//   }

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
      'Access-Control-Allow-Headers': 'Content-Type', // Allow Content-Type header
    },
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};
