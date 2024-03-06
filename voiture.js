let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
  ];
  
  // Fonction pour générer un nouvel ID de voiture
  function generateId() {
    return voitures.length > 0 ? Math.max(...voitures.map(voiture => voiture.id)) + 1 : 1;
  }
  
  // Fonction pour ajouter une voiture
  function addVoiture(req, res) {
    const { name } = req.body;
    const newVoiture = { id: generateId(), name };
    voitures.push(newVoiture);
    res.status(201).json(newVoiture);
  }
  
  // Fonction pour lister toutes les voitures
  function listVoitures(req, res) {
    res.json(voitures);
  }
  
  // Fonction pour récupérer une voiture par son ID
  function getVoitureById(req, res) {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(voiture => voiture.id === id);
    if (voiture) {
      res.json(voiture);
    } else {
      res.status(404).send('Voiture not found');
    }
  }
  
  // Fonction pour mettre à jour une voiture par son ID
  function updateVoitureById(req, res) {
    const id = parseInt(req.params.id);
    const updatedVoiture = req.body;
    let index = voitures.findIndex(voiture => voiture.id === id);
    if (index !== -1) {
      voitures[index] = { ...voitures[index], ...updatedVoiture };
      res.json(voitures[index]);
    } else {
      res.status(404).send('Voiture not found');
    }
  }
  
  // Fonction pour supprimer une voiture par son ID
  function deleteVoitureById(req, res) {
    const id = parseInt(req.params.id);
    let index = voitures.findIndex(voiture => voiture.id === id);
    if (index !== -1) {
      voitures.splice(index, 1);
      res.send('Voiture deleted successfully');
    } else {
      res.status(404).send('Voiture not found');
    }
  }
  
  module.exports = {
    addVoiture,
    listVoitures,
    getVoitureById,
    updateVoitureById,
    deleteVoitureById
  };
  