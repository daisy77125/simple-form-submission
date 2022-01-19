const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static("public"));

app.post("/contact", function (req, res) {
  console.log(req.body.fname, req.body.surname);
  res.send(`${req.body.fname} ${req.body.surname}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
