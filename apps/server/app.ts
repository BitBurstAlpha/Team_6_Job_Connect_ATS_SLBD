import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({ msg: 'Hello World' });
});

app.listen(8080, () => {
    console.log('server started - http://localhost:8080/');
});
