
import { Database } from './database'
import { Reading } from './models'

const database = new Database<Reading>()

export const addReading = (input: string): Reading => {
	const toAdd = Reading.parse(input)

	database.addRecord(toAdd)

	return toAdd
}
