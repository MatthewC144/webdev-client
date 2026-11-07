"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{
    cid: string;
    aid: string;
  }>();
  const router = useRouter();
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const storedAssignment = findAssignment(aid);
  const initialAssignment =
    storedAssignment?.course === cid ? storedAssignment : undefined;
  const [assignment, setAssignment] = useState<Assignment>(() =>
    initialAssignment
      ? { ...initialAssignment }
      : {
          _id: "",
          title: "",
          course: cid,
          description: "",
          points: 100,
          due: "",
          available: "",
          availableUntil: "",
        },
  );

  const save = () => {
    if (aid === "new") {
      addAssignment({
        ...assignment,
        course: cid,
      });
    } else if (initialAssignment) {
      updateAssignment({
        ...assignment,
        course: cid,
      });
    }
    router.push(`/courses/${cid}/assignments`);
  };

  const cancel = () => {
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        />
        <p className="mt-1 text-xs text-neutral-500">Assignment id: {aid}</p>
      </div>

      <div className="mb-4">
        <textarea
          id="wd-description"
          rows={4}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-start">
        <label htmlFor="wd-points" className="text-right font-medium md:pt-2">
          Points
        </label>
        <div className="md:col-span-3">
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({
                ...assignment,
                points: Number(e.target.value),
              })
            }
            className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <label htmlFor="wd-group" className="text-right font-medium md:pt-2">
          Assignment Group
        </label>
        <div className="md:col-span-3">
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        <label
          htmlFor="wd-display-grade-as"
          className="text-right font-medium md:pt-2"
        >
          Display Grade as
        </label>
        <div className="md:col-span-3">
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </select>
        </div>

        <label
          htmlFor="wd-submission-type"
          className="text-right font-medium md:pt-2"
        >
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4 md:col-span-3">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className="mb-4 w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="Online">Online</option>
            <option value="Paper">Paper</option>
          </select>

          <label className="mb-2 block font-semibold">Online Entry Options</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" /> Text Entry
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" defaultChecked />
              Website URL
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" /> Media
              Recordings
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" /> Student
              Annotation
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" /> File Uploads
            </label>
          </div>
        </div>

        <label className="text-right font-medium md:pt-2">Assign</label>
        <div className="rounded border border-neutral-300 p-4 md:col-span-3">
          <div className="mb-4">
            <label htmlFor="wd-assign-to" className="mb-1 block font-medium">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="wd-due-date" className="mb-1 block font-medium">
              Due
            </label>
            <input
              id="wd-due-date"
              type="date"
              value={assignment.due}
              onChange={(e) =>
                setAssignment({ ...assignment, due: e.target.value })
              }
              className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-medium"
              >
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-medium"
              >
                Until
              </label>
              <input
                id="wd-available-until"
                type="date"
                value={assignment.availableUntil ?? ""}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableUntil: e.target.value,
                  })
                }
                className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-4 mb-4">
            <label
              htmlFor="wd-ai-editor-notes"
              className="mb-1 block font-medium"
            >
              Sample notes
            </label>
            <textarea
              id="wd-ai-editor-notes"
              rows={3}
              placeholder="Additional sample notes or instructions for this assignment..."
              className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <hr className="my-6" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          id="wd-cancel"
          onClick={cancel}
          className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-neutral-50"
        >
          Cancel
        </button>
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Save
        </button>
      </div>
    </div>
  );
}
