import  express  from 'express';
import mongoose  from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('🆗 MongoDB is connected!');

    const port = 3000;
    const app = express();

    app.listen(3001, () => {
      console.log(`🔥 Server is running in http://localhost:${port}`);
    });
  })
  .catch(() => console.log('❌ Error connecting to mongodb!'));
