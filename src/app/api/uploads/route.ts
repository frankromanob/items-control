
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
                    console.log(result);
                    resolve(result);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
            //  cloudinary.uploader.upload_stream({},
            //     function (error, result) {
            //         if (error) {
            //             reject(error)
            //             return
            //         }
            //         resolve(result)
            //     }).end(buffer)
        })
    }

    const result = await uploadToCloudinary();
    
    //let imageUrl = result.secure_url;
    console.log(result)
    return result

}


