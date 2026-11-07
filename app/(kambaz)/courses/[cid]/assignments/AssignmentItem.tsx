"use client";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
  cid, aid, title, details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${title}?`,
    );

    if (confirmed) {
      deleteAssignment(aid);
    }
  };
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <button
        type="button"
        onClick={handleDelete}
        className="self-start text-red-600 hover:text-red-800"
        aria-label={`Delete ${title}`}
        title={`Delete ${title}`}>
        <FaTrash />
      </button>
    </li>
  );
}