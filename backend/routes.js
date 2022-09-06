const express =require('express')
const TM =require('./Table.model')
const UM=require('./User.model')
const Tablerouter = express.Router()
const auth =require('./Middleware.js')



Tablerouter.get('/',auth,async(req,res)=>{
   try{
    let table=await TM.find({userId:req.userId});

    res.status(200).json(table)
   }
   catch(err){
    return res.status(400).json(err)
   }
})

Tablerouter.get('/read',async(req,res)=>{
    try{
  
 
     res.status(200).json('/')
    }
    catch(err){
     return res.status(400).json(err)
    }
 })
 

Tablerouter.post('/add',auth,async(req,res)=>{
    const post = req.body;
    console.log("wwwr",req.userId)
    const newPostMessage = new  TM({ ...post, userId: req.userId })

    try {
        await newPostMessage.save();

        res.status(200).json(newPostMessage );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 
})



Tablerouter.route('/:id').get(async(req,res)=>{
    try{
        const Tablebyid = await TM.findById(req.params.id);
        res.status(200).json(Tablebyid);

    }
    catch(err){
       res.status(400).json(`error is :${err}`)
    }
})

Tablerouter.route('/:id').delete(async(req,res)=>{
    try{
        await TM.findByIdAndDelete(req.params.id);
        res.status(200).json("table successfully deleted")
    }
    catch(err){
       res.status(400).json(`error${err}`)
    }
})


//teams

Tablerouter.route('/teams/add/:id').post(async(req,res)=>{
    try{
      
        let Tablefu=await TM.findByIdAndUpdate(req.params.id,{$push:{Teams:{team:req.body.Teams}}});
        await Tablefu.save();
        res.status(200).json(Tablefu);
    }
    catch(err){
       res.status(400).json(`error:${err}`)
    }
})

Tablerouter.route('/:id/teams/delete/:idofteam').delete(async(req,res)=>{
    try{
        const tablebyid=await TM.findById(req.params.id);
        await tablebyid.Teams.pull(req.params.idofteam)
        await tablebyid.save()
        res.status(200).json( tablebyid.Teams)
       
    }
    catch(err){
       res.status(400).json(`error${err}`)
    }
})

//results
Tablerouter.route('/results/add/:id').post(async(req,res)=>{
    try{
      
        let Tablefu=await TM.findByIdAndUpdate(req.params.id,{$push:{Match:{arrofresults:req.body}}});
        await Tablefu.save();
        res.status(200).json(Tablefu.Match);
    }
    catch(err){
       res.status(400).json(`error:${err}`)
    }
})

Tablerouter.route('/results/get/:id').get(async(req,res)=>{
    try{
      
        let Tablefu=await TM.findById(req.params.id);
        res.status(200).json(Tablefu.Match);
    }
    catch(err){
       res.status(400).json(`error:${err}`)
    }
})

Tablerouter.route('/results/:id/delete/:idofthematch').delete(async(req,res)=>{
    try{
        const tablebyid=await TM.findById(req.params.id);
        await tablebyid.Match.pull(req.params.idofthematch)
        await tablebyid.save()
        res.status(200).json( tablebyid.Match)
       
    }
    catch(err){
       res.status(400).json(`error${err}`)
    }
})



module.exports=Tablerouter;