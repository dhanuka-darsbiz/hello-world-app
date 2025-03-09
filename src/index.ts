import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080; // This is the crucial change

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from Node.js and TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});