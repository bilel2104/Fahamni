'use strict';
module.exports = function(app) {



var todoList = require('../controller/appController');
var UserManager = require('../controller/appUserController');
var EstateManager = require('../controller/appEstateController');


//FAHAMNI
var UserManagerFahamni = require('../controller/appUserFahamniController');
var EstateFahamniManager = require('../controller/appEstateFahamniController');
// var todoList_track = require('../controller/trackController');




const multer = require('multer');
var pool = require('../db.js');
var path = require('path')
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + '.png');
    }

})
var upload = multer({storage: storage})


// todoList Routes
app.route("/User").put(UserManager.update_a_User)



//ESTATES 
app.route("/Estates").put(EstateManager.update_a_Estate)
app.route('/Estates')
.get(EstateManager.list_all_Estates)
.post(EstateManager.create_a_Estate);
app.route('/Estates/:owner')
.get(EstateManager.read_a_Estate)
app.route('/Estates/:name')
.delete(EstateManager.delete_a_Estate)
app.route('/Estates/:owner')
.get(EstateManager.read_a_Estate)


//ESTATES-Fahamni
app.route("/Course").put(EstateFahamniManager.update_a_Course)

app.route('/Course')
.get(EstateFahamniManager.list_all_Course)
.post(EstateFahamniManager.create_a_Course);

app.route('/Course/:owner')
.get(EstateFahamniManager.read_a_Course)

app.route('/Course/:id')
.delete(EstateFahamniManager.delete_a_Course)

app.route('/Course/:owner')
.get(EstateFahamniManager.read_a_Course)





//TASKS
app.route('/tasks')
.get(todoList.list_all_tasks)
.post(todoList.create_a_task);
app.route('/tasks/:taskId')
.get(todoList.read_a_task)
.put(todoList.update_a_task)
.delete(todoList.delete_a_task);
app.route('/bid').post(UserManager.create_a_Bid);
app.route('/bid/:house_name').get(UserManager.list_all_Bidding);
app.route('/pics/:house_name').get(UserManager.list_all_pics);



//IMAGE
app.route('/img/:image_courses')
    .get( function(req , res){
        // res.sendFile(__dirname+'/uploads/'+req.params.Imagename);
        res.sendFile(path.join(__dirname, "../../uploads/"+req.params.Imagename));
});






//USERS
// app.route('/Users')
// .post(UserManager.create_a_User)
// .get(UserManager.list_all_Users)
// app.route('/Users/:Username/:Password')
// .get(UserManager.read_a_User)
// app.route('/Users/:Email')
// .get(UserManager.read_A_User)



//USERSFAHAMNI
app.route('/Users')
.post(UserManagerFahamni.create_a_User)
.get(UserManagerFahamni.list_all_Users)

app.route('/Users/:email/:password')
.get(UserManagerFahamni.read_a_User)

app.route('/Users/:email')
.get(UserManagerFahamni.read_A_User)

//SIMILAIRE
app.route('/picss/:matiere').get(UserManagerFahamni.list_all_pics);






//TEST-IMAGE
app.route('/test/:Imagename').get(function(req,res){
console.log(req.params.Imagename);
    res.sendFile(path.join(__dirname, "../../uploads/"+req.params.Imagename));
});


//search
app.route('/searchtrack/:search')
    .get(EstateFahamniManager.search_all_tracks)


app.route('/searchcalendar/:search')
    .get(EstateFahamniManager.search_all_tracks_calendar)







app.put('/upload', upload.single('profileImage'), (req, res, next) => {
console.log("gfhgv");
let filename = req.file.filename
pool.query("UPDATE `users` SET `image`= ? WHERE `Username` =?",
[
filename,
req.body.Username

], (err, rows, fields) => {
if(err){
console.log("--------")
console.log(err);
}
res.status(200);
})
})
app.put('/uupload', upload.single('houseImage'), (req, res, next) => {
console.log("gfhgv");
let filename = req.file.filename
pool.query("UPDATE `Estates` SET `picture`= ? WHERE `name` =?",
[
filename,
req.body.name
], (err, rows, fields) => {
if(err){
console.log("--------")
console.log(err);
}
    res.status(200);
})
})


app.post('/upload', upload.single('houseImage'), (req, res, next) => {
let filename = req.file.filename
pool.query("INSERT INTO `house_image`(`house_name`, `image_url`) VALUES (? , ?)",
[

req.body.house_name,filename

], (err, rows, fields) => {
if(err){
    console.log("--------")
    console.log(err);
}
        res.status(200);
    })
})

};
