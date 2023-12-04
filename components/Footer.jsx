import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#06061f] h-[72px] flex justify-center items-center">
      <p className="text-white text-base flex justify-center items-center gap-1">
        <span>
          <FaCopyright className="text-white" />
        </span>
        Copyright: Dhimivi
      </p>
    </div>
  );
}

export default Footer;
