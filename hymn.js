


const express = require('express');
const router = express.Router();
//hymn model
const Song = require('./models/song'); 

// add song to db
router.post("", (req, res, next) => {
    console.log(req.body);
    const song = new Song({
      title: req.body.title,
      category: req.body.category,
      stanzas:req.body.stanzas,
      chorus:req.body.chorus,
      author:req.body.author,
      creator: req.body.creator
  
    });
    song.save()
    .then(createdSong => {
      res.status(201).json({
        message: "true",
        title: song.title
      });
    })
    .catch(err => {
        res.status(502).json({
            message: false,
            title: 'unsuccessful'

         })
    })
  });

  router.get("",(req,res,next) => {
    res.send("Live and Okay");
  })

  router.get('/count',(req,res,next) => {
      Song.estimatedDocumentCount()
      .then(result => {
          res.status(201).json({
              count: result
          })
      })
  });



module.exports = router;