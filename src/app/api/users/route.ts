import { db } from "@/database"
import User from '@/models/Users'
import bcrypt from 'bcryptjs';
import { jwt } from '@/app/lib/'




export async function POST(request: Request) {
    const formData = await request.json()
    const { email = '', password = '' } = formData
    console.log(email,password)
    const token = loginUser(email, password)

    return Response.json(token)
}

const loginUser = async (email: string, password: string) => {


    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect()

    if (!user) {
        return new Response('Usuario o contraseña no válido', { status: 400 })
    }

    if (!bcrypt.compareSync(password, user.password!)) {
        return new Response('Usuario o contraseña no válido', { status: 400 })
    }
    const { _id, role, name } = user;

    const token = jwt.signToken(_id, email)
console.log(token)
    return Response.json({
        token,
        user: {
            _id, email, role, name
        }
    })
}