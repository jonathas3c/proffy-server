import express from 'express';

const app = express();

// app.get('/users', (req, res) => {
//     const users = [
//         { name: 'Jonathas', age: 25 },
//         { name: 'Ilehana', age: 24 },
//         { name: 'William', age: 23 },
//         { name: 'Beatriz', age: 22 },
//         { name: 'Pereira', age: 74 },

//     ]

//     return res.json(users);
// } )

app.post('/users', (req, res) => {
    const users = [
        { name: 'Jonathas', age: 25 },
        { name: 'Ilehana', age: 24 },
        { name: 'William', age: 23 },
        { name: 'Beatriz', age: 22 },
        { name: 'Pereira', age: 74 },

    ]

    return res.json(users);
} )

app.listen(3333)