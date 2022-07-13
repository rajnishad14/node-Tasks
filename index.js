const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const  { tasks } = require('./routes/tasks');
const { connectDb } =  require('./db/connect');

const app = express();
const port = 5000;
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);

const start = async () => {
	const dbConnection = process.env.MONGO_URI;
	try {
		await connectDb(dbConnection);
		app.listen(port, () => {
			console.log(`running at port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
