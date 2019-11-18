import React, { useState } from "react";
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
  const [info, setInfo] = useState("");

  // const sampleMarkup =
  //   "<b>Bold text</b>, <i>Italic text</i><br/ ><br />" +
  //   '<a href="http://www.facebook.com">Example link</a>';

  // const blocksFromHTML = convertFromHTML(sampleMarkup);
  // const state = ContentState.createFromBlockArray(
  //   blocksFromHTML.contentBlocks,
  //   blocksFromHTML.entityMap
  // );

  // this.state = {
  //   editorState: EditorState.createWithContent(state)
  // };
  function createMarkup() {
    return { __html: npc.editorState };
  }

  function dangerousHTML() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

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
