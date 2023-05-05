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
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683195597/line/placarp/images/thai-baht-coin-white_x9flz5.png",
              //   action: {
              //     type: "message",
              //     label: "สร้างบิล",
              //     text: "#สร้างบิล"
              //   }
              action: {
                type: "camera",
                label: "สร้างบิล"
              }
            },
            {
              type: "action",
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683195177/line/placarp/images/more-white_vpt5yl.png",
              action: {
                type: "action",
                label: "เพิ่มเติม",
                action: {
                  type: "postback",
                  label: "Show Image Carousel",
                  data: "action=show_image_carousel"
                }

                // type: "cameraRoll",
                // label: "เพิ่มเติม"
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
  const res = await axios.post("https://api.line.me/v2/bot/message/reply", body, config);
  console.log("log --> ", res?.data);
}
