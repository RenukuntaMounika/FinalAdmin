var express = require('express');
var app = express();
var mkdirp = require("mkdirp");
var multer = require('multer');
var cors = require('cors');
app.use(cors());
var qname = 'firstquestion';
app.post('/uploadFiles', function (req, res) {
    mkdirp("myfiles/"+qname, function (err) {
        if (err) console.log(err);
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).send(req.file);
        });
    });
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "myfiles/"+qname);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + req.files.file.filename);
    }
});
var upload = multer({ storage: storage }).array('file');
app.listen(4000, function () {

    console.log('App running on port 4000');

});

app.post('/uploadFormData', function (req, res) {
    var tempData = req.data;
    console.log(tempData);
});