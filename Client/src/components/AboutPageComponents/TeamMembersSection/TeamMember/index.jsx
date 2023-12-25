import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

const TeamMember = ({ memberImage, memberName, memberPosition }) => {
  return (
    <div className="member-card">
      <div className="member-image p-6 bg-gray-100 overflow-hidden max-h-[300px]">
        <img
          src={memberImage}
          alt="team-member"
          className=" w-full h-auto object-cover"
        />
      </div>
      <div className="member-info space-y-2">
        <h3 className="member-name text-[1.5rem] font-medium">{memberName}</h3>
        <p className="member-position">{memberPosition}</p>

        <div className="social-medias space-x-2">
          <button>
            <FaXTwitter />
          </button>
          <button>
            <FaInstagram />
          </button>
          <button>
            <RiLinkedinLine size={19} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
