import Link from "next/link";

export default async function AssignmentEditor({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-assignments-editor">
            <div className="mb-4">
                <label htmlFor="wd-name" className="mb-1 block font-medium">
                    Assignment Name
                </label>
                <input
                    id="wd-name"
                    defaultValue="A1 - ENV + HTML"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <textarea
                    id="wd-description"
                    rows={4}
                    defaultValue={`The assignment is available online

                                    Submit a link to the landing page of your Web application running on Netlify.

                                    The landing page should include the following:
                                    • Your full name and section
                                    • Links to each of the lab assignments
                                    • Link to the Kanbas application
                                    • Links to all relevant source code repositories

                                    The Kanbas application should include a link to navigate back to the landing page.`}
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
                        defaultValue={100}
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
                            <input type="checkbox" id="wd-website-url" defaultChecked /> Website URL
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" id="wd-media-recordings" /> Media Recordings
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" id="wd-student-annotation" /> Student Annotation
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
                            defaultValue="2024-05-13"
                            className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="wd-available-from" className="mb-1 block font-medium">
                                Available from
                            </label>
                            <input
                                id="wd-available-from"
                                type="date"
                                defaultValue="2024-05-06"
                                className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="wd-available-until" className="mb-1 block font-medium">
                                Until
                            </label>
                            <input
                                id="wd-available-until"
                                type="date"
                                className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-medium">
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
                <Link
                    id="wd-cancel"
                    href={`/courses/${cid}/assignments`}
                    className="rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-neutral-50"
                >
                    Cancel
                </Link>
                <Link
                    id="wd-save"
                    href={`/courses/${cid}/assignments`}
                    className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                    Save
                </Link>
            </div>
        </div>
    );
}