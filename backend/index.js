require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const Guest = require("./models/guests")
const mongoose = require("mongoose")

//middlewares
app.use(cors())
app.use(express.json());

//routes

app.get("/", (req, res) => {
    res.json({ name: "Hello world" })
})

// get guests
app.get("/guests", (req, res) => {
    Guest.find()
        .then(guests => {
            console.log('All guests:', guests);
            res.json(guests)
        })
        .catch(error => {
            console.error('Error retrieving guests:', error);
        });
})

// post guests 
app.post("/guests", (req, res) => {
    const body = req.body

    if (body === undefined) {
        return res.status(400).json({ error: 'content missing' })
    }

    const guest = new Guest({
        name: body.name,
        adults: body.adults,
        kids: body.kids,
        isGoing: body.isGoing
    })

    guest.save()
        .then(savedGuest => {
            res.json(savedGuest)
        })
        .catch(error => console.log(error))
})


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});