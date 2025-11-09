import { useState } from "react";
import { IoCodeSharp } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { TfiMicrosoft } from "react-icons/tfi";
import { frontend } from "../../utils/Data";
import { backend } from "../../utils/Data";
import { powerPlatform } from "../../utils/Data";
import SkillChips from "./SkillChips";

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: <IoCodeSharp/>},
    { id: "backend", label: "Backend", icon: <BsLightningCharge/>},
    { id: "powerplatform", label: "Power Platform", icon:<TfiMicrosoft/>},
  ];

  return (
    <div className="flex flex-col justify-center w-full max-w-3xl mx-auto mt-8">
      {/* Tabs Header */}
      <div className="inline-flex bg-[#311b4e]/50 border border-[#8b5cf6]/20 rounded-4xl p-2 shadow-md shadow-[#8b5cf6]/10 mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-4xl font-semibold transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-[#8b5cf6] text-white shadow-[0_0_10px_rgba(139,92,246,0.4)]"
                  : "text-[#a78bfa] hover:text-white hover:bg-[#8b5cf6]/20"
              } cursor-pointer` }
          >
            <div className="flex gap-1 items-center text-[13px] md:text-lg">
                {tab.icon}
                {tab.label}
            </div>
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-6 p-6">
        {activeTab === "frontend" && (
          <SkillChips skills={frontend}/>
        )}
        {activeTab === "backend" && (
          <SkillChips skills={backend}/>
        )}
        {activeTab === "powerplatform" && (
          <SkillChips skills={powerPlatform}/>
        )}
      </div>
    </div>
  );
};

export default SkillsTabs;
