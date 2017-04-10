var express = require('express');
var application = express();
var cors = require('cors');
var posts = require('./data').posts;
var _ = require('lodash');

application.use(cors());

application.get('/', function(req, res){
  res.json(posts);
});

application.get('/posts/:postId', function (req, res) {
  var postFound = null;

  _.each(posts, function(item) {
    if (item.metaInfo.id == req.params.postId) {
      postFound = item;
    }
  });

  if (postFound != null) {
    res.json(postFound);
  } else {
    res.json({});
  }
})

application.listen(3001, function() {
  console.log('Server on 3001');
});
