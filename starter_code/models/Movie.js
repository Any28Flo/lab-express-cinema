//Here we're going to define the schema with the atributtes we need to 
const mongoose  = require ('mongoose');

const Movie = new mongoose.Schema({
  //Define the attributes
  title:{type: String, trim: true, default : ''},
  director:{type: String, trim: true, default : ''},
  stars:{type: Array},
  image :{type: String, trim: true, default : ''},
  description :{type: String, trim: true, default : ''},
  showtimes:{type: Array}
})

module.exports = mongoose.model('Movie',Movie);


/* db.movies.insert({
   "title" : "A Wrinkle in Time",
    "director" : "Ava DuVernay",
    "stars" : ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
    "image" : "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
    "showtimes": ["13:00", "15:30", "18:00", "20:10", "22:40"]
})

db.movies.insert({
  "title" : "The Strangers: Prey at Night",
  "director" : "Johannes Roberts",
  "stars" : ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
  "image" : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "description" : "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
  "showtimes": ["13:50", "16:20", "19:20", "22:10"] 
}) */