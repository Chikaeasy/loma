
const isProduction = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default isProduction

