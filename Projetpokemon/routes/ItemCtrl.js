const express = require('express');
const jwt = require('express-jwt');
const app = express();
const Item = require('/models/item');

const handleError = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

const checkJWT = jwt({ secret: 'my-secret-key' }).unless({ path: ['/login'] });

app.use(checkJWT);
app.use(handleError);

//Get all items
app.get('/', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (err) {
        handleError(err, req, res);
    }
});

// Get one item by id
app.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.json(item);
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

// Create an item
app.post('/', async (req, res) => {
    try {
        const item = await Item.create({
            name: req.body.name,
            effect: req.body.effect
        });
        res.status(201).json(item);
    } catch (err) {
        handleError(err, req, res);
    }
});

// Update an item
app.put('/:id', async (req, res) => {
    if (req.user.role !== 'moderator') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const item = Item.findById(req.params.id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            await item.update({
                name: req.body.name,
                effect: req.body.effect
            });
            res.json(item);
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

// Delete an item
app.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            await item.destroy();
            res.status(204).json({ message: 'Item deleted' });
        }
    } catch (err) {
        handleError(err, req, res);
    }
});

module.exports = app;