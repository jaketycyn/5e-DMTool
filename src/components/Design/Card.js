import React from "react";
import styled from "styled-components";
import Accordion from "./Accordion";

const Main = styled.div`
  background: black;
  width: auto;
  height: 100%;
`;

const TitleInfo = styled.h2`
  color: green;
  font-weight: 600;
  margin: 10px 20px;
  text-align: center;
  justify-content: space-between;
`;

const BackgroundInfo = styled.div`
  color: white;
  font-weight: 400;
  margin: 10px 20px;
  text-align: center;
`;

const Card = npc => (
  <Main>
    <TitleInfo>
      {npc.npcName} ({npc.npcRace} {"  "}
      {npc.npcProfession})
    </TitleInfo>
    <BackgroundInfo>
      <Accordion {...npc} />
    </BackgroundInfo>
  </Main>
);

export default Card;
