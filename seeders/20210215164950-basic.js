const jssha = require('jssha');

const { SALT } = process.env;

function getHash(input) {
  // eslint-disable-next-line new-cap
  const shaObj = new jssha('SHA-512', 'TEXT', { encoding: 'UTF8' });
  const unhasedString = `${input}-${SALT}`;
  shaObj.update(unhasedString);

  return shaObj.getHash('HEX');
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        display_name: 'The Real Santa',
        wallet_address: getHash('testuser123'),
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
