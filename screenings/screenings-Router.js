const express = require("express");
const db = require("./screenings-Model");
const mw = require("../data/middleware/restriced-middleware");

const router = express.Router();

//WILL NEED ADMIN, USER, AND TOKEN VERIFICATION ON ALL POSTS AND PUTS

//POSSIBLY MAKE A DELETE CHILDREN.ID OPTIONAL FOR ADMIN

//GET COUNTRIES
router.get("/country", mw.tokenVerify, (req, res) => {
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

//ADD COUNTRY
router.post("/country", mw.tokenVerify, mw.adminVerify, (req, res) => {
  const newCountry = req.body;

  db.addCountry(newCountry)
    .then(newCountry => {
      res.status(200).json(newCountry);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while adding a country"
      });
    });
});

//GET SPECIFIC COUNTRY
router.get("/country/:id", mw.tokenVerify, (req, res) => {
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

//GET COMMUNITIES OF A COUNTRY
router.get("/country/:id/communities", mw.tokenVerify, (req, res) => {
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

//POST COMMUNITIES OF A COUNTRY (STILL HAVE TO PUT IN COUNTRY_ID)
router.post(
  "/country/:id/communities",
  mw.tokenVerify,
  mw.adminVerify,
  (req, res) => {
    const newCommunity = req.body;

    db.addCommunity(newCommunity)
      .then(communities => {
        res.status(200).json(communities);
      })
      .catch(error => {
        res.status(500).json({
          error: error,
          message: "There was a 500 server error while posting communities"
        });
      });
  }
);

//GET SPECIFIC COMMUNITY (PUT IN COUNTRY_ID)
router.get("/communities/:id", mw.tokenVerify, (req, res) => {
  const id = req.params.id;

  db.getCommunityById(id)
    .then(community => {
      res.status(200).json(community);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting community id"
      });
    });
});

//GET KIDS FOR SPECIFIC COMMUNITY /country/:id/communities/:communityID/kids"
router.get("/communities/:id/kids", mw.tokenVerify, (req, res) => {
  const id = req.params.id;

  db.getKids(id)
    .then(kids => {
      res.status(200).json(kids);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting kids"
      });
    });
});

//POSTING A NEW KID (HAVE TO ADD COUNTRY_ID AND COMMUNITY_ID)
router.post(
  "/communities/:id/kids",
  mw.tokenVerify,
  mw.adminVerify,
  (req, res) => {
    const newKid = req.body;

    db.addKid(newKid)
      .then(kid => {
        res.status(200).json(kid);
      })
      .catch(error => {
        res.status(500).json({
          error: error,
          message: "There was a 500 server error while posting kids"
        });
      });
  }
);

//GET KID ID
router.get("/kids/:id", mw.tokenVerify, (req, res) => {
  const id = req.params.id;

  db.getKid(id)
    .then(kids => {
      res.status(200).json(kids);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting kid id"
      });
    });
});

//REMOVES KID
router.delete("/kids/:id", mw.tokenVerify, mw.adminVerify, (req, res) => {
  const id = req.params.id;

  db.deleteKid(id)
    .then(deletedKid => {
      res.status(200).json(deletedKid);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "There was a 500 server error while getting kid id"
      });
    });
});

module.exports = router;
