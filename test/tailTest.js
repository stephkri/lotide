const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail([]).length, 0);
assertEqual(tail([12]).length, 0);