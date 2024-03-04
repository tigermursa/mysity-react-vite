import { NavLink } from "react-router-dom";
import { useGetDataQuery } from "../../redux/api/api";
import { FaArrowsSpin } from "react-icons/fa6";

const TestingShow = () => {
  const { data, isFetching, isLoading } = useGetDataQuery("");
  const developmentSites = data?.data;
  const openNewWindow = (link) => {
    window.open(link, "_blank");
  };

  if (isFetching || isLoading) {
    return (
      <div className="flex h-screen justify-center items-center text-blue-800 text-2xl font-extrabold font-mono">
        <p className="flex items-center gap-2">
          Loading{" "}
          <span>
            <FaArrowsSpin className="animate-spin" />
          </span>
        </p>
      </div>
    );
  }

  return (
    <>
      {developmentSites?.length === 0 ? (
        <h1 className="text-red-600 font-bold font-mono h-screen flex items-center text-xl md:text-2xl">
          NO WEBSITE ADDED YET 🧐
        </h1>
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
