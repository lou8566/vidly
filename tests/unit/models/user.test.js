const {User} = require("../../../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");


describe('user.generateAuthToken', () =>{
    it("Should return a valid JSON Token", () =>{
        const userObj = {_id: new mongoose.Types.ObjectId().toHexString(), 
            isAdmin: true};
        const user = new User(userObj);
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        expect(decoded).toMatchObject(userObj);
    })});

