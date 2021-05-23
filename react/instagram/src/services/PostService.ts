import { Dispatch } from "react";
import { Post } from "../models/Post";
import { AppAction, LoadPosts } from "../store/actions";

export default class PostService {
  constructor(private dispatch: Dispatch<AppAction>) {}
  getPosts() {
    this.dispatch(new LoadPosts());
    return new Promise<Post[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: "Happy new year",
            subTitle: "News adventures",
            content: {
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi ab reiciendis placeat dolorum autem dolor sequi blanditiis repellat, earum eligendi nam similique deleniti magni error! Sed numquam odio repellat.",
            },
            dateTime: new Date().toUTCString(),
            user: {
              profileImageUrl:
                "https://media-exp1.licdn.com/dms/image/C4E03AQHWG4-DM2u3fw/profile-displayphoto-shrink_100_100/0/1611516132438?e=1627516800&v=beta&t=WmsZS_iD9m_l3_1pihnabxDKElSDpDc_Dxlr75ZmHd0",
              name: "Alex Leko",
            },
          },
        ]);
      }, 2000);
    });
  }
}
