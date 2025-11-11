// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import dotenv from "dotenv"
// import fs from 'fs'
// dotenv.config()



// const accessKeyId = process.env.R2_ACCESS_KEY_ID || "";
// const secretAccesskey = process.env.R2_ACCESS_SECRET_KEY || "";
// const r2 = new S3Client({
//     region:"auto",
//     endpoint:"https://6aad83864f9040b15be8747e5fcd5934.r2.cloudflarestorage.com",
//     credentials : {
//         accessKeyId: accessKeyId,
//         secretAccessKey : secretAccesskey 
//     }
// })

// export const UploadToR2 = async (FilePath , FileName , FileType) => {
//     const FileBuffer = fs.readFileSync(FilePath)
//     const command = new PutObjectCommand({
//         Bucket:"yash",
//         Key: FileName,
//         Body: FileBuffer,
//         ContentType: FileType
//     })

    
//     await r2.send(command)

//     return `https://pub-80ba31205fb44ddd8baec3f2741ae223.r2.dev/${FileName}`
// }

