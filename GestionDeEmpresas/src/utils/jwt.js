'use strict'

import jwt from 'jsonwebtoken'

const secretKey = '@GestionDeEmpresas2024@'

export const generateJwt = async(payLoad)=>{
    try {
        return jwt.sign(payLoad, secretKey, {
            expiresIn: '3h',
            algorithm: 'HS256'
        })
    } catch (error) {
        console.error(error)
        return error
    }
}