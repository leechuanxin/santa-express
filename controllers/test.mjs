export default function initTestController() {
  const index = async (request, response) => {
    response.send({
      message: 'Test API is successful!',
    });
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
