import FacebookImg from "../../assets/facebook.png";
import TwitterImg from "../../assets/twitter.png";
import GoogleImg from "../../assets/google.png";

const SocialMediaLinks = ({ handleGoogleLogin }) => {
  return (
    <div className="flex justify-center gap-6">
      <button
        type="button"
        className="cursor-pointer w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#14d7e3] flex items-center justify-center hover:bg-gradient-to-r from-[#29d3c5] to-[#cfd212] transition-all"
      >
        <img className="w-2.5 h-5" alt="Facebook" src={FacebookImg} />
      </button>

      <button
        type="button"
        className="cursor-pointer w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#61616180] flex items-center justify-center hover:bg-gradient-to-r from-[#29d3c5] to-[#cfd212] transition-all"
        onClick={handleGoogleLogin}
      >
        <img className="w-5 h-5" alt="Google" src={GoogleImg} />
      </button>

      <button
        type="button"
        className="cursor-pointer w-11 h-11 md:w-12 md:h-12 rounded-full border border-[#61616180] flex items-center justify-center hover:bg-gradient-to-r from-[#29d3c5] to-[#cfd212] transition-all"
      >
        <img className="w-5 h-4" alt="Twitter" src={TwitterImg} />
      </button>
    </div>
  );
};

export default SocialMediaLinks;
