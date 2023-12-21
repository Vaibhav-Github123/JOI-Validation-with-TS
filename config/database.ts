import mongoose, { connect } from "mongoose";

const DBURL = `${process.env.MongodbURL}`

mongoose.connect(DBURL).then(()=>{
    console.log("DB Connected Successfully Done..");
}).catch((error)=>{
    console.log(error);
})

export default connect