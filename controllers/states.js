module.exports = (req, res) => {
  const stateID = req.params;
  console.log(req.params);
  console.log(req.query)
  // Create object response
  res.json({
    ...stateID,
    name: 'State Name',
    code: 'stateCode'
  });

}

