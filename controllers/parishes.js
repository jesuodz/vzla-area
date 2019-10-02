module.exports = (req, res) => {
  const parishID = req.params.parish;
  // Consult DB

  // Create object response
  res.json({
    id: parishID,
    name: 'parish Name',
    code: 'parishCode'
  });

}

