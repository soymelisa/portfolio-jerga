const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portafolio-setup.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portafolio-setup.herokuapp.com',
  'process.env.CLIENT_ID': 'YY5VknoFoO1uPCfgw6k45dvFSE5juzRl'
}
