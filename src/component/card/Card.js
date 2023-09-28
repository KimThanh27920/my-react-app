import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 500px;
  margin: auto;
`;

const CardImage = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  background-color: white;
  bottom: 0;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  margin: 0px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.36%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src={props.image || ""} alt="" />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar src={props.avatar || ""} alt="" />

            <UserName>{props.username || ""}</UserName>
          </CardUser>

          <div>256</div>
        </CardTop>

        <CardFooter>
          <CardTitle>{props.title || ""}</CardTitle>
          <CardAmount>{props.amount || ""}</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
