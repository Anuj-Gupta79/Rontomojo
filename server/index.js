import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is running fine!!");
})


app.listen(PORT, ()=>{
    console.log(`server is listening on http://localhost:${PORT}`);
})
