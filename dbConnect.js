const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);


async function dbConnect(){
    let res= await client.connect();
    let db=res.db('backend');
    return db.collection('node');
   
}
module.exports=dbConnect;