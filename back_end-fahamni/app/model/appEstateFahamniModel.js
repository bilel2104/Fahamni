
'user strict';
var sql = require('./../db.js');

//Estate object constructor
var Course = function(Course){

this.id             =  Course.id
this.specialite     =  Course.specialite;
this.niveau         =  Course.niveau;
this.matiere        =  Course.matiere;
this.chapitre       =  Course.chapitre;
this.justificatif   =  Course.justificatif;
this.time           =  Course.time;
this.image_courses  =  Course.image_courses;
this.prix           =  Course.prix;
this.type           =  Course.type;
this.justi_image    =  Course.justi_image;

};

//POST-INSERT
Course.createCourse = function (newCourse, result) {
        sql.query("INSERT INTO courses set ?", newCourse, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};

//SEARCH
Course.searchAlltrack = function (search, result) {
    sql.query("Select * from courses WHERE matiere like '%"+search+"%' or time like '%"+String(search)+"%' or chapitre like '%"+search+"%' or niveau like '%"+search+"%' or specialite like '%"+search+"%' ", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('track : ', res);  

             result(null, res);
            }
        });   
};


//search calendar
Course.searchAlltrackcalendar = function (search, result) {
    sql.query("Select * from courses WHERE time like '%"+search+"%' ", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('track : ', res);  

             result(null, res);
            }
        });   
};






//GET BY ID -
Course.getCourseById = function (owner, result) {
        sql.query("SELECT * FROM `courses` WHERE owner =?", owner, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

//GETALL
Course.getAllCourse = function (result) {
        sql.query("Select * from courses", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('courses : ', res);

                 result(null, res);
                }
            });
};

Course.updateById = function(Course, result){
  sql.query("UPDATE `courses` SET`specialite`=?,`niveau`=?,`matiere`=?,`chapitre`=?,`justificatif`=?,`time`=?,`image_courses`=?,`prix`=?,`type`=? WHERE id = ?", 
  [
      Course.specialite,
      Course.niveau,
      Course.matiere,
      Course.chapitre,
      Course.justificatif,
      Course.time,
      Course.image_courses,
      Course.prix,
      Course.type
    ],
     function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};

//kenet haka : "DELETE FROM courses WHERE name = ?"
Course.remove = function(id, result){
     sql.query("DELETE FROM courses WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};


//DELETE
// Course.removeid = function(id, result){
//     sql.query("DELETE FROM courses WHERE id = ? ", [id], function (err, res) {

//                if(err) {
//                    console.log("error Delete: ", err);
//                    result(null, err);
//                }
//                else{

//                 result(null, res);
//                }
//            });
// };

module.exports= Course;