import express, { Express } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { addReading } from './repository';

// -----
// SETUP
dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// ----------
// END POINTS

// parse incoming data, and save it to the database
// data is of the form:
//  {timestamp} {name} {value}
app.post('/data', async (req, res) => {
	try {
		const input = req.body.split('\n')

		input.forEach((reading: string) => addReading(reading))

		res.json({ success: true })
	}
	catch(err: unknown) {
		const error = err as Error

		console.error(error.message)
		return res.json({ success: false })
	}
})

// TODO: check what dates have been requested, and retrieve all data within the given range
app.get('/data', async (req, res) => {

	// getReading(...)

	return res.json({ success: false });
});

app.listen(PORT, () => console.log(`Running on port ${PORT} ⚡`));
