import React, { useState, useEffect } from 'react';
import Titles from "./Components/Text/Titles";
import TextContainer from "./Components/Text/TextContainer";
import ProfileDashboard from "./Components/Informations/ProfileDashboard";
import {useTranslation} from "react-i18next";
import Modal from "./Components/Modal/Modal";

function Homepage() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  useEffect(() => {
    openModal("TEST");
  }, []);

  const openModal = (content: React.SetStateAction<string>) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <Modal
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        onClose={closeModal}
      />
      <div className="ml-[20%] w-[80%]">
        <div className="w-[60%] flex justify-center items-center py-16">
          <div className={"flex justify-center flex-col items-center gap-16"}>
            <div className={"w-[60%]"}>
              <Titles title={t('HomePageTitle')} fontWeight={"bold"} size={2.5}/>
            </div>
            <div className="flex flex-col gap-16">
              <TextContainer title={t('WaterCons')} content={t('WaterConsText')} />
              <TextContainer title={t('EnergyCons')} content={t('EnergyConsText')} />
            </div>
          </div>
        </div>
      </div>
      <ProfileDashboard />
    </div>
  );
}

export default Homepage;
