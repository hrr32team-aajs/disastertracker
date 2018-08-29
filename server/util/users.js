const db = require('../../database/utils.js')

exports.userLocation = (req, res) => {
  let userID = req.session.user
  db.getUser(userID, userData => {
    if (userData) {
      delete userData['password'];
      res.status(200).send(userData)
    } else {
      res.status(400).send("can't retrieve location for this user")
    }
  })
}
