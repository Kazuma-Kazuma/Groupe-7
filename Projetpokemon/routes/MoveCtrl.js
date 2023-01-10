const express = require('express');
const jwt = require('express-jwt');
const app = express();
const Move = require('/models/move');

const handleError = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

const checkJWT = jwt({ secret: 'BeeB' }).unless({ path: ['/Users/login'] });

app.use(checkJWT);
app.use(handleError);

//Get all moves
app.get('/', async (req, res) => {
    try {
        const moves = await Move.findAll();
        res.json(moves);
    } catch (err) {
        handleError(err, req, res);
    }
});

// Get one move by id
app.get('/:id', async (req, res) => {
    try {
        const move = await Move.findById(req.params.id);
        if (!move) {
            res.status(404).json({ message: 'Move not found' });
        } else {
            res.json(move);
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

// Create a move
app.post('/', async (req, res) => {
    try {
        const move = await Move.create({
            name: req.body.name,
            effect: req.body.effect
        });
        res.status(201).json(move);
    } catch (err) {
        handleError(err, req, res);
    }
});

// Update an move
app.put('/:id', async (req, res) => {
    if (req.user.role !== 'isAdmin') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const move = Move.findById(req.params.id);
        if (!move) {
            res.status(404).json({ message: 'Move not found' });
        } else {
            await move.update({
                name: req.body.name,
                effect: req.body.effect
            });
            res.json(move);
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

// Delete an move
app.delete('/:id', async (req, res) => {
    try {
        const move = await Move.findById(req.params.id);
        if (!move) {
            res.status(404).json({ message: 'Move not found' });
        } else {
            await move.destroy();
            res.status(204).json({ message: 'Move deleted' });
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

module.exports = app;