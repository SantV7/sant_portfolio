import 'dotenv/config';
import { app } from "./app.ts";

const PORT = process.env.PORT || 2007

app.listen(PORT, () =>  console.log('Server is running...'))