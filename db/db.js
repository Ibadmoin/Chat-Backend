import mongoose from "mongoose";
import chalk from "chalk";
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });
        console.log(chalk.bgGreen("Database connected successfully!"));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDb;