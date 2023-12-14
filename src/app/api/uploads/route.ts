
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config(process.env.CLOUDINARY_URL || '')


export async function POST(request: Request) {
    const resp = await uploadFile(request)
    return Response.json(resp)
}




const uploadFile = async (request: Request) => {

    const formData = await request.formData()
    const files = formData.get('file') as File;
    const arrayBuffer = await files.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    var mime = files.type;
    var encoding = 'base64';
    var base64Data = Buffer.from(arrayBuffer).toString('base64');
    var fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
    //console.log(buffer)

    const uploadToCloudinary = () => {
        return new Promise((resolve, reject) => {
            var result = cloudinary.uploader.upload(fileUri, {
                invalidate: true
            })
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }

    const result = await uploadToCloudinary();
     //console.log(result)
    return result

}


