const express = require('express');
const bodyParser = require('body-parser');
const voitureRouter = require('./voiture');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Route pour ajouter une voiture
app.post('/voitures', voitureRouter.addVoiture);

// Route pour lister toutes les voitures
app.get('/voitures', voitureRouter.listVoitures);

// Route pour lister une voiture par son ID
app.get('/voitures/:id', voitureRouter.getVoitureById);

// Route pour modifier une voiture par son ID
app.put('/voitures/:id', voitureRouter.updateVoitureById);

// Route pour supprimer une voiture par son ID
app.delete('/voitures/:id', voitureRouter.deleteVoitureById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
