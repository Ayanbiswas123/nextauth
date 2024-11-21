import mongoose from 'mongoose';

export async function connect() {
    try {
        const DB_name:string='nextauth';

        mongoose.connect(`${process.env.MONGO_URI!}/${DB_name}`,
            {
                dbName: DB_name // Specify the database name here
            }
        );
        const connection = mongoose.connection;
        

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}