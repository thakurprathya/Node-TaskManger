//middleware to execute if route not found
const notFound = (req, res) => res.status(404).send("Route Does Not Exists...");

module.exports = notFound;