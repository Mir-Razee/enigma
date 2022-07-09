const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


function get_rank(email, onlyRank) {
  return new Promise(function (resolve, reject) {
    leaderboard_data = [];
    itr = 0;

    User.find()
      .sort({ score: -1, last_write: 1 })
      .exec(function (err, result) {
        if (err) throw err;
        var userrank = 0;
        while (itr < result.length) {
          if (email == result[itr].email) {
            userrank = itr + 1;
            if (onlyRank) {
              break;
            }
          }
          if (result[itr].score > 0) {
            leaderboard_data.push({ 'name': result[itr].username, 'score': result[itr].score });
          }
          else {
            if (userrank != 0) {
              break;
            }
          }
          itr++;
        }
        resolve(userrank);
        return;
      });
  });
}



// register new user
router.post('/register', async function (req, res) {
  try {
    const { username } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) {
      res.send('user already exists');
    }
    else if (req.user.username != "") {
      req.session.type = '';
      res.send('success');
    }
    else {
      await User.updateOne({ "email": req.user.email }, { $set: { "username": username } });
      req.session.type = 'register';
      res.send('success');
    }
  }
  catch (e) {
    console.log(e);
  }
});

router.get('/getuser', function (req, res) {
  res.send(req.user);
})

router.get('/profile', async function (req, res, next) {
  try {
    let name;
    if (req.user.lastName == undefined) {
      name = req.user.firstName;
    }
    else {
      name = req.user.firstName + ' ' + req.user.lastName;
    }
    const uname = req.user.username;
    const rank = await get_rank(req.user.email, true);
    res.send({
      Name: name,
      Rank: rank,
      User_Id: uname,
      Email: req.user.email,
      Score: req.user.score
    });
  }
  catch (e) {
    next(e);
  }
});

// // route to load questions in database
// // requires questions.js file,answer[],close_ans[]
// router.get('/loadquestions', async function (req, res, next) {
//   const noOfQuestions = 14;
//   for (i = 0; i < noOfQuestions; i++) {
//     const newQuestion={
//       ...questions[i],
//       answer: answer[i],
//       close_ans: close_ans[i]
//     }
//     await QnA.create(newQuestion);
//   }
//   res.send("loaded");
// });

//leaderboard
router.get('/leaderboard', async function (req, res, next) {
  try {
    const uname = req.user.username;
    const rank = await get_rank(req.user.email, false);
    console.log('rank is :', rank);
    // console.log('THE LEADERBOARD DATA:', leaderboard_data);
    res.render('leaderboard', {
      layout: 'layout_empty',
      Rank: rank,
      User_Id: uname,
      My_score: req.user.score,
      lb_data: leaderboard_data
    });
  }
  catch (e) {
    next(e);
  }
});

module.exports = router;
