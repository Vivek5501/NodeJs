const dbConnect=require('./dbConnect');

const insert=async ()=>{
    const db=await dbConnect();

    const res=await db.insertOne({name:'pqr',id:3,sal:2000,add:'100 pqr'});
    console.log(res);
}

insert();