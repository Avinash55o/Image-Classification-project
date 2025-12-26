import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN!);

export async function classifyImage(imageFile: File) {
    try {
        const imageBuffer = await imageFile.arrayBuffer();

        const output = await client.imageClassification({
            data: imageBuffer,
            model: "google/vit-base-patch16-384",
        });

        return output;
    } catch (error: any) {
        console.error("hugging face error:", error.message);
        throw new Error("something went wrong");
    }
}