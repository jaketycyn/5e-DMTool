import React from "react";
import useCollapse from "react-collapsed";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightblue;

  :hover {
    background: red;
  }
`;

const HiddenContent = styled.div`
  display: flex;
  justify-content: left;
  background: lightgreen;
`;
const Accordion = npc => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  console.log(npc.editorState);

  return (
    <Wrapper>
      <Button {...getToggleProps()}>{isOpen ? "Collapse" : "Expand"}</Button>
      <HiddenContent {...getCollapseProps()}>
        <p>{npc.npcProfession}</p>
        <p>{npc.npcName}</p>
      </HiddenContent>
    </Wrapper>
  );
};

export default Accordion;
