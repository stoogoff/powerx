
export const sortByProperty = (prop: string, descending: boolean = false) => {
	return (a: any, b: any): number => {
		a = a[prop]
		b = b[prop]

		if(a == b) return 0

		const result = a < b ? -1 : 1

		return descending ? result * -1 : result
	}
}

export const sum = (a: number, b: number): number => a + b

export const average = (input: number[]): number =>
	input.reduce(sum, 0) / input.length
