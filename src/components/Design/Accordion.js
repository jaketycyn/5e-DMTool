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
  justify-content: left;
  text-align: left;
`;
const Accordion = npc => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  return (
    <Wrapper>
      <Button {...getToggleProps()}>{isOpen ? "Collapse" : "Expand"}</Button>
      <HiddenContent {...getCollapseProps()}>
        <div dangerouslySetInnerHTML={{ __html: npc.editorState }} />
      </HiddenContent>
    </Wrapper>
  );
};

export default Accordion;
