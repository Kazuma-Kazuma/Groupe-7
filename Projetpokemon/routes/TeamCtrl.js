const express = require('express');
const jwt = require('express-jwt');
const app = express();
const Team = require('/models/team');

const handleError = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

const checkJWT = jwt({ secret: 'BeeB' }).unless({ path: ['/Users/login'] });

app.use(checkJWT);
app.use(handleError);

//Get all teams
app.get('/', async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (err) {
        handleError(err, req, res);
    }
});

// Get one team by id
app.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
        } else {
            res.json(team);
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

// Create a team
app.post('/', async (req, res) => {
    try {
        const team = await Team.create({
            name: req.body.name,
            effect: req.body.effect
        });
        res.status(201).json(team);
    } catch (err) {
        handleError(err, req, res);
    }
});

// Update an team
app.put('/:id', async (req, res) => {
    if (req.user.role !== 'isAdmin') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const team = Team.findById(req.params.id);
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
        } else {
            await team.update({
                name: req.body.name,
                effect: req.body.effect
            });
            res.json(team);
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

// Delete an team
app.delete('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
        } else {
            await team.destroy();
            res.status(204).json({ message: 'Team deleted' });
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

module.exports = app;