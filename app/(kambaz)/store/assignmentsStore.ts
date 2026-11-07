"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

type AssignmentSeed = (typeof assignmentsJson)[number];

export type Assignment = AssignmentSeed & {
  availableUntil?: string;
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson,

  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        {
          ...assignment,
          _id: crypto.randomUUID(),
        },
      ],
    })),

  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter(
        (assignment) => assignment._id !== assignmentId,
      ),
    })),

  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((currentAssignment) =>
        currentAssignment._id === assignment._id
          ? assignment
          : currentAssignment,
      ),
    })),

  findAssignment: (assignmentId) =>
    get().assignments.find(
      (assignment) => assignment._id === assignmentId,
    ),
}));