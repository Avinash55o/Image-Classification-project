import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export const classifyImage= async(imagefile)=>{
    try{
        // converting image file to Blob because the model expects a blob
        const imageBlob = await imagefile.arrayBuffer();

        const output = await client.imageClassification({
            data:imageBlob,
            model: "google/vit-base-patch16-384",
            provider: "hf-inference",
        });
        return output;
    
    } catch(error){
        return res.status(500).jso({error})
    } 
};



console.log(output);