import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt=`You are a flash card generator. Your task is to create flashcards that are concise, clear, and informative. You should structure the information to optimize learning and retention, presenting a question or prompt on one side and a corresponding answer or explanation on the other. Ensure that the content is relevant to the topic provided and formatted to enhance understanding 

Return in the following JSON format:
{
    "flashcards":[{
        "front": str,
        "back": str
}]

}
`

export async function POST(req) {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });
  
    try {
      const data = await req.text();
  
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content:data
          },
        ],
        model: "meta-llama/llama-3.1-8b-instruct:free",
        response_format:{type:'json_object'}
      });
      
      const flashcards = JSON.parse(completion.choices[0].message.content)

      return NextResponse.json(flashcards.flashcard)
      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          try {
            for await (const chunk of completion) {
              const content = chunk.choices[0]?.delta?.content;
              if (content) {
                const text = encoder.encode(content);
                controller.enqueue(text); 
              }
            }
          } catch (err) {
            controller.error(err); 
          } finally {
            controller.close(); 
          }
        },
      });
      return new NextResponse(stream);
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to generate a response" }),
        { status: 500 }
      );
    }
  }
  