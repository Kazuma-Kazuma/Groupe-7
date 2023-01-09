var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var models = require('../models');


module.exports = {
    register: function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var username = req.body.username;

        if(email == null || password == null || username == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
        }

        if(username.length >= 16 || username.length <= 2) {
            return res.status(400).json({ 'error': 'wrong username (must be length 3 - 15)' });
        }

        models.User.findOne({
            attributes: ['email'],
            where: { email: email }
        })
        .then(function(userFound) {
            if (!userFound){
                bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
                    var newUser = models.User.create({
                        email: email,
                        username: username,
                        password: bcryptedPassword,
                        isAdmin: 0
                    })
                    .then(function(newUser) {
                        return res.status(201).json({
                            'userId': newUser.id
                        });
                    })
                    .catch(function(err) {
                        return res.status(500).json({ 'error': 'cannot add user' });
                    });
                });
            }
            else {
                return res.status(409).json({ 'error': 'user already exist' });
            }
        })
        .catch(function(err) {
            return res.status(500).json({ 'error': 'unable to verify user' });
        });

    },
    login: function(req, res) {

    }
}