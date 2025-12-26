import { classifyImage } from "@/services/huggingface";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const image = formData.get("image");

        if (!image || !(image instanceof File)) {
            return NextResponse.json(
                { error: "no image" },
                { status: 400 }
            );
        }

        const result = await classifyImage(image);

        return NextResponse.json({ result });
    } catch (error) {
        return NextResponse.json(
            { error: "Classification failed" },
            { status: 500 }
        );
    }
}