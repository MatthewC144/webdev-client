import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdOutlineRocketLaunch className="text-4xl text-blue-600" />
        <BsLightningChargeFill className="text-4xl text-blue-600" />
        <HiSparkles className="wd-icon-large-purple" />
        <FiHeart className="wd-icon-medium-orange" />
      </div>
    </div>
  );
}