
export const isInt = (input: string): boolean => /^\d+$/.test(input)

export const isDecimal = (input: string): boolean => /^\d+(\.\d+)?$/.test(input)
