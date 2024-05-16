const debug = require('debug')('quiz:database');
const { Pool } = require('pg');

const poolClient = new Pool();

poolClient.connect().then(() => {
  debug('database client connected');
});

module.exports = {
  originalClient: poolClient,
  async query(...params) { // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters
    debug(...params); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    return this.originalClient.query(...params);
  },
};

// On utilise Pool à la place de Client pour que plusieurs clients puissent se connecter en même temps (trad pool = bassin)
// Pool & Client sont interchangeable dans notre cas
/*
Métaphore :
  - si on utilise client, tous les clients vont à UNE seule caisse donc ça peut être long s'il y'a beaucoup de clients
  - si on utilise pool, cela fait comme si les clients allaient à PLUSIEURS caisses donc ils peuvent être plusieurs à se connecter simultanément
*/
// Voir schéma : /home/jeremy_breton/speData/spedata-oblog-BenoitOClock/docs/pool.png