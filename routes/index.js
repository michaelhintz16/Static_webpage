
//this allows the / after locolhost300
const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.render('pages/index')
})

router.get('/login',(req,res)=>{
  res.render('pages/login')
})

router.get('/register',(req,res)=>{
  res.render('pages/register')
})

module.exports = router