// AddPost.tsx
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Send } from "lucide-react";

const schema = yup.object().shape({
  content: yup
    .string()
    .min(10, "Post must be at least 10 characters long")
    .required("Post content is required"),
});

const AddPost: React.FC = () => {
  const [textAreaHeight, setTextAreaHeight] = useState(80);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Post submitted:", data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight } = event.target;
    setTextAreaHeight(Math.min(scrollHeight, 300));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <Controller
        name="content"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <textarea
            {...field}
            onChange={(e) => {
              field.onChange(e);
              handleInputChange(e);
            }}
            style={{ height: `${textAreaHeight}px` }}
            className={`w-full border rounded-md p-4 resize-none transition-colors duration-200 ${
              errors.content ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="What's on your mind?"
          />
        )}
      />
      {errors.content && (
        <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
      )}
      <button
        type="submit"
        className="mt-4 flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-600"
      >
        <Send className="mr-2" />
        Submit
      </button>
    </form>
  );
};

export default AddPost;
