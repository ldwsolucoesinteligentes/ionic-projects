import { Dispatch } from "react";
import { Post } from "../models/Post";
import moment from "moment";
import { AppAction, LoadPosts } from "../store/actions";

const mockData = [
  {
    id: "c32d8b45-92fe-44f6-8b61-42c2107dfe87",
    content: {
      comments: [
        {
          user: {
            name: "Jessica Valdozende",
            imageUrl:
              "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/175649480_5382965315109194_226135854605293805_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Emsl2057wsIAX-GpgBo&_nc_ht=scontent-gig2-1.xx&oh=92059495b76537b8d1ca06b95b011fbb&oe=60D1006E",
          },
          dateTime: moment().format(),
          comment: "Lorem ipsum dolor sit amet consectetur adipi",
        },
        {
          user: {
            name: "John Megan",
            imageUrl: "https://loremflickr.com/g/240/240/paris,man/all",
          },
          dateTime: moment().format(),
          comment: "Lorem ipsum dolor sit amet consectetur adipi",
        },
        {
          user: {
            name: "Katy Newman",
            imageUrl: "https://loremflickr.com/g/240/240/paris,girl/all",
          },
          dateTime: moment().format(),
          comment: "Lorem ipsum dolor sit amet consectetur adipi",
        },
      ],
      imageUrl: "https://loremflickr.com/411/411/brazil,rio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi ab reiciendis placeat dolorum autem dolor sequi blanditiis repellat, earum eligendi nam similique deleniti magni error! Sed numquam odio repellat.",
    },
    dateTime: moment().add(2, "hour").format(),
    user: {
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHWG4-DM2u3fw/profile-displayphoto-shrink_100_100/0/1611516132438?e=1627516800&v=beta&t=WmsZS_iD9m_l3_1pihnabxDKElSDpDc_Dxlr75ZmHd0",
      name: "Alex Leko",
    },
    likes: [
      {
        user: {
          name: "Jessica Valdozende",
          imageUrl:
            "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/175649480_5382965315109194_226135854605293805_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Emsl2057wsIAX-GpgBo&_nc_ht=scontent-gig2-1.xx&oh=92059495b76537b8d1ca06b95b011fbb&oe=60D1006E",
        },
        dateTime: moment().format(),
      },
      {
        user: {
          name: "Joana Stay",
          imageUrl: "https://loremflickr.com/g/240/240/brazil,girl/all",
        },
        dateTime: moment().format(),
      },
      {
        user: {
          name: "John Megan",
          imageUrl: "https://loremflickr.com/g/240/240/paris,man/all",
        },
        dateTime: moment().format(),
      },
      {
        user: {
          imageUrl:
            "https://media-exp1.licdn.com/dms/image/C4E03AQHWG4-DM2u3fw/profile-displayphoto-shrink_100_100/0/1611516132438?e=1627516800&v=beta&t=WmsZS_iD9m_l3_1pihnabxDKElSDpDc_Dxlr75ZmHd0",
          name: "Alex Leko",
        },
        dateTime: moment().format(),
      },
      {
        user: {
          name: "Katy Newman",
          imageUrl: "https://loremflickr.com/g/240/240/paris,girl/all",
        },
        dateTime: moment().format(),
      },
    ],
  },
];

export default class PostService {
  constructor(private dispatch: Dispatch<AppAction>) {}
  getPosts() {
    this.dispatch(new LoadPosts());
    return new Promise<Post[]>((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000);
    });
  }
}
