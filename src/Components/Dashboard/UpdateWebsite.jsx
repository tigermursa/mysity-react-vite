import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useGetDataQuery, useUpdateDataMutation } from "../../redux/api/api";

const UpdateWebsite = () => {
  const { id } = useParams();
  const { data, status } = useGetDataQuery(id);
  const siteData = data?.data;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [updateData, { isLoading }] = useUpdateDataMutation();

  const onSubmit = async (formData) => {
    try {
      await updateData({ id, data: formData });
      Swal.fire({
        icon: "success",
        title: "Updated successfully",
        showConfirmButton: false,
        timer: 1500, // Timer to automatically close the alert
      }).then(() => {
        // Redirect to "/control" after clicking the alert
        window.location.href = "/control";
      });
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  useEffect(() => {
    if (siteData && siteData.length > 0) {
      const websiteToUpdate = siteData.find((website) => website._id === id);

      if (websiteToUpdate) {
        setValue("name", websiteToUpdate.name || "");
        setValue("category", websiteToUpdate.category || "");
        setValue("image", websiteToUpdate.image || "");
        setValue("link", websiteToUpdate.link || "");
      }
    }
  }, [siteData, id, setValue]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-96 md:w-96">
        <h2
          className={`text-2xl font-bold mb-4 font-mono ${
            status === "success" ? "text-green-500" : ""
          }`}
        >
          {status === "success" ? "Updated successfully" : "Update Website"}
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
              defaultValue={data?.name || ""}
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
              {isLoading ? "Updating..." : "Update Website"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateWebsite;
