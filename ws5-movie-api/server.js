require("dotenv").config(); // Import and run the dotenv config to load .env variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
// Replace this with your real connection string from MongoDB Atlas
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    });
    // ... Mongoose connection code from above ...
const movieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        year: Number,
        director: String,
        rating: Number
    },
    { timestamps: true }
);
const Movie = mongoose.model("Movie", movieSchema);
// ... Test route and app.listen code from above ...
// ... Mongoose model code from above ...
// GET /api/movies - return all movies
app.get("/api/movies", async (req, res) => {
    try {
        const movies = await Movie.find({}).limit(50);
        res.status(200).json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});
// GET /api/movies/:id - return one movie by id
app.get("/api/movies/:id", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(400).json({ error: "Invalid id" });
    }
});
// POST /api/movies - create a new movie
app.post("/api/movies", async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: "Invalid movie data" });
    }
});
// PUT /api/movies/:id - update movie
app.put("/api/movies/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(400).json({ error: "Invalid update data" });
    }
});
// DELETE /api/movies/:id - delete movie
app.delete("/api/movies/:id", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.status(200).json({ message: "Deleted", id: movie._id });
    } catch (err) {
        res.status(400).json({ error: "Invalid id" });
    }
});
// ... Test route and app.listen code from before ...
// Simple test route
app.get("/", (req, res) => {
    res.json({ message: "WS-5 Movie API running" });
});
app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
});