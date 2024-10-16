
export const isInt = (input: string): boolean => /^\d+$/.test(input)

export const isDecimal = (input: string): boolean => /^\d+(\.\d+)?$/.test(input)

export const isDate = (input: string): boolean => /^\d{4}-\d{2}-\d{2}$/.test(input)
