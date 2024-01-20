import 'dotenv/config.js'
import jwt from 'jsonwebtoken'

const generateToken = (id) => {  
  return jwt.sign({ id }, "d9LjYNQxSqzoRcDQ13IGYj0yqj8eZRMx", {
    expiresIn: '30d',
  })
}

export default generateToken
