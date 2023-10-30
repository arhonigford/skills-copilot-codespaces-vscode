// Create web server

function getComments(req, res) {
  // Get comments from database
  db.getComments(function(err, comments) {
    if (err) {
      res.status(500).send('Internal server error')
    } else {
      res.send(comments)
    }
  })
}

function postComment(req, res) {
  // Add comment to database
  db.addComment(req.body, function(err) {
    if (err) {
      res.status(500).send('Internal server error')
    } else {
      res.status(201).send('Created')
    }
  })
}

module.exports = {
  getComments: getComments,
  postComment: postComment
}
