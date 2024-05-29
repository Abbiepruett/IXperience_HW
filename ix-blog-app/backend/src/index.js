const express = require ("express")
const cors = require("cors")
const port = 8000;//front end of port 3000

const app = express();

app.use(cors());

app.use(express.json())

app.use("/api/blogs", blogRoutes);

app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`);
})