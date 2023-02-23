import Image1 from "../../assets/img/portfolio/portfolio-cashgo.jpg";
import Image2 from "../../assets/img/portfolio/portfolio-dubeale.png";
import Image3 from "../../assets/img/portfolio/portfolio-ethiodirect.jpeg";
import Image4 from "../../assets/img/portfolio/portfolio-getrooms.png";
import Image5 from "../../assets/img/portfolio/portfolio-guzogo.jpg";
import Image6 from "../../assets/img/portfolio/portfolio-itsmydam.jpg";
import Image7 from "../../assets/img/portfolio/portfolio-nedaj.png";
import Image8 from "../../assets/img/portfolio/portfolio-schoolofcloud.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "CashGo",
    image: Image1,
    tag: ["Finance"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Remittance",
        preview: "www.cashgoethiopia.com",
        link: "https://www.cashgoethiopia.com",
      },
    ],
    color: '#225883'
  },
  {
    id: 2,
    type: "DubeAle",
    image: Image2,
    tag: ["Finance"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "DubeAle",
        preview: "www.dubeale.com",
        link: "https://www.dubeale.com",
      },
    ],
    color: '#16553A'
  },
  {
    id: 3,
    type: "EthioDirect",
    image: Image3,
    tag: ["Finance"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "EthioDirect",
        preview: "www.ethiodirect.com",
        link: "https://www.ethiodirect.com",
      },
    ],
    color: '#802A81'
  },
  {
    id: 4,
    type: "GetRooms",
    image: Image4,
    tag: ["hospitality"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "GetRooms",
        preview: "www.getroomsonline.com",
        link: "https://www.getroomsonline.com",
      },
    ],
    color: '#183C59'
  },
  {
    id: 5,
    type: "GuzoGo",
    image: Image5,
    tag: ["Travel"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "GuzoGo",
        preview: "www.guzogo.com",
        link: "https://play.google.com/store/apps/details?id=com.guzogo.app&hl=en&gl=US",
      },
    ],
    color: '#121B66'
  },
  {
    id: 6,
    type: "ItsMyDam",
    image: Image6,
    tag: ["crowd-funding"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "ItsMyDam",
      },
    ],
    color: '#802A81'
  },
  {
    id: 7,
    type: "Nedaj",
    image: Image7,
    tag: ["Transport"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Nedaj",
        preview: "www.nedajethiopia.com",
        link: "https://www.nedajethiopia.com",
      },
    ],
    color: '#30A54A'
  },
  {
    id: 8,
    type: "School Of cloud",
    image: Image8,
    tag: ["education"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "School Of Cloud",
        preview: "www.schoolofcloud.com",
        link: "https://www.schoolofcloud.com",
      },
    ],
    color: '#40B4E5'
  },
];

export default PortfolioData;
