import { EggFriedIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-white flex gap-2 items-center justify-center"
        >
          <EggFriedIcon className="h-10 w-10 animate-spin" />
          Epicure
        </Link>
        <div className="text-white font-bold tracking-tight flex gap-4">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};
