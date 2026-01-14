import express from 'express';

const app = express();
const port = 3000;

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

        res.status(200).json({
            message: "Login Successfully",
            status: "Success"
        });

    } else {

        res.status(403).json({
            message: "Invalid username or password",
            status: "failed"
        });
        
    }

});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})