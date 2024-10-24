"use client";
import { Patient, Retrieved } from "@bonfhir/core/r4b";
import { createContext, useContext } from "react";

export interface PatientContext {
  patient: Retrieved<Patient>;
}

export const PatientContext = createContext<PatientContext | undefined>(
  undefined,
);

export const usePatientContext = (): PatientContext => {
  const context = useContext(PatientContext);
  if (!context) {
    throw new Error(
      "Missing PatientContext. It is probably used outside of the patient hub.",
    );
  }

  return context;
};
