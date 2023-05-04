import reply from "@/utils/line/reply";

export async function GET(request: Request) {
  return new Response("PlaCarp Line API !");
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("check body ---> ", body); // for debug

  const event = body.events[0];
  console.log("event --> ", event); // for debug

  const replyToken = event.replyToken;

  if (event.type === "message" && event.message.text === "ปลาคาร์ป") {
    await reply(replyToken, event.message.text);
  }

  return new Response("PlaCarp POST");
}
