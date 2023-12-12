import { db } from "@/database"
import Users from '@/models/Users'
import bcrypt from 'bcryptjs';
import { jwt } from '@/app/lib/'



export async function POST(request: Request) {
    const formData = await request.json()
    const { email = '', password = '' } = formData
    const token = await loginUser(email, password)
    return Response.json(token)
}

const loginUser = async (email: string, password: string) => {

    await db.connect();
    const user = await Users.findOne({ email });
    await db.disconnect()


    if (!user) {
        return new Response('Usuario o contraseña no válido - U', { status: 400 })
    }

    if (!bcrypt.compareSync(password, user.password!)) {
        return new Response('Usuario o contraseña no válido - P', { status: 400 })
    }
    const { _id, role, name } = user;

    const token = await jwt.signToken(_id, email)

    return (
        {
            token,
            user: {
                _id, email, role, name
            }
        }
    )
}