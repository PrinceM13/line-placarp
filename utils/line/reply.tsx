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
              action: {
                type: "message",
                label: "สร้างบิล",
                text: "#สร้างบิล"
              }
            },
            {
              //   type: "action",
              //   imageUrl:
              //     "https://res.cloudinary.com/dhr35jlbz/image/upload/v1683195177/line/placarp/images/more-white_vpt5yl.png",
              //   action: {
              type: "template",
              label: "เพิ่มเติม",
              altText: "other infomation",
              // text: "#เพิ่มเติม"
              template: {
                type: "image_carousel",
                columns: [
                  {
                    imageUrl:
                      "https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/164807549_10222188384771369_1142176318488262787_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEOhR4YFZA3Ju679lj6PWLcRNVMiIQlN1FE1UyIhCU3UckNPgWLr0Gj_b6Fp-QxOgc&_nc_ohc=e7hfS8KgnrQAX-rHM-m&_nc_ht=scontent.fbkk22-8.fna&oh=00_AfCP8XALHAwcG6yvZZ2N5IugyINZrGBb6-EQCN8ULupVsQ&oe=6479AAA5",
                    action: {
                      type: "uri",
                      label: "Seefoon",
                      uri: "https://www.facebook.com/kananart.kuwaranancharoen"
                      // type: "postback",
                      // label: "Seefoon",
                      // data: "action=buy&itemid=111"
                    }
                  },
                  {
                    imageUrl:
                      "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.6435-9/133704245_10224454709418242_517100760536388649_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0TIKJ3_-6qisjXMpU1jLCbeTrbPTqtfJt5Ots9Oq18tgxXbT37wE8yGeQ4H0n_4s&_nc_ohc=3ENP7fyadGMAX93daox&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfCUWmfYkstYa5S8_neHuVQV_6ER1H7gN1owX7fhF4s5Gw&oe=6479A1B1",
                    action: {
                      type: "uri",
                      label: "Willie",
                      uri: "https://www.facebook.com/willie30605"
                      // type: "message",
                      // label: "Willie",
                      // text: "yes"
                    }
                  },
                  {
                    imageUrl:
                      "https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/299384969_10160309108369306_6717215343382255265_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFVJqpawpc21CYc9YKKqGOxwNRsqxyCR7LA1GyrHIJHshG2_WS-rwiXlwKK64EQwBk&_nc_ohc=E57QCwm4-D8AX91HkQE&_nc_ht=scontent.fbkk22-8.fna&oh=00_AfDYM46g_dBbtzLcCuaQsOgsR226Tcilr1fhuz0IwO6VcQ&oe=6456B183",
                    action: {
                      type: "uri",
                      label: "Erk",
                      uri: "https://github.com/PrinceM13"
                    }
                  }
                ]
              }
              //   }
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
