'user strict';var sql = require('./../db.js');

//Estate object constructor
var Estate = function(Estate){
this.adresse     =  Estate.adresse;
this.owner       =  Estate.owner;
this.type        =  Estate.type;
this.forr        =  Estate.forr;
this.bedrooms    =  Estate.bedrooms;
this.bathrooms   =  Estate.bathrooms;
this.livingrooms =  Estate.livingrooms;
this.kitchens    =  Estate.kitchens;
this.picture     =  Estate.picture;
this.name        =  Estate.name;
this.prix        =  Estate.prix;
this.gardens     =  Estate.gardens;
};
Estate.createEstate = function (newEstate, result) {
        sql.query("INSERT INTO Estates set ?", newEstate, function (err, res) {

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
Estate.getEstateById = function (owner, result) {
        sql.query("SELECT * FROM `estates` WHERE owner =?", owner, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};
Estate.getAllEstate = function (result) {
        sql.query("Select * from Estates", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Estates : ', res);

                 result(null, res);
                }
            });
};
Estate.updateById = function(Estate, result){
  sql.query("UPDATE `estates` SET`adresse`=?,`type`=?,`forr`=?,`bedrooms`=?,`bathrooms`=?,`livingrooms`=?,`kitchens`=?,`gardens`=? WHERE name = ?", [
      Estate.adresse,
      Estate.type,
      Estate.forr,
      Estate.bedrooms,
      Estate.bathrooms,
      Estate.livingrooms,
      Estate.kitchens,
      Estate.gardens,
      Estate.name
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
Estate.remove = function(id, result){
     sql.query("DELETE FROM Estates WHERE name = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};



module.exports= Estate;