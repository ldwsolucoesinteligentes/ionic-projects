import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ldw-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"],
})
export class StoriesComponent implements OnInit {
  @Input() stories: any[];
  constructor() {}

  ngOnInit() {
    let stories = this.getMockData();
    stories = stories.map((u) => ({
      ...u,
      userName: u.userName
        .split(" ")
        .filter((n) => n.length >= 3)
        .splice(0, 2)
        .join("<br />"),
    }));
    stories.unshift({
      userName: "Add to <br>Story",
      userImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/768px-Feather-core-plus-circle.svg.png",
      posts: [
        {
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQEWswPGb3GBDA/profile-displayphoto-shrink_100_100/0?e=1603929600&v=beta&t=Y_Q0B6kki_Csg7n_Qgwu7xaZai_iFexjeluKsXBt37s",
          text: "",
        },
      ],
    });
    this.stories = stories;
  }

  private getMockData() {
    return [
      {
        userName: "Alex Leko",
        userImage:
          "https://media-exp1.licdn.com/dms/image/C4D03AQEWswPGb3GBDA/profile-displayphoto-shrink_100_100/0?e=1603929600&v=beta&t=Y_Q0B6kki_Csg7n_Qgwu7xaZai_iFexjeluKsXBt37s",
        posts: [
          {
            image:
              "https://scontent-gig2-1.xx.fbcdn.net/v/t31.0-8/s960x960/11875049_895608463846603_3279388654382466499_o.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=p1_61w5kGRgAX8heqoY&_nc_ht=scontent-gig2-1.xx&_nc_tp=7&oh=32e6d67422f0dfdfe0ea957822abb893&oe=5F672243",
            text:
              "Thursday thoughts! I love the idea but I would say let's celebrate both. More ideas?",
          },
        ],
      },
      {
        userName: "Jessica Valdozende",
        userImage:
          "https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/104485136_3959234767482263_4791294630769591991_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=ZTibalbwYV0AX-Dmxyl&_nc_ht=scontent-gig2-1.xx&oh=90cce550a5f1e59594a49821a7f0fa4f&oe=5F673C2A",
        posts: [
          {
            image:
              "https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/117591991_3312451768979094_8480428595833580691_o.jpg?_nc_cat=1&_nc_sid=8bfeb9&_nc_ohc=bN0gbhQqscEAX8xY1Jd&_nc_ht=scontent-gig2-1.xx&oh=589172b3133f39c27f6f6c3b7e6a7a98&oe=5F67CCEF",
            text:
              "Thursday thoughts! I love the idea but I would say let's celebrate both. More ideas?",
          },
        ],
      },
    ];
  }
}
