import { Post } from "../../models/Post";

export interface AppState {
  message?: string;
  isLoading: boolean;
  posts: Post[];
  user: any[];
  stories: any[];
  configuration: any;
}

export const initialState: AppState = {
  stories: [
    {
      userName: "Alex Leko",
      userImageUrl:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHWG4-DM2u3fw/profile-displayphoto-shrink_100_100/0/1611516132438?e=1627516800&v=beta&t=WmsZS_iD9m_l3_1pihnabxDKElSDpDc_Dxlr75ZmHd0",
    },
    {
      userName: "Jessica Valdozende",
      userImageUrl:
        "https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/175649480_5382965315109194_226135854605293805_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Emsl2057wsIAX-GpgBo&_nc_ht=scontent-gig2-1.xx&oh=92059495b76537b8d1ca06b95b011fbb&oe=60D1006E",
    },
    {
      userName: "Joana Stay",
      userImageUrl: "https://loremflickr.com/g/240/240/brazil,girl/all",
    },
    {
      userName: "John Megan",
      userImageUrl: "https://loremflickr.com/g/240/240/paris,man/all",
    },
    {
      userName: "Katy Newman",
      userImageUrl: "https://loremflickr.com/g/240/240/paris,girl/all",
    },
    {
      userName: "Curious Woman",
      userImageUrl: "https://loremflickr.com/g/240/240/girl/all",
    },
  ],
  posts: [],
  user: [],
  configuration: {},
  isLoading: false,
};

export const PERSISTED_STATE_KEY = "persistedState";

export function getPersistedState(): AppState {
  return JSON.parse(window.localStorage[PERSISTED_STATE_KEY] || "{}");
}

export const persisteState = (data: Partial<AppState>) => {
  const savedData = getPersistedState();
  const toSave = {
    ...savedData,
    ...data,
  };
  window.localStorage[PERSISTED_STATE_KEY] = JSON.stringify(toSave);
};
