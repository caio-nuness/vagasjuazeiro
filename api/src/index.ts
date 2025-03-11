import  express  from 'express';

const app = express();
const port = 3000;

app.listen(3001, () => {
  console.log(`🔥 Server is running in http://localhost:${port}`);
});
