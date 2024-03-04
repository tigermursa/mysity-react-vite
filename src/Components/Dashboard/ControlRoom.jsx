import { FaGear, FaPenToSquare, FaTrashCan, FaWrench } from "react-icons/fa6";
import { useGetDataQuery } from "../../redux/api/api";

const ControlRoom = () => {
  const { data } = useGetDataQuery("");

  return (
    <div className="  min-w-[300px] md:min-w-[450px] lg:min-w-[900px]">
      <h2 className="text-xl md:text-4xl font-bold mb-4 text-center font-mono mt-10  flex justify-center gap-2 md:gap-4">
        <FaWrench className="text-gray-600 animate-bounce " /> Website
        <span className="text-blue-600">Control</span>
        Room{" "}
        <FaGear
          className="text-gray-600 animate-spin 
        "
        />
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-t border-s text-left">
                Name
              </th>
              <th className="py-2 px-4 border-b  border-t text-left hidden md:block">
                Category
              </th>
              <th className="py-2 px-4 border-b  border-t text-left">Edit</th>
              <th className="py-2 px-4 border-b  border-t border-e text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((website) => (
              <tr key={website._key}>
                <td className="py-2 px-4 border-b border-s text-left">
                  {website.name}
                </td>
                <td className="py-2 px-4 border-b text-left hidden md:block">
                  {website.category}
                </td>
                <td className="py-2 px-4 border-b   cursor-pointer ">
                  <FaPenToSquare className="ms-2  text-blue-700 hover:text-blue-500 " />
                </td>
                <td className="py-2 px-4 border-b  border-e cursor-pointer">
                  <FaTrashCan className="ms-3 text-red-700 hover:text-red-500 " />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ControlRoom;
