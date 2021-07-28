exports.handler = async function ( event, context ) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'jung yeon hae',
      age: 32,
      email: 'ill521@naver.com'
    })
  }
}