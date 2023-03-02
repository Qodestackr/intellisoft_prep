const express = require("express");
const router = express.Router();

const {
    registerUser,
    loadUserDetails
} = require("../controllers/controllers");

router.get('/', (req, res) => {
    res.send("index route, You should'nt be seeing this")
});

router.post('/user', registerUser);

router.get('/user/:id', loadUserDetails);

module.exports = router;