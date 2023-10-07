import { useState } from "react";
import Input from "../ui/input.jsx";
import { TextArea } from "../ui/text-area.jsx";

export const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  return (
    <div className="text-center">
      <h1 className="fs-2">Create Article</h1>
      <div className="w-75 mx-auto ">
        <form className="d-flex flex-column gap-4">
          <Input
            type={"text"}
            placeholder={"Maqola nomini kiriting"}
            inputName={"Maqola nomini kiriting"}
            value={title}
            setState={setTitle}
          />
          <TextArea
            placeholder={"Maqola uchun ta'rif kiriting"}
            inputName={"Maqola uchun ta'rif kiriting"}
            value={description}
            setState={setDescription}
          />
          <TextArea
            placeholder={"Maqola matnini kiriting"}
            inputName={"Maqola matnini kiriting"}
            value={body}
            setState={setBody}
            height="300px"
          />
        </form>
      </div>
    </div>
  );
};
