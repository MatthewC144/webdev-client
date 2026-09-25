import Link from "next/link";

export default function AssignmentItem({
    cid,
    aid,
    title,
    details,
}: {
    cid: string;
    aid: string;
    title: string;
    details: string;
}) {
    const lines = details.split("\n");

    return (
        <li className="wd-assignment-list-item">
            {/* Link the title to /courses/${cid}/assignments/${aid}
          (className wd-assignment-link), then show details underneath */}
            <Link
                href={`/courses/${cid}/assignments/${aid}`}
                className="wd-assignment-link"
            >
                {title}
            </Link>

            <br />

            {lines.map((line, index) => (
                <span key={index}>
                    {line}
                    {index < lines.length - 1 && <br />}
                </span>
            ))}
        </li>
    );
}