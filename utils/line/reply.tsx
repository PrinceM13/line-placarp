import axios from "axios";

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

export default async function reply(replyToken: string, msg: string) {
  const config = {
    headers: { "Content-Type": "application/json", Authorization: `Bearer {${channelAccessToken}}` }
  };

  const body = {
    replyToken,
    messages: [
      {
        type: "text",
        text: "ปลาคาร์ปมาแล้วจ้าาา!\nมาๆ เดี๋ยวน้องช่วยเก็บเงินให้",
        quickReply: {
          items: [
            {
              type: "action",
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683191714/line/placarp/images/thai-baht_ix7g3k.png",
              action: {
                type: "message",
                label: "สร้างบิล",
                text: "#สร้างบิล"
              }
            },
            {
              type: "action",
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683191727/line/placarp/images/more_h2rpnp.png",
              action: {
                type: "message",
                label: "เพิ่มเติม",
                text: "#เพิ่มเติม"
              }
            },
            {
              type: "action",
              action: {
                type: "location",
                label: "Send location"
              }
            }
          ]
        }
      }
    ]
  };
  await axios.post("https://api.line.me/v2/bot/message/reply", body, config);
}
