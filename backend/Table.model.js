const mongoose =require('mongoose');
const UM = require('./User.model')

const TeamsModel = new mongoose.Schema({
    team:String
    
})



const ResultModel = new mongoose.Schema({
    arrofresults:Array
    
})


const TableModel = new mongoose.Schema(
    {
        userId:{
            type:String
        },
        organiser:{
            type:String,
            required:[true,'enter the organiser name']
        }
        ,tourneyname:{
            type:String,
            required:[true,"enter the tourney name"]
        },
        KillPoints:{
type:Number,
required:[true,"enter the No.of Matches"]
       },
       placepoints:[type=Number], 
       Teams:[TeamsModel],
      Match:[ResultModel],
      Overall:{
          
      },
      showcards:{type:Boolean}
    },{timestamps :true}
)


module.exports = mongoose.model('TM',TableModel)
