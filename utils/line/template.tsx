import axios from "axios";

const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN;

export async function ImageCarousel(replyToken: string, action: string) {
  const config = {
    headers: { "Content-Type": "application/json", Authorization: `Bearer {${channelAccessToken}}` }
  };

  const body = {
    replyToken,
    messages: [
      {
        type: "template",
        altText: "this is a image carousel template",
        template: {
          type: "image_carousel",
          columns: [
            {
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683271051/line/placarp/images/85294_o02wt2.jpg",
              action: {
                type: "message",
                label: "CHILL",
                text: "keep moment"
              }
            },
            {
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683271045/line/placarp/images/OLBKWT0_sma1hb.jpg",
              action: {
                type: "uri",
                label: "SAKURA",
                uri: "https://edeaf-name-card.vercel.app/name-cards"
              }
            },
            {
              imageUrl:
                "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683271044/line/placarp/images/Scene...8_eq5p7w.jpg",
              action: {
                type: "uri",
                label: "FUJI",
                uri: "https://github.com/PrinceM13"
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
