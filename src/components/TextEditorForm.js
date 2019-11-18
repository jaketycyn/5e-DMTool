import "./formik-demo.css";
import "./rich-editor.css";
import React from "react";
import { withFormik, Form } from "formik";
import {
  EditorState,
  convertToRaw,
  Editor,
  ContentStatem,
  getCurrentContent
} from "draft-js";
import { RichEditorExample } from "./RichEditor";
import { db } from "./Firebase";
import styled from "styled-components";
import { stateToHTML } from "draft-js-export-html";
// *** addd yup if validation is requierd ***
import * as Yup from "yup";

const npcCityJobs = [
  "General store keeper",
  "Tavern/Inn keeper",
  "Guard",
  "Sherriff/Guard captain/constable",
  "Magistrate",
  "Master of Ceremony",
  "Food vendors/Merchant",
  "Pawn shop owner",
  "Magic merchant (rare)",
  "Teleportation circle steward",
  "Arboretum (arborist)",
  "Botanical Gardener",
  "Lyceum scholar/instructor",
  "Coliseum gladiator/slaver",
  "Fighting pit ringmaster",
  "Clay mason",
  "Stone mason",
  "Printer",
  "Carpenter/wood worker",
  "Apothecary/pharmacist",
  "Alchemist",
  "Butcher",
  "Smoke shop tobacconist",
  "Baker",
  "Candlestick maker",
  "Fletcher",
  "Bowyer",
  "Seamstress/tailor",
  "Smith (tin [white], silver, black)",
  "Ferrier",
  "Furrier",
  "Jeweler",
  "Trapper",
  "Falconer",
  "Tanner",
  "Herdsmen/Shepard",
  "Farmer(s market) grocers, fishmongers",
  "Cartographer",
  "Librarian",
  "Book Store clerk",
  "Printer",
  "Florist (cart)",
  "Menagerie/zoo keeper/Animal Handler",
  "Miner (silver/gold/copper/iron/coal)",
  "Slave",
  "Serf",
  "Artisan",
  "Painter",
  "Pottery mason",
  "Priest",
  "Madhouse caretakers",
  "Petty nobility/mayor",
  "Knight",
  "Baron",
  "Count",
  "Duke",
  "Monarch/Emperor",
  "Council member",
  "Cooper",
  "Gongfarmer",
  "Cobbler (shoes)",
  "Glass blower",
  "Courier/messenger",
  "Stablehand",
  "Doctor/Plaguedoctor",
  "Midwife",
  "Brewer",
  "Winemaker",
  "Barber",
  "Street Cleaners",
  "Chimney Sweeps",
  "Maids/butlers",
  "Lawyer",
  "Academic/scribe",
  "Diviner/Oracle",
  "Beggar",
  "Town crier",
  "Grave digger",
  "Wainwright",
  "Caravansary/traveling merchant",
  "Dock worker/sailor",
  "Shipwright",
  "Guild master/member",
  "Grange foreman",
  "Spinster",
  "Bathhouse/hot springs worker",
  "Thatchers/roofers",
  "Lumber mill worker",
  "Wheelwright",
  "Millwright",
  "Banker",
  "Veterinary",
  "Prostitute/harlot",
  "Washer",
  "Water bearers",
  "Criminal, theif, lookout",
  "Armorer",
  "Street sweeper",
  "Carriage driver",
  "Gambler",
  "Lamp lighter",
  "Lumberjack",
  "Ratter",
  "Dyer",
  "Rope maker",
  "Sail maker",
  "Cultist",
  "Tax collector",
  "Orphanage caretaker",
  "Advisors/sages",
  "Philosophers",
  "Soldiers/generals",
  "Priest/cleric",
  "Squire",
  "Soap maker",
  "Parchment maker",
  "Jailer",
  "Bailiff",
  "Lector",
  "Mudlark/scavenger",
  "Stable master/head groom"
];

const StyledErrorDiv = styled.div`
  color: red;
  transition: all 0.1s;
  padding: 0rem 2rem
  font-size: 1.2rem;
  font-weight: 500;
  bottom: 0;
  left: 0;
  positon: absolute;
`;

const formikEnhancer = withFormik({
  mapPropsToValues: props => ({
    editorState: new EditorState.createEmpty(),
    npcName: "",
    npcRace: "",
    npcProfession: ""
  }),
  validationSchema: Yup.object({
    npcName: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    npcRace: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    npcProfession: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // you probably want to transform draftjs state to something else, but I'll leave that to you.
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
    // const rawContentState = convertToRaw(
    //   values.editorState.getCurrentContent()
    // );
    const htmlConverted = stateToHTML(values.editorState.getCurrentContent());
    db.collection("Npc").add({
      npcName: values.npcName,
      npcRace: values.npcRace,
      npcProfession: values.npcProfession,
      editorState: htmlConverted
    });
  },
  handleChange: e => {
    console.log(e.target.value);
  },
  displayName: "MyForm"
});

const TextEditor = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  setFieldValue,
  isSubmitting
}) => (
  <Form onSubmit={handleSubmit}>
    <label htmlFor="npcName">Name</label>
    <input
      id="npcName"
      name="npcName"
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.npcName}
    />
    {touched.npcName && errors.npcName ? (
      <StyledErrorDiv>{errors.npcName}</StyledErrorDiv>
    ) : null}
    <label htmlFor="npcRace">Race</label>
    <input
      id="npcRace"
      name="npcRace"
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.npcRace}
    />
    {touched.npcRace && errors.npcRace ? (
      <StyledErrorDiv>{errors.npcRace}</StyledErrorDiv>
    ) : null}
    <label htmlFor="npcProfession">Profession</label>
    {/* <button id="randomProfession" type="button" onClick={handleChange}>
      Random
    </button> */}
    <input
      id="npcProfession"
      name="npcProfession"
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.npcProfession}
    />
    {touched.npcProfession && errors.npcProfession ? (
      <StyledErrorDiv>{errors.npcProfession}</StyledErrorDiv>
    ) : null}
    <label style={{ display: "block", marginTop: ".5rem" }}>
      Character Info
    </label>
    <RichEditorExample
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
    />
    <button
      type="button"
      className="outline"
      onClick={handleReset}
      disabled={!dirty || isSubmitting}
    >
      Reset
    </button>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const TextEditorForm = formikEnhancer(TextEditor);

export default TextEditorForm;
