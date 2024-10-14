"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

const ButtonLead = ({ extraStyle, variant = "row" }) => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();

    setIsLoading(true);
    try {
      await apiClient.post("/lead", { email });

      toast.success("Thanks for joining the waitlist!");

      inputRef.current.blur();
      setEmail("");
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formClasses = `w-full ${
    variant === "row" ? "flex items-center space-x-2" : "max-w-xs space-y-3"
  } ${extraStyle || ""}`;

  const inputClasses = `input input-bordered placeholder:opacity-60 ${
    variant === "row" ? "flex-grow w-[calc(100%-130px)]" : "w-full"
  }`;

  const buttonClasses = `btn btn-primary ${
    variant === "row" ? "whitespace-nowrap" : "w-full"
  }`;

  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      <input
        required
        type="email"
        value={email}
        ref={inputRef}
        autoComplete="email"
        placeholder="tiredmum@email.com"
        className={inputClasses}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className={buttonClasses}
        type="submit"
        disabled={isDisabled || isLoading}
      >
        Get Weekly Deals
        {isLoading ? (
          <span className="loading loading-spinner loading-xs ml-2"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default ButtonLead;