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
                type: "cameraRoll",
                label: "เพิ่มเติม"
              }
            },
            {
              type: "action",
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683195177/line/placarp/images/more-white_vpt5yl.png",
              action: {
                type: "template",
                label: "เพิ่มเติม 2",
                altText: "this is a image carousel template",
                template: {
                  type: "image_carousel",
                  columns: [
                    {
                      imageUrl:
                        "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/133704245_10224454709418242_517100760536388649_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0TIKJ3_-6qisjXMpU1jLCbeTrbPTqtfJt5Ots9Oq18tgxXbT37wE8yGeQ4H0n_4s&_nc_ohc=3ENP7fyadGMAX93daox&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfCUWmfYkstYa5S8_neHuVQV_6ER1H7gN1owX7fhF4s5Gw&oe=6479A1B1",
                      action: {
                        type: "message",
                        label: "Willie",
                        text: "yes"
                      }
                    },
                    {
                      imageUrl:
                        "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/133704245_10224454709418242_517100760536388649_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0TIKJ3_-6qisjXMpU1jLCbeTrbPTqtfJt5Ots9Oq18tgxXbT37wE8yGeQ4H0n_4s&_nc_ohc=3ENP7fyadGMAX93daox&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfCUWmfYkstYa5S8_neHuVQV_6ER1H7gN1owX7fhF4s5Gw&oe=6479A1B1",
                      action: {
                        type: "message",
                        label: "Willie",
                        text: "yes"
                      }
                    }
                  ]
                }
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
