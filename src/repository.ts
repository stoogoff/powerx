
import { sortByProperty, average } from './utils/list'
import { Database } from './database'
import { TypeValues, Reading, ReadingsResponse } from './models'

const database = new Database<Reading>()

export const addReading = (input: string): Reading => {
	const toAdd = Reading.parse(input)

	database.addRecord(toAdd)

	return toAdd
}

export const getReadings = (from: Date, to: Date): ReadingsResponse => {
	const readings = database
		.allRecords()
		.filter((reading: Reading) => reading.date >= from && reading.date <= to)
		.sort(sortByProperty('date', false))

	const daily: any = {}

	readings.forEach((reading: Reading) => {
		const isoDate = reading.date.toISOString()
		const dateString = isoDate.substring(0, isoDate.indexOf('T'))

		if(!(dateString in daily)) {
			daily[dateString] = {
				current: [],
				voltage: [],
			}
		}

		switch(reading.type) {
			case TypeValues.Voltage:
					daily[dateString].voltage.push(reading.value)
					break
			case TypeValues.Current:
					daily[dateString].current.push(reading.value)
					break
		}
	})

	console.log(readings)
	console.log(daily)

	return {
		readings: readings.map((reading: Reading) => reading.toJson()),
		daily: Object.keys(daily).map((key: string): any => ({
			timestamp: key,
			type: 'Power',
			value: average(daily[key].voltage) * average(daily[key].current)
		})),
	}
}
