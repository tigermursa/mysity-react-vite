import { useForm } from "react-hook-form";
import { useAddDataMutation } from "../../redux/api/api";
import { useState } from "react";
import { FaArrowsSpin } from "react-icons/fa6";

const AddWebsite = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [addData, { isLoading, isError }] = useAddDataMutation();
  const [status, setStatus] = useState(null);

  const onSubmit = async (formData) => {
    try {
      await addData(formData);
      setStatus("success");
      // console.log("Data added successfully!");
      reset();
    } catch (error) {
      setStatus("error");
      console.error("Error adding data:", error);
    }
  };
  //error handling from redux and loader
  if (isLoading) {
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
  } else if (isError) {
    return (
      <div className="flex h-screen justify-center items-center text-red-500 text-2xl font-extrabold font-mono">
        <p className="flex items-center gap-2">ERROR! SOMETHING WENT WRONG !</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-96 md:w-96">
        <h2
          className={`text-2xl font-bold mb-4 font-mono ${
            status === "success" ? "text-green-500" : ""
          }`}
        >
          {status === "success" ? "Added successfully" : "Add Website"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              placeholder="Name of the website"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              id="category"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              <option value="">Select Category</option>
              <option value="development">Development</option>
              <option value="deployment">Deployment</option>
              <option value="ui">UI</option>
              <option value="learning">Learning</option>
              <option value="ai">AI</option>
              <option value="github">GitHub</option>
              <option value="my-hosted">GitHub</option>
              <option value="news">News</option>
              <option value="google">Google</option>
              <option value="resume">Resume</option>
              <option value="cool">Cool</option>
              <option value="others">Others</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value: /^https?:\/\//,
                  message: "Invalid URL format",
                },
              })}
              type="text"
              placeholder="Put hosted image URL"
              id="image"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-600"
            >
              Link URL
            </label>
            <input
              {...register("link", {
                required: "Link URL is required",
                pattern: {
                  value: /^https?:\/\//,
                  message: "Invalid URL format",
                },
              })}
              type="text"
              id="link"
              placeholder="Website address"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            {errors.link && (
              <p className="text-red-500 text-sm">{errors.link.message}</p>
            )}
          </div>
          <div className="">
            <button type="submit" className="btn-grad">
              {isLoading ? "Adding..." : "Add Website"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWebsite;
