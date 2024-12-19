import React from "react";
import ClassicButton from "../Buttons/ClassicButton";
import Titles from "../Text/Titles";
import {useTranslation} from "react-i18next";

interface ModalProps {
  isModalOpen: boolean,
  modalContent: string,
  onClose: () => void
}

export default function  Modal(props: ModalProps) {
  const { t } = useTranslation();
  if (!props.isModalOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-amber-500 w-1/2 p-6 rounded-md shadow-lg">
        <div className={"w-auto bg-red text-center"}>
          <Titles title={t('ModalTitle')} fontWeight={"bold"} size={2.5}/>
        </div>
        <div className={"flex w-full pt-20 gap-8 bg-green-50"}>
          <div className={"flex justify-center p-4 pl-8 bg-blue-500"}>
            <img src={"assets/logo-sailbuddy-simple.png"} alt={""} className={"w-64 h-auto"}/>
          </div>
          <div className={"flex grow justify-center bg-yellow-500"}>

            <ClassicButton content={"Close"} onClick={props.onClose}/>
          </div>
        </div>

      </div>
    </div>
  );
};
