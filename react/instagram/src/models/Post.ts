export interface Post {
  title: string;
  subTitle?: string;
  dateTime: string;
  user: any;
  content: {
    text: string;
    imageUrl?: string;
  };
}
