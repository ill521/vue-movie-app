exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      neme: 'heropy',
      age: 85,
      email: 'ill521@naver.com'
    })
  }
}