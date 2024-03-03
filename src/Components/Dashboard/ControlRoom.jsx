import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { useGetDataQuery } from "../../redux/api/api";

const ControlRoom = () => {
  const { data } = useGetDataQuery("");

  return (
    <div className=" border w-[900px]  mt-8">
      <h2 className="text-2xl font-bold mb-4">Website Control Room</h2>
      <div className="">
        <table className=" bg-white border border-gray-300 border w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((website) => (
              <tr key={website._key}>
                <td className="py-2 px-4 border-b ">{website.name}</td>
                <td className="py-2 px-4 border-b">{website.category}</td>
                <td className="py-2 px-4 border-b flex gap-5">
                  <button className="text-blue-700">
                    <FaPenToSquare />
                  </button>
                  <button className="text-red-600">
                    <FaTrashCan />
                  </button>
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
