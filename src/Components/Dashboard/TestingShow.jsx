import { NavLink } from "react-router-dom";
import { useGetDataQuery } from "../../redux/api/api";

const TestingShow = () => {
  const { data } = useGetDataQuery("");
  const developmentSites = data?.data;
  const openNewWindow = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
    {developmentSites?.length === 0 ? (
      <h1 className="text-red-600 font-bold font-mono h-screen flex items-center text-xl md:text-2xl">NO WEBSITE ADDED YET 🧐</h1>
    ) : (
      <div className="flex flex-wrap justify-center">
        {developmentSites?.map((site) => (
          <div
            key={site._key}
            className="min-w-[100px] md:max-w-[300px] max-h-[300px] m-4 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={site.image}
              alt={site.name}
              className="min-w-[300px] h-40 object-fill object-center"
            />
            <div className="p-4">
              <h3 className="text-xl text-center font-bold mb-2">
                {site.name}
              </h3>
              <NavLink
                onClick={() => openNewWindow(site.link)}
                className="btn-grad font-semibold font-sans"
              >
                Visit now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
  );
};

export default TestingShow;
