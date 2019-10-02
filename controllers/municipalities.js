module.exports = (req, res) => {
  const municipalityID = req.params.municipality;
  console.log(municipalityID)
  // Consult DB

  // Create object response
  res.json({
    id: municipalityID,
    name: 'municipality Name',
    code: 'municipalityCode'
  });

}

