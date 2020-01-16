let express = require("express");
let app=express();
// console.log(app);


let port = process.env.NODE_ENV || 2000;

let allsongs=[
    {
    id:1,
    name:"Tum Jo Aaye",
    singer:"Tulsi kumar",
    movie:"Once Upon a time in mumbai",
    duration: 4.20,
    relase_year:"2010",
    price:10
    },

    {
        id:2,
        name:"Sanam re",
        singer:"Arjit Singh",
        movie:"Sanam re",
        duration: 4.30,
        relase_year:"2015",
        price:12
    },

    {
    id:3,
    name:"Kya hua tera waada",
    singer:"Kishore  kumar",
    movie:"Phool aur kate",
    duration: 3.50,
    relase_year:"1976",
    price:10
    },

    {
        id:5,
        name:"Akhiyo ke jharko se",
        singer:"Lata mangeshkar",
        movie:"Akhiyo ke jharko se",
        duration: 5.20,
        relase_year:"1975",
        price:15
   }
];


app.get("/api/allsongs", (req,res) =>{
    res.send(songs);
});


app.get("/api/song/:id",(req,res) => {
    let song = allsongs.find(item => item.id === parseInt(req.params.id));
    if(!song)  {return res.status(404).send ("Invalid song ID") };
    res.send(song);
})





//new data insert......data post.....store.....then response


app.listen(port,() =>{console.log(`Port working in ${port}`)});


