import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// CONFIG
import connectDB from './config/db.js';

const app = express();
const PORT = 3000;
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    
    let name = "Rob";
    
    res
        .status(200)
        .json(name);

});

app.post("/login", (req, res) => {
    
    var { userName, passWord } = req.body;

    if (userName === "Rob" && passWord === "pass123") {

        res
            .status(200)
            .json({
                message: "Login Successfully",
                status: "Success"
            });

    } else {

        res
            .status(403)
            .json({
                message: "Invalid username or password",
                status: "failed"
            });
        
    }

});

app.listen(PORT, () => {
    connectDB();
    console.log(`server running on port ${PORT}`);
})