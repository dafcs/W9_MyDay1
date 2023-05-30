const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./helpers/create_router.js')

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

const teasRouter = createRouter(teas)
const biscuitsRouter = createRouter(biscuits)
app.use('/api/teas',teasRouter)
app.use('/api/biscuits',biscuitsRouter)

