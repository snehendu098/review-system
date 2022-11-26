import React, { useState } from "react";
import emojis from "../helper/constants";
import axios from "axios";
import { toast } from "react-toastify";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [idx, setIdx] = useState(null);

  const createRequest = async () => {
    try {
      if (name && idx) {
        console.log(name);
        console.log(idx);
        const data = { name: name, emojiIdx: idx };
        const res = await axios.post("http://localhost:1337/api/reviews", {
          data,
        });
        toast.success("Thanks for your feedback");
        setName("");
        setIdx(null);
      } else {
        toast.error("Please enter all fields");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-1/3 flex flex-col items-center overflow-hidden rounded-xl bg-blue-200 shadow-xl">
      <p className="text-xl px-40 bg-blue-700 text-white p-2 w-full font-semibold tracking-wide">
        Feedback Form
      </p>

      <div className="flex items-center justify-center mt-5 w-full">
        <p className="text-xl font-semibold">Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 text-md ml-5 rounded-md shadow-lg"
          placeholder="John Doe"
        />
      </div>
      <p className="mt-2 text-slate-400 font-semibold">
        Please provide an appropriate review
      </p>
      <div className="w-full grid grid-cols-4 mt-2 place-content-stretch gap-5 px-3">
        {emojis.map((item, index) => (
          <div
            key={index}
            onClick={() => setIdx(index)}
            className={`p-2 flex items-center flex-col hover:bg-blue-600 hover:text-white cursor-pointer ${
              index === idx && "bg-blue-600 text-white"
            } `}
          >
            <img src={item.image} alt={item.name} className="h-14 w-14" />
            <p className="text-sm text-center font-bold">{item.name}</p>
          </div>
        ))}
      </div>
      <div
        onClick={createRequest}
        className="w-full mb-2 flex flex-row-reverse p-4"
      >
        <p className="text-md bg-blue-500 text-white p-2 rounded-md shadow-xl cursor-pointer duration-500 hover:bg-blue-700">
          Submit Form
        </p>
      </div>
    </div>
  );
};

export default FeedbackForm;
