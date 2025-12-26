# 🌭 Hotdog or Not — Next.js + Hugging Face
A simple image classification project built with Next.js (TypeScript) that tells whether an uploaded image contains a hotdog or not using a pre-trained Vision Transformer (ViT) model from Hugging Face.

### Tech Stack
- Next.js (App Router)
- TypeScript
- pnpm
- Hugging Face Inference API
- `google/vit-base-patch16-384` image classification model


### 🧠 How it works
- User uploads an image
- Image is sent to a Next.js API route
- API calls Hugging Face Inference API
- Model returns image labels
- App checks for “hotdog” and shows the result

### Notes
- The model runs on Hugging Face (no local ML setup needed)
- This is a basic demo project, not a fine-tuned classifier
- Accuracy depends on the general image classification model