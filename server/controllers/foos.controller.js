const Foo = require("../models/Foo.model");

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

const foosController = {};

// CREATE FOO
foosController.create = catchAsync(async (req, res) => {
  const event = await Event.create({ owner: req.userId, ...req.body });
  sendResponse(res, 201, true, event);
});

// READ FOO
foosController.read = catchAsync(catchAsync(async (req, res, next) => {}));

// UPDATE FOO
foosController.update = catchAsync(catchAsync(async (req, res) => {}));

// DESTROY FOO
foosController.destroy = catchAsync(catchAsync(async (req, res) => {}));

foosController.list = catchAsync(async (req, res) => {
  sendResponse(res, 201, true, {
    foos: [
      [
        "_dlg7lume7",
        "Alpha",
        "Mozilla",
        "Austin",
        "Frontend Dev (JavaScript ReactJS VueJS)",
        460000,
      ],
      ["_yygwfjup2", "Bravo", "Hive", "New York", "Frontend Engineer", 480000],
      [
        "_cctcstona",
        "Charlie",
        "Vin",
        "Tokyo",
        "Software Engineer - Marketplace",
        300000,
      ],
      [
        "_skgczuzc7",
        "Delta",
        "Envision",
        "Hong Kong",
        "Software Engineer",
        210000,
      ],
      [
        "_zaaci9or5",
        "Echo",
        "Heroku",
        "Sydney",
        "Software Engineer - Marketplace",
        370000,
      ],
      [
        "_fpu8po0kg",
        "Foxtrot",
        "Apple",
        "Singapore",
        "Solutions Architect",
        500000,
      ],
      ["_ebnl8yb09", "Golf", "Heroku", "Austin", "Backend Engineer", 260000],
      [
        "_13lmj4v9b",
        "Hotel",
        "eBay",
        "Singapore",
        "Front-End Engineer - Loop Commerce",
        460000,
      ],
      [
        "_tzl5fdcuy",
        "India",
        "Tinder",
        "London",
        "Full-stack Engineer (ReactJS, NodeJS)",
        460000,
      ],
      [
        "_8x7wfx7xt",
        "Juliet",
        "Grab",
        "New York",
        "Engineering Manager",
        460000,
      ],
      [
        "_lhb3g6ryt",
        "Kilo",
        "Twilio",
        "Seoul",
        "Frontend Engineer - EU & North America",
        360000,
      ],
      ["_a4atj697k", "Lima", "Expedia", "Tokyo", "Full Stack Engineer", 300000],
      ["_a6ggel2nn", "Mike", "Adobe", "Hanoi", "Frontend Engineer", 270000],
      [
        "_61xdypzrm",
        "November",
        "MongoDB",
        "San Francisco",
        "Full-Stack Engineer - Open to U.S. Remote",
        250000,
      ],
      ["_2lz9oluqu", "Oscar", "Mozilla", "HCMC", "Frontend Engineer", 420000],
      ["_lpcuig4bp", "Papa", "EA", "Sydney", "Software Engineer", 260000],
      [
        "_s6pq45vtm",
        "Quebec",
        "Paypal",
        "Singapore",
        "Software Engineer - Marketplace",
        280000,
      ],
      [
        "_wmdzi436w",
        "Romeo",
        "Coinbase",
        "London",
        "Full Stack Software Engineer",
        420000,
      ],
      ["_50ub5i9vr", "Sierra", "eBay", "Austin", "Backend Engineer", 270000],
      [
        "_49cjsnsvh",
        "Tango",
        "Expedia",
        "Toronto",
        "Frontend Engineer",
        270000,
      ],
      [
        "_zo13nqsfr",
        "Uniform",
        "Paypal",
        "New York",
        "Engineering Manager (ReactJS/JavaScript)",
        380000,
      ],
      [
        "_z1t6hoei3",
        "Victor",
        "Mozilla",
        "Singapore",
        "Software Engineer - Video Organization",
        490000,
      ],
      [
        "_cxu9rf1i1",
        "Whiskey",
        "Twitch",
        "New York",
        "Full Stack Software Engineer",
        400000,
      ],
      [
        "_bitju6rcd",
        "X-ray",
        "Udacity",
        "Hong Kong",
        "Solutions Architect",
        380000,
      ],
      [
        "_unz2zlgwg",
        "Yankee",
        "eBay",
        "HCMC",
        "Frontend Dev (JavaScript ReactJS VueJS)",
        360000,
      ],
      [
        "_u0qvysn4w",
        "Zulu",
        "Envision",
        "Paris",
        "Engineering Manager",
        500000,
      ],
    ],
  });
});

module.exports = foosController;
