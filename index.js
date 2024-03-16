import express from "express";
import cors from 'cors';

const app = express();
app.use(cors({
    origin: '*'
}));
app.get('/api', (req, res) => {
    res.json({key:"hello"});
});

const PORT = 10000

// listen port
app.listen(PORT, () => {
    console.log('server is litening', PORT);
});