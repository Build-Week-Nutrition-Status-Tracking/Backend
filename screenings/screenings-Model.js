const db = require("../data/dbConfig");

module.exports = {
  getCountries,
  getCountryById,
  getCommunities,
  findAllById,
  getCommunityById,
  getKids,
  getKid,
  addCountry,
  addCommunity,
  addKid,
  deleteKid
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

function findAllById(id) {
  return db(`${id}`);
}

function getCommunityById(id) {
  return db("community").where("id", "=", id);
}

// function getKids(country_id, communityID) {
//   findAllById(country_id);
//   return (
//     db("kids")
//       // .join("country", "kids.country_id", "=", "country.id")
//       // .select("country.country", "kids.*")
//       // .where("kids.country_id", "=", country_id)
//       .join("community", "kids.community_id", "=", "community.id")
//       .select("community.name", "kids.*")
//       .where("kids.community_id", "=", communityID)
//   );
// }

function getKids(communityID) {
  return db("kids")
    .join("community", "kids.community_id", "=", "community.id")
    .select("community.name", "kids.*")
    .where("kids.community_id", "=", communityID);
}

function getKid(id) {
  return db("kids").where("id", "=", id);
}

function addCountry(newCountry) {
  return db("country").insert(newCountry);
}

function addCommunity(newCommunity) {
  return db("community").insert(newCommunity);
}

function addKid(newKid) {
  return db("kids").insert(newKid);
}

function deleteKid(id) {
  return db("kids")
    .where("id", "=", id)
    .del();
}
