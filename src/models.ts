
import { isInt, isDecimal } from './utils/number'

// valid type values
export enum TypeValues {
  Voltage = 'Voltage',
  Current = 'Current',
}

// Reading model
export class Reading {
	timestamp: number
	type: string
	value: number

	constructor(timestamp: number, type: string, value: number) {
		this.timestamp = timestamp
		this.type = type
		this.value = value
	}

	static parse(input: string): Reading {
		const [timestamp, type, value] = input.split(' ')

		// validate input
		if(!isInt(timestamp)) {
			throw new Error('Invalid timestamp')
		}
		if(type !== TypeValues.Voltage && type !== TypeValues.Current) {
			throw new Error('Invalid type')
		}
		if(!isDecimal(value)) {
			throw new Error('Invalid value')
		}

		return new Reading(parseInt(timestamp), type, parseFloat(value))
	}
}
