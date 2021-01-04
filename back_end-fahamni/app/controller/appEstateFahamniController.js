'use strict';

var Course = require('../model/appEstateFahamniModel');

exports.list_all_Course = function(req, res) {
    Course.getAllCourse(function(err, User) {
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', Course);
      res.send(User);
    });
  };


  //search
  exports.search_all_tracks = function (req, res) {
    Course.searchAlltrack(req.params.search, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };

  //search calendar
  exports.search_all_tracks_calendar = function (req, res) {
    Course.searchAlltrackcalendar(req.params.search, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };

//DELETE
// exports.delete_a_course = function(req, res) {
//   Course.removeid( req.params.id, function(err) {
//     if (err)
//       res.send(err);
//     // res.json(Course);
//   });
// };



exports.create_a_Course = function(req, res) {
  var new_Course = new Course(req.body);
  Course.createCourse(new_Course, function(err, Course) {
    if (err)
    res.send(err);
    res.json(Course);

})
};


exports.read_a_Course = function(req, res) {
  Course.getCourseById(req.params.owner, function(err, Course) {
    if (err)
      res.send(err);
    res.json(Course);
  });
};
exports.update_a_Course = function(req, res) {
  Course.updateById(new Course(req.body), function(err, Course) {
    if (err)
      res.send(err);
    res.json(Course);
  });
};
exports.delete_a_Course = function(req, res) {


  Course.remove( req.params.id, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Course successfully deleted' });
  });
};