var express = require('express');
var router = express.Router();

var sudoku = require('../sudoku-js/sudoku');


/* GET generated sudoku puzzle and solution . */
router.get('/', function(req, res, next) {

  //let difficulty = req.query.difficulty;
  let difficulty;
  //if (!(req.query.difficulty == 'medium') || (req.query.difficulty == 'hard') ) {
  if (req.query.difficulty != 'hard' && req.query.difficulty != 'medium' ) {
    difficulty = 'easy';
  } else {
    difficulty = req.query.difficulty;
  }
  console.log(difficulty);
  let puzzle = sudoku.generate(difficulty);
  let solvedPuzzle = sudoku.solve(puzzle);
  
  solvedPuzzle = sudoku.solve(puzzle);
  
  let data = {
    'difficulty': difficulty,
    'puzzle': puzzle
  };
  // let data = {
  //   'difficulty': difficulty,
  //   'puzzle': puzzle,
  //   'solution': solvedPuzzle
  // };
    res.json(data);
});

module.exports = router;
