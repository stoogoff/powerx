
import { isDate } from './utils/validators'

export const verifyQueryString = (req: any, res: any, next: any) => {
	if(req.query.from && !isDate(req.query.from)) {
		return next(new Error('Invalid from date'))
	}

	if(req.query.to && !isDate(req.query.to)) {
		return next(new Error('Invalid to date'))
	}

	next()
}

export const jsonErrorHandler = (err: any, req: any, res: any, next: any) => {
	res.setHeader('Content-Type', 'application/json')
	res.status(400).send({ success: false, error: err.message })
}
