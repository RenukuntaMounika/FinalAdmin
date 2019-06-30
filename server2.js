var express = require('express');
var app = express();
var mkdirp = require("mkdirp");
var cors = require('cors');
var bodyParser = require('body-parser')
var http = require('http');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const fileUpload = require('express-fileupload');
app.use(cors());
app.use(fileUpload());
var qname;
app.post('/upload', function (req, res) {
    qname = req.body.qname;
    var level = (req.body.level).toLowerCase();
    var desc = req.body.desc;
    var ptemp = req.body.ptemp;
    var jtemp = req.body.jtemp;
    console.log(qname + " " + level + " " + desc + " " + ptemp + " " + jtemp);
    mkdirp("Questions/" + qname, function (err) {
        if (err) console.log(err);
        var imgfile = req.files.imgfile;
        var imgfname = imgfile.name + '.png';
        imgfile.mv("./Questions/" + qname + "/" + imgfname, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        var sfile = req.files.sfile;
        var sfname = sfile.name + '.txt';
        sfile.mv("./Questions/" + qname + "/" + sfname, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        var stifile = req.files.stifile;
        var stifname = stifile.name + '.txt';
        stifile.mv("./Questions/" + qname + "/" + stifname, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        var stofile = req.files.stofile;
        var stofname = stofile.name + '.txt';
        stofile.mv("./Questions/" + qname + "/" + stofname, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        var tifile = req.files.tifile;
        var tifname = tifile.name + '.txt';
        tifile.mv("./Questions/" + qname + "/" + tifname, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        var tofile = req.files.tofile;
        var tofname = tofile.name + '.txt';
        tofile.mv("./Questions/" + qname + "/" + tofname, function (err) {
            if (err)
                return res.status(500).send(err);
        });
        var obj = {
            level: level,
            question: {
                qname: qname,
                description: desc,
                tags: [
                    ""
                ],
                image_path: "Questions/" + qname + "/image.png",
                template: {
                    python: ptemp,
                    java: jtemp
                },
                sample_testcase_path: {
                    input: "Questions/" + qname + "/sample_input.txt",
                    output: "Questions/" + qname + "/sample_output.txt"
                },
                testcase_path: {
                    input: "Questions/" + qname + "/input.txt",
                    output: "Questions/" + qname + "/output.txt"
                },
                solution_path: "Questions/" + qname + "/solution.txt",
                time_complexity: "",
                space_complexity: ""
            }
        };
        // var request = http.request({
        //     host: 'localhost',
        //     port: 4000,
        //     path: '/addQuestion',
        //     method: 'GET',
        //     headers: { // headers such as "Cookie" can be extracted from req object and sent to /test
        // }
        //   }, function(response) {
        //     // var data = '';
        //     // response.setEncoding('utf8');
        //     // response.on('data', (chunk) => {
        //     //   data += chunk;
        //     // });
        //     // response.on('end', () => {
        //     //   res.end('check result: ' + data);
        //     // });
        //   });
        //   request.end();
    });
});
app.post('/addQuestion', function (req, res) {
    var tempObj = obj;
    //connect database and store it in db
});
app.listen(4000, function () {
    console.log('App running on port 4000');
});