const express = require('express');
const app = express();
const cors = require('cors');

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Digestive", brand: "McVitie's" },
  { name: "Hobnob", brand: "McVitie's" },
  { name: "Jammie Dodger", brand: "Burton's Biscuit Company" },
  { name: "Custard Cream", brand: "Crawford's" },
  { name: "Shortbread", brand: "Walkers" },
  { name: "Bourbon", brand: "Crawford's" },
  { name: "Ginger Nut", brand: "McVitie's" },
  { name: "Rich Tea", brand: "McVitie's" },
  { name: "Chocolate Digestive", brand: "McVitie's" },
  { name: "Caramel Wafer", brand: "Tunnock's" }
];


app.use(cors());
app.use(express.json())

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});

  app.get("/api/teas",(req,res) => {
    res.json(teas)
  })

  app.get("/api/teas/:id",(req,res) => {
    res.json(teas[req.params.id])
  })

  app.post("/api/teas",(req,res) => {
    // console.log(`req.body`,req.body)
    teas.push(req.body)
    res.json(teas)
  })

  //delete
  app.delete("/api/teas/:id",(req,res) => {
    teas.splice(req.params.id,1)

    res.json(teas)
  })
  
  //update
  app.put("/api/teas/:id",(req,res) => {
    teas.splice(req.params.id,1,req.body)
    // teas.push(req.body)
    // teas[req.params.id] = req.body
    res.json(teas)
  })

  app.get("/api/biscuits",(req,res) => {
    res.json(biscuits)
  })


// Update:
// handle a put request made to /api/teas/:id
// update the appropriate tea object in the array with the new tea object sent on the request’s body object
// send back all the teas data as JSON
// Test each of the routes with Insomnia