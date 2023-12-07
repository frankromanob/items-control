
//import * as jwt from "jsonwebtoken";
import * as jose from 'jose'


export const signToken = async (_id: string, email: string) => {

    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No hay semilla de JWT')
    }

    //    return jwt.sign(
    //         { _id, email },
    //         process.env.JWT_SECRET_SEED,
    //         { expiresIn: '2d' }

    //     )
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_SEED)

    const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer(_id)
        .setAudience(email)
        .setExpirationTime('2d')
        .sign(secret)

   // console.log(jwt)
    return (jwt)

}

export const isValidToken = async (token: string) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No se encontró semilla de JWT')
    }


    try {

        // jwt.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
        //     if (err) return reject('JWT no es válido');

        //     const { _id } = payload as { _id: string }

        //     resolve(_id)
        // })

        const secret = new TextEncoder().encode(process.env.JWT_SECRET_SEED)
       // console.log('val', 'validJwt')
        const validJwt = await jose.jwtVerify(token, secret);

        //console.log(protectedHeader)
        return (true)

    } catch (error) {
        console.log(error)
        return (false);
    }

}