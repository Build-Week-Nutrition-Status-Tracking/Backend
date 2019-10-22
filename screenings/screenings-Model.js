const db = require("../data/dbConfig");

module.exports = {
  getCountries,
  getCountryById,
  getCommunities,
  getKids
};

function getCountries() {
  return db("country");
}

function getCountryById(id) {
  return db("country").where("id", "=", id);
}

function getCommunities(country_id) {
  return db("community")
    .join("country", "community.country_id", "=", "country.id")
    .select("country.country", "community.*")
    .where("community.country_id", "=", country_id);
}

function getKids(id, communityID) {
  findAllById(id);
  return db("kids")
    .join("country", "community.country_id", "=", "country.id")
    .select("country.country", "community.name")
    .where("community.country_id", "=", id)
    .join("community", "kids.country_id", "=", "community.id")
    .select("community.name", "kids.*")
    .where("kids.community_id", "=", communityID);
}
