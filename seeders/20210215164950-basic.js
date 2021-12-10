module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        display_name: 'the_real_santa',
        wallet_address: 'd79aeec77b3b6e6ec5f45ae5e040173380262e1ea51b38747195c3cf09a02f16',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  // to create default world json here
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
