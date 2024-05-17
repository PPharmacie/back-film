const sequelize = require('./db.conn');

// Synchroniser le modèle avec la base de données
sequelize.sync({alter:true})
  .then(() => {
    console.log('La synchronisation du modèle avec la base de données a réussi.');
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation du modèle avec la base de données :', err);
    sequelize.close();
  });