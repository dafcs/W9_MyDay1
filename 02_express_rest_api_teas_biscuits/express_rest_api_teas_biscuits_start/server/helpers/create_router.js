const express = require('express')

const createRouter = function(data) {

    const router = express.Router();

    router.get("/",(req,res) => {
        res.json(data)
      })
    
      router.get("/:id",(req,res) => {
        res.json(data[req.params.id])
      })
    
      router.post("/",(req,res) => {
        // console.log(`req.body`,req.body)
        data.push(req.body)
        res.json(data)
      })
    
      //delete
      router.delete("/:id",(req,res) => {
        data.splice(req.params.id,1)
    
        res.json(data)
      })
      
      //update
      router.put("/:id",(req,res) => {
        data.splice(req.params.id,1,req.body)
        // data.push(req.body)
        // data[req.params.id] = req.body
        res.json(data)
      })

      return router

}

module.exports = createRouter