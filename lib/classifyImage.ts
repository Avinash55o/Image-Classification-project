export default async function classifyImage(file : File){
    try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("/api/classify",{
            method: "POST",
            body: formData
        })
        

        if(!response.ok){
            const text = await response.text();
            throw new Error(text ||"failed to classify the image")
        }

        const data= await response.json();
        return data.result

    } catch (error: any) {
        console.error(error)
    }
}