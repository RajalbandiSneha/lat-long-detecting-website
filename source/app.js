const path=require('path')
const express=require('express')
const hbs=require('hbs')
const add=require('./use.js')

const app=express()

const dirpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templets/views')
const parpath=path.join(__dirname,'../templets/partials')

app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(parpath)

app.use(express.static(dirpath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'aaa'
    })
})

app.get('/json',(req,res)=>{
    res.send({
        name:'xxxx',
        age:12
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must provide search term'
        })
    }
    res.send({
        products:{}
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide address term'
        })
    }
    add.g(req.query.address,(error,{lat,lan}={})=>
    {
        if(error)
        {
            return res.send('error while reading')
        }
        add.f(lat,lan,(error,data)=>{
            if(error){
                return res.send('error again')
            }
        res.send({
            address:req.query.address,
            lat,
            lan
        })
        })
    })
})

app.get('*',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'aaa',
        errmsg:'page not found'
    })
})

app.listen(3000,()=>{
    console.log('started')
})