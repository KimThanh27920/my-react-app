import React from "react";
// import Card from "./Card";
// import styled from "styled-components";
import CardTaiwind from "./CardTaiwind";

// const StyledCardList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 120px 30px;
// `;
class CardType {
  constructor(image, avatar, username, title, elementType) {
    this.image = image;
    this.avatar = avatar;
    this.username = username;
    this.title = title;
    this.elementType = elementType;
  }
}

const CardData = [
  new CardType(
    "https://i.pinimg.com/originals/ec/ac/0d/ecac0d7a692210f39eec7f37708abf95.jpg",
    "https://th.bing.com/th/id/R.da4ed30b387d853bed16b2c364fc4bcc?rik=1O6cNwpxiccXrg&riu=http%3a%2f%2fs1.img.yan.vn%2fYanNews%2f2167221%2f201406%2f20140626-1218-cung-hoang-dao-1.jpg&ehk=6l8u0ULy5owAb3QDiVSifnaLoOeKmmNc%2bk0diuN4if8%3d&risl=&pid=ImgRaw&r=0",
    "Aries",
    "21/03 - 19/04",
    "FIRE"
  ),
  new CardType(
    "https://bloganchoi.com/wp-content/uploads/2020/10/anh-12-cung-hoang-dao-6-2.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201406/20140626-1218-cung-hoang-dao-2.jpg",
    "Taurus",
    "20/04 - 20/05",
    "EARTH"
  ),
  new CardType(
    "https://i.pinimg.com/originals/c9/04/e5/c904e59526fba80716e2a1d626e4170b.jpg",
    "https://3.bp.blogspot.com/-Dh986C4bAHs/WXHbTQVen5I/AAAAAAAAAGk/KsWcsXVKVkUmfnIVQ3fOdWcF5KaHcg4pACLcBGAs/s400/songtuthang5a.jpg",
    "Gemini",
    "21/05 - 20/06",
    "AIR"
  ),
  new CardType(
    "https://i.pinimg.com/originals/21/11/92/211192eb17e40b4679173e4e1c118d49.jpg",
    "https://i.pinimg.com/originals/5c/51/80/5c5180a1ddfaa440e016f7f70495285d.jpg",
    "Cancer",
    "21/06 - 22/07",
    "WATER"
  ),
  new CardType(
    "https://thuthuatnhanh.com/wp-content/uploads/2020/08/12-cung-hoang-dao-anime-su-tu-252x390.jpg",
    "https://th.bing.com/th/id/R.cb0d45d02ae43fa8fbf840b2229f601f?rik=MF1DrpQnq8iJEA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6WKR96K_Mws%2fUr4Twl5grRI%2fAAAAAAAAAqA%2fz5aYF8KaBP8%2fs1600%2fZodiak%2bLeo%2b2012.jpg&ehk=KVdH6ZfU7Hv9uqgWvB8e1ybATlKwxaNbUEnlznytU%2bI%3d&risl=&pid=ImgRaw&r=0",
    "Leo",
    "23/07 - 22/08",
    "FIRE"
  ),
  new CardType(
    "https://th.bing.com/th/id/OIP.GzRBfAlos6ZBOWHgGp4LEgHaLm?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.396f82da6f5d2d506af199558b34011a?rik=eY5tuCJUTADt%2fA&riu=http%3a%2f%2f1.bp.blogspot.com%2f--uAS63LYe4g%2fUGpcNlftV3I%2fAAAAAAAABNg%2fTRbPjYAVsxs%2fs1600%2fgambar%2bzodiak%2bvirgo.jpg&ehk=mpI3DFPB6IZQ4DEXaBFQX3l25h8ptm%2fHFaZgMtw%2fP7E%3d&risl=&pid=ImgRaw&r=0",
    "Virgo",
    "23/08 - 22/09",
    "EARTH"
  ),
  new CardType(
    "https://bloganchoi.com/wp-content/uploads/2020/10/anh-12-cung-hoang-dao-6-7.jpg",
    "https://th.bing.com/th/id/R.90ae1234f18dbc4d82a99f1d0b2f4998?rik=m%2fuwlnbyNfoB8A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-BaLDVL1EnCY%2fTtS_b6hQgOI%2fAAAAAAAAAo4%2fLjaoS9WcoYw%2fs400%2fZodiak%2bLibra%2b2012.jpg&ehk=uOfPhj2tni2%2fkD8N64Zswhve2y%2b0CmM%2bWy%2fLIf2wgUY%3d&risl=&pid=ImgRaw&r=0",
    "Libra",
    "23/09 - 22/10",
    "AIR"
  ),
  new CardType(
    "https://i.pinimg.com/originals/91/c4/b0/91c4b009f8f70de82ee4184836b6228a.png",
    "https://1.bp.blogspot.com/-c5wANLbYp7k/UZx-a_Dpb1I/AAAAAAAAAFs/6nD4mwCBcdQ/s320/scorpio_chibi_zodiac_sign.jpg",
    "Scorpio",
    "23/10 - 21/11",
    "WATER"
  ),
  new CardType(
    "https://th.bing.com/th/id/R.1b26a1e8992833f9ac4cbe9075b03d84?rik=ajlGDdJSB%2b3sPA&riu=http%3a%2f%2fpm1.narvii.com%2f6552%2f09991fe0c72e80c7ea1189083ca0316f5b965a62_00.jpg&ehk=OW89hySDPx%2b%2fhshKjE0Lzlb5sHvcwCz4VftUWQGXtRM%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.146d4bce612a17f52788a8b050fb8a61?rik=%2fjP5mXKF6HpYBQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_VIIZjIOZiZQ%2fTB-hSG29JJI%2fAAAAAAAAAXs%2frXtAn3vjbaQ%2fs400%2f93036.jpg&ehk=uZG79Zpjf7mY9%2f%2b7M0nIY8zNvqhIN%2bTC6FK%2bajzL5aw%3d&risl=&pid=ImgRaw&r=0",
    "Sagittarius",
    "22/11 - 21/12",
    "FIRE"
  ),
  new CardType(
    "https://em.wattpad.com/1f28fe80aa56c7aac1b419e69de5047609d12c19/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f704f4e346f715737394d4d3677413d3d2d3534303232313637382e313531366137643132316239646361633133363535393434303436352e6a7067?s=fit&w=720&h=720",
    "https://th.bing.com/th/id/R.d8caf7236472d8fff26b4205cf346997?rik=XeLJi1OcQsSOFg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-5dVH3ZtYNPA%2fUZx-R72NncI%2fAAAAAAAAAE0%2fDrzPJePiMKg%2fs1600%2fcarpicorn_chibi_zodiac_sign.jpg&ehk=QF3cBqRxnI3zEIZHGqHsJsLiPc7kTO%2fZjQKzRJ9YoRk%3d&risl=&pid=ImgRaw&r=0",
    "Capricorn",
    "22/12 - 19/01",
    "EARTH"
  ),
  new CardType(
    "https://i.pinimg.com/originals/82/23/ee/8223ee90695dd6356230cdf9990822cd.jpg",
    "https://i.pinimg.com/474x/0e/26/05/0e260521dd8d31418947f57da9d2c0c3--aquarius-zodiac-zodiac-horoscope.jpg",
    "Aquarius",
    "20/01  - 18/02",
    "AIR"
  ),
  new CardType(
    "https://bloganchoi.com/wp-content/uploads/2020/10/anh-12-cung-hoang-dao-6-12.jpg",
    "https://th.bing.com/th/id/OIP.-M14T0W6WM1yqPGttZIelwHaHa?pid=ImgDet&rs=1",
    "Pisces",
    "19/02 - 20/03",
    "WATER"
  ),
];

const CardList = (props) => {
  // return (
  //   <StyledCardList>
  //     {CardData.map((cardItem, index) => (
  //       <Card
  //         key={index}
  //         image={cardItem.image}
  //         avatar={cardItem.avatar}
  //         username={cardItem.username}
  //         title={cardItem.title}
  //         amount={cardItem.amount}
  //       ></Card>
  //     ))}
  //   </StyledCardList>
  // );
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-28">
      {CardData.map((cardItem, index) => (
        <CardTaiwind
          key={index}
          image={cardItem.image}
          avatar={cardItem.avatar}
          username={cardItem.username}
          title={cardItem.title}
          elementType={cardItem.elementType}
        ></CardTaiwind>
      ))}
    </div>
  );
};

export default CardList;
