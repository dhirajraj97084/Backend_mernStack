import {connect} from 'mongoose';
import { DB_Name } from '../constants.js';

const MONGODB_URL="mongodb+srv://dhirajtiwari97084:backend4545@backend.z2omzhu.mongodb.net/"
const connectDB=async()=>{
    try {
        await connect(`${MONGODB_URL}/${DB_Name}`);
        console.log('database connected to mongoDB');
    } catch (error) {
        console.log('your database connection FAILED');
    }
}

export default connectDB;