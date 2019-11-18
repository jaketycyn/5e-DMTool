import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { db } from "./Firebase";

const StyledErrorDiv = styled.div`
  color: red;
  font-size: 22px;
`;

const NPCCreation = () => {
  const formik = useFormik({
    initialValues: {
      npcName: "",
      npcRace: "",
      npcProfession: ""
    },
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
    onSubmit: values => {
      db.collection("Npc").add({
        name: name,
        race: race,
        job: npcJob
      });
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="npcName">Name</label>
        <input
          id="npcName"
          name="npcName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.npcName}
        />
        {formik.touched.npcName && formik.errors.npcName ? (
          <StyledErrorDiv>{formik.errors.npcName}</StyledErrorDiv>
        ) : null}
        <label htmlFor="npcRace">Race</label>
        <input
          id="npcRace"
          name="npcRace"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.npcRace}
        />
        {formik.touched.npcRace && formik.errors.npcRace ? (
          <StyledErrorDiv>{formik.errors.npcRace}</StyledErrorDiv>
        ) : null}
        <label htmlFor="npcProfession">Profession</label>
        <input
          id="npcProfession"
          name="npcProfession"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          vallue={formik.values.npcProfession}
        />
        {formik.touched.npcProfession && formik.errors.npcProfession ? (
          <StyledErrorDiv>{formik.errors.npcProfession}</StyledErrorDiv>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NPCCreation;
