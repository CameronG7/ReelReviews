const { Tag } = require("../models");

const tagData = [
  {
    name: "Comedy",
  },
  {
    name: "Action",
  },
  {
    name: "Drama",
  },
  {
    name: "Horror",
  },
  {
    name: "Family",
  },
  {
    name: "Romance",
  },
  {
    name: "Thriller",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
