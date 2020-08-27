require("dotenv").config();

var bodyParser = require("body-parser");
var express = require("express");
var cors = require("cors");
var http = require("http");
const path = require("path");
const fileUpload = require("express-fileupload");
var router = require("./src/router");
var syncServiceDetails = require("./src/sync_service_details");

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public/uploads")));
app.use(router);
app.use(fileUpload());

// Get Sync Service Details for lazy creation of default service if needed
syncServiceDetails();

const db = require("./app/models");
const User = db.user;
const Booth = db.booth;
const Banner = db.banner;
const Program = db.program;
const Graphics = db.graphics;
const VFair = db.vfair;
const Link = db.menu;
const Mat = db.mat;
const Reps = db.reps;

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  initiate();
});

const initiate = () => {
  User.create({
    role: "admin",
    email: "admin@admin.com",
    password: "admin",
    name: "Administrator Name",
    logo: "assets/images/avatars/profile.jpg",
  });
  User.create({
    role: "student",
    email: "student@admin.com",
    password: "student",
    name: "Student Name",
    logo: "assets/images/avatars/profile.jpg",
  });
  User.create({
    role: "representative",
    email: "representative@admin.com",
    password: "representative",
    name: "Representative Name",
    logo: "assets/images/avatars/profile.jpg",
  });

  User.create({
    role: "school",
    email: "school@admin.com",
    password: "school",
    name: "School Name",
    logo: "assets/images/avatars/profile.jpg",
  });
  User.create({
    role: "school",
    email: "s1@admin.com",
    password: "school",
    name: "s1",
    logo: "assets/images/avatars/profile.jpg",
  });
  for (let index = 1; index < 10; index++) {
    User.create({
      role: "university",
      email: `u${index}@admin.com`,
      password: "university",
      name: `University ${index}`,
      logo: "assets/images/avatars/profile.jpg",
    });
    Reps.create({
      universityId: `${index}`,
      name: `Represent ${index}`,
      email: `r${index}@admin.com`,
      password: "represent",
      title: "Manager",
    });
    Graphics.create({
      universityId: index,
      tv: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla",
      tvLnk: "https://www.youtube.com/watch?v=X_WokV8d6BY",
    });
    Link.create({
      universityId: index,
      title: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla",
      url: "https://www.youtube.com/watch?v=X_WokV8d6BY",
      position: index,
    });
    Mat.create({
      universityId: index,
      title: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla",
      type: 2,
      url: "https://www.youtube.com/watch?v=X_WokV8d6BY",
    });
    for (let fairIndex = 1; fairIndex < 10; fairIndex++) {
      Booth.create({
        universityId: index,
        fairId: fairIndex,
        layout: Math.floor(Math.random() * 2),
        color: index,
        ready: index,
        position: index,
      });
      Banner.create({
        fairId: fairIndex,
        base64: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla",
        link: "assets/images/calendar/spring.jpg",
        position: index,
      });
    }
  }

  Program.create({
    spec_name: "Math",
  });
  Program.create({
    spec_name: "English",
  });
  Program.create({
    spec_name: "Biology",
  });
  VFair.create({
    logo: "assets/images/avatars/profile.jpg",
    start: "2020-08-14 14:35:00",
    end: "2020-08-14 14:35:01",
    g12: 4,
    g11: 6,
    max: 10,
    school: 11,
    name: "vfair1",
  });
  VFair.create({
    logo: "assets/images/avatars/profile.jpg",
    start: "2020-08-14 14:35:00",
    end: "2020-08-14 14:35:01",
    g12: 4,
    g11: 6,
    max: 10,
    school: 11,
    name: "vfair2",
  });
  VFair.create({
    logo: "assets/images/avatars/profile.jpg",
    start: "2020-08-14 15:35:00",
    end: "2020-08-14 15:35:01",
    g12: 6,
    g11: 6,
    max: 10,
    school: 12,
    name: "vfair3",
  });
  VFair.create({
    logo: "assets/images/avatars/profile.jpg",
    start: "2020-08-14 16:35:00",
    end: "2020-08-14 16:35:01",
    g12: 6,
    g11: 6,
    max: 10,
    school: 13,
    name: "vfair4",
  });
};

require("./app/routes/auth")(app);
require("./app/routes/banners")(app);
require("./app/routes/placement")(app);
require("./app/routes/tables")(app);
require("./app/routes/booth")(app);

module.exports = app;
