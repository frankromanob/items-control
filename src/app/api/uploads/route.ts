
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config(process.env.CLOUDINARY_URL || '')


// export const config = {
//     api: {
//         bodyParser: false
//     }
// }

export async function POST(request: Request) {

    const resp = await uploadFile(request)
    return Response.json(resp)

}




const uploadFile = async (request: Request)=> {
    console.log('en el upload')
    const formData = await request.formData()
    const files = formData.get('file') as File;
    const arrayBuffer = await files.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const result = await new Promise((resolve, reject) => {
         cloudinary.uploader.upload_stream({},
            function (error, result) {
                if (error) {
                    reject(error)
                    return
                }
                resolve(result)
            }).end(buffer)

    })

    return result

}


