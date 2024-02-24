import mobileImage from "../assets/mobileapp.png";
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-orange-600">
          Discover Deliciousness, Delivered Fast
        </h1>
        <span className="text-sm md:text-xl">
          Find Your Favorite Food, Anywhere, Anytime
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={mobileImage} alt="mobileappimage" />
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the Epicure mobile app for faster ordering and personalised
            recommendations.
          </span>
          <img src={appDownloadImage} alt="appdownloadimage" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
