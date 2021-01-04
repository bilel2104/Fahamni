'user strict';
var sql = require('./../db.js');

//User object constructor
var User = function(User){


    this.nom = User.nom;
    this.prenom = User.prenom;
    this.departement = User.departement;
    this.niveau = User.niveau;
    this.email = User.email;
    this.telephone = User.telephone;
    this.image_user = User.image_user;
    this.password = User.password;

    // this.User = User;


};

//MRIGLA
User.createUser = function (newUser, result) {
        sql.query("INSERT INTO users set ?", newUser, function (err, res) {

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


//MRIGUEL
User.getUserById = function (email,password , result) {
        sql.query("SELECT * FROM `users` WHERE email = ? AND password = ? ",[email,password] , function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};


//Mrigla
User.getUserByEmail = function (email, result) {
    sql.query("Select * from users where email = ? ",[email], function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);

            }
        });
};

//MRIGLA
User.getAllUser = function (result) {
        sql.query("Select * from users", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Users : ', res);

                 result(null, res);
                }
            });
};

User.updateByUsername = function(User, result){
  sql.query("UPDATE `users` SET `Password`=?,`FirstName`=?,`Name`=?,`description`=?,`phone_number`=?,`job`=? WHERE `Username` = ?", [User.Password,User.FirstName,User.Name, User.description,User.phone_number,User.job,User.Username], function (err, res) {

          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};

User.remove = function(id, result){
     sql.query("DELETE FROM Users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};
User.remove = function(id, result){
     sql.query("DELETE FROM Users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};
User.createBid = function (Username,image_url,the_bid,house_name, result) {
    sql.query("INSERT INTO `biding`( `Username`, `image_url`, `the_bid`,`house_name`) VALUES (?,?,?,?)", [Username,image_url,the_bid,house_name], function (err, res) {

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
User.getAllBiding = function (house_name,result) {
    sql.query("Select * from biding where house_name = ?",house_name, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('bidings : ', res);

             result(null, res);
            }
        });
};


User.getAllpics = function (matiere,result) {
    sql.query("Select * from courses where matiere = ?",matiere, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('pics : ', res);

             result(null, res);
            }
        });
};
module.exports= User;
