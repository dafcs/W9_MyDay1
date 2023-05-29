const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

app.use(express.json());
app.use(cors());

const teasRouter = createRouter(teas);
app.use('/api/teas', teasRouter);

const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits', biscuitsRouter);

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
