import React, {useState} from "react";
import ClassicButton from "../Buttons/ClassicButton";
import Titles from "../Text/Titles";
import { useTranslation } from "react-i18next";
import axios from 'axios';

interface ModalProps {
  isModalOpen: boolean,
  modalContent: string,
  onClose: () => void
}

export default function Modal(props: ModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  if (!props.isModalOpen) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      return;
    }
    console.log(`http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/auth/login`);
    let data = {
      login: formData.email,
      password: formData.password,
    }
    try {
      const response = await axios.post(`http://localhost:8080/auth/login`, data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      if (response.status === 200) {
        console.log('User logged in successfully');
        props.onClose();
      }
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-dark-orange w-1/2 p-6 rounded-md shadow-lg">
        <div className={"w-auto text-center"}>
          <Titles title={t('ModalTitle')} fontWeight={"bold"} size={2.5} />
        </div>
        <div className={"flex w-full pt-20 gap-12"}>
          <div className={"flex justify-center p-4 pl-8"}>
            <img src={"assets/logo-sailbuddy-simple.png"} alt={""} className={"h-auto"} />
          </div>
          <div className={"flex grow"}>
            <div className="flex flex-col gap-6 flex-1">
              <p className={"flex"}>Veuillez entrer vos informations pour vous connecter</p>
              <form onSubmit={handleSubmit} className={"flex flex-col gap-6"}>
                <div className={"flex flex-col"}>
                  <label htmlFor="email">E-mail ou tel.</label><br/>
                  <input
                    type="text"
                    id="email"
                    placeholder={t("ModalEmail")}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-[70%]  p-4 px-4 bg-[#FEFCF4] rounded-full cursor-pointer"
                  />
                </div>

                <div className={"flex flex-col"}>
                  <label htmlFor="password">Mot de passe</label><br/>
                  <input
                    type="password"
                    id="password"
                    placeholder={t("ModalPassword")}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-[70%] p-4 px-4 bg-[#FEFCF4] rounded-full cursor-pointer"
                  />
                </div>
                <div className="w-[70%]">
                  <ClassicButton content={t("Connect")} onClick={handleSubmit}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
