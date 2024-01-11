import { NFTStorage, File } from 'nft.storage'
import * as fs from 'fs'
import path from 'path'
import mime from 'mime'
import { constants } from 'buffer'
import { Result } from 'ethers'

const  client = new NFTStorage(
    {
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM5MzhDNDA2ZDAwMjRDRTE3ZWEwQjRBRTRmNkE5OTI2RkM1YTJjOTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMjgwNzM5MDE3OSwibmFtZSI6IkRlY2VydGlmeSJ9.1__Pj2MkkpqTPNdcWuOixo98FKceOPe0gNQlrJ4W2kU'
    }
)

function GetBase64(img){
    const file = fs.readFileSync(img);
    const String = Buffer.from(file).toString("base64");
    return(String);
}

//A function that gets files from path in the local device
async function fileFromPath(filepath){
    const content = await fs.promises.readFile(filepath)
    const type = mime.getType(filepath)
    return new File([content], path.basename(filepath), { type })
}

//A function for uploading to NFTStorage through the IPFS Network
async function UploadNFT(
                name,
                description,
                fileURL
                ){
    const image = await fileFromPath(fileURL)
    const metadata = await client.store({
        image,
        name,
        description,
        })
    console.log(metadata.url)
}



const result = await UploadNFT("new_test.png", "just testing", "./images/new_test.png")
console.log(result)