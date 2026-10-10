import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt, MdAnnouncement, MdBarChart } from "react-icons/md";
import { BiImport, BiHome, BiNotification } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsLightbulb } from "react-icons/bs";

export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2 className="mb-3 text-xl font-semibold">Course Status</h2>

            <div className="mb-2 flex gap-1">
                <button
                    type="button"
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50"
                >
                    <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
                </button>
                <button
                    type="button"
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
                >
                    <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
                </button>
            </div>

            <div className="flex flex-col gap-1">
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <LiaFileImportSolid className="me-2 shrink-0 text-lg" />
                    {/* icon */}Import Existing Content
                </button>
                {/* ...repeat full-width bordered buttons for Import from Commons,
             Choose Home Page, and the rest... */}
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <BiImport className="me-2 shrink-0 text-lg" />
                    Import from Commons
                </button>
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <BiHome className="me-2 shrink-0 text-lg" />
                    Choose Home Page
                </button>
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <MdBarChart className="me-2 shrink-0 text-lg" />
                    View Course Stream
                </button>
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <MdAnnouncement className="me-2 shrink-0 text-lg" />
                    New Announcement
                </button>
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <MdBarChart className="me-2 shrink-0 text-lg" />
                    New Analytics
                </button>
                <button
                    type="button"
                    className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                >
                    <BiNotification className="me-2 shrink-0 text-lg" />
                    View Course Notifications
                </button>
                <button
          id="wd-ai-status"
          type="button"
          className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-50"
        >
          <BsLightbulb className="me-2 shrink-0 text-lg" />
          Sample action
        </button>
            </div>
        </div>
    );
}