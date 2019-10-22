const express = require("express");
const db = require("./screenings-Model");

const router = express.Router();

//WILL NEED ADMIN, USER, AND TOKEN VERIFICATION ON ALL POSTS AND PUTS

//POSSIBLY MAKE A DELETE CHILDREN.ID OPTIONAL FOR ADMIN

router.get("/country", (req, res) => {
  db.getCountries()
    .then(countries => {
      res.status(200).json(countries);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting countries"
      });
    });
});

router.get("/country/:id", (req, res) => {
  const id = req.params.id;

  db.getCountryById(id)
    .then(country => {
      res.status(200).json(country);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting country ID"
      });
    });
});

router.get("/country/:id/communities", (req, res) => {
  const country_id = req.params.id;

  db.getCommunities(country_id)
    .then(communities => {
      res.status(200).json(communities);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting communities"
      });
    });
});

router.get("country/:id/communities/:communityID", (req, res) => {
  const { id, communityID } = req.params;

  db.getKids(id, communityID)
    .then(kids => {
      res.status(200).json(kids);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting kids information"
      });
    });
});

module.exports = router;
