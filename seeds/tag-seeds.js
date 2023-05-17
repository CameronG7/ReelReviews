const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Comedy",
  },
  {
    tag_name: "Action",
  },
  {
    tag_name: "Drama",
  },
  {
    tag_name: "Horror",
  },
  {
    tag_name: "Family",
  },
  {
    tag_name: "Romance",
  },
  {
    tag_name: "Thriller",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
