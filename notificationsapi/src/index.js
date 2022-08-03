const express = require("express");
const { db } = require("./models/index.js");
const { router } = require("./routes/index.js");
const cors = require('cors')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(express.json());
app.use(router);

(() => {
  db.sequelize.sync({ alter:true });
})();

app.listen(port, () => {
  console.log(
    `Example app listening to your requests at http://localhost:${port}`
  );
});
