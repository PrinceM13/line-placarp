import reply from "@/utils/line/reply";

export async function GET(request: Request) {
  return new Response("PlaCarp Line API !");
}

export async function POST(request: Request) {
  const body = await request.json();
  const event = body.events[0];
  const replyToken = event.replyToken;

  console.log("event --> ", event); // for debug

  if (event.type === "message" && event.message.text === "ปลาคาร์ป") {
    await reply(replyToken, event.message.text);
  }

  return new Response("PlaCarp POST");
}
