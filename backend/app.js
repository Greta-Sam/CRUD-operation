const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then((result) => {
    console.log('Connected to mongoDB');

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
})
.catch((err) => console.log(err));

const audiencesRouter = require('./routes/audiences');
app.use('/audiences', audiencesRouter);










/*app.post("/add", (req, res) => {
    const newAudience = new Audience({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: Number(req.body.phone),
    });
  
    newAudience
      .save()
      .then((audience) => console.log(audience))
      .catch((err) => res.json("Error " + err));
  });

app.get("/list", (req, res) => {
    Audience.find()
      .then((audiences) => res.json(audiences))
      .catch((err) => res.json("Error: " + err));

    });

app.put('/edit/:id', async (req, res) => {
    const updatedAudience = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
    }
    Audience.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updatedAudience },
        (req, res, err) => {
          if (!err) {
            console.log("Audience updated");
          } else {
            console.log(err);
          }
        }
      );
} );

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
  
    Audience.findByIdAndDelete({ _id: id }, (req, res, err) => {
      if (!err) {
        console.log("Audience deleted");
      } else {
        console.log(err);
      }
    });
  });*/

