import React, {useState} from 'react';
import Titles from "../Text/Titles";
import ClassicButton from "../Buttons/ClassicButton";
import {useTranslation} from "react-i18next";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { t } = useTranslation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.name || !formData.message) {
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className={"flex flex-row bg-[#FFE8D7] p-16 rounded-2xl gap-8"}>
      <div className={"flex flex-col items-center justify-center"}>
        <img src={"assets/navbar/logo-sailbuddy.png"} alt={""} className={"w-64 h-auto"} />
        <Titles title={t("ContactUs")} />
      </div>

      <div className="flex flex-col gap-6 flex-1">
        <form onSubmit={handleSubmit} className={"flex flex-col gap-6"}>
          <div className={"flex flex-col"}>
            <input
              type="text"
              id="name"
              placeholder={t("EnterName")}
              value={formData.name}
              onChange={handleInputChange}
              className="py-2 border-b-2 border-b-[#1A2B78] mt-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1A2B78] focus:border-[#1A2B78] focus:rounded"
            />
          </div>

          <div className={"flex flex-col"}>
            <input
              type="email"
              id="email"
              placeholder={t("EnterMail")}
              value={formData.email}
              onChange={handleInputChange}
              className="py-2 border-b-2 border-b-[#1A2B78] mt-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1A2B78] focus:border-[#1A2B78] focus:rounded"
            />
          </div>

          <div className={"flex flex-col"}>
            <textarea
              id="message"
              placeholder={t("EnterMessage")}
              value={formData.message}
              onChange={handleInputChange}
              className="border-b-2 border-b-[#1A2B78] resize-none bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1A2B78] focus:border-[#1A2B78] focus:rounded"
            />
          </div>

          <ClassicButton content={t("Send")} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}