import mongoose from 'mongoose';

export default function connectDB() {
  mongoose.connect("mongodb+srv://guest:guest@files-manager-cluster.rqhsejc.mongodb.net/t4-hacksprint?retryWrites=true&w=majority&appName=Files-Manager-Cluster")
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err));
}
