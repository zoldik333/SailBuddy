import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import EditProfileModal from "../Modal/EditProfilModal";

interface InformationContentProps {
  title: string;
  content: string;
}

function InformationContent({title, content} : InformationContentProps) {
  return (
    <div className={"text-[#1A2B78] text-[1.2em]"}>
      {title} : <span className={"font-bold"}>{content}</span>
    </div>
  )
}


export default function ProfileInformation() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Nom Prénom",
    email: "nom.prenom@gmail.com",
    phone: "07.86.54.87.65",
    password: "**********",
    profileImage: "assets/profile/profile_template.png", // Default profile image
  });

  const handleSave = (data: { name: string; email: string; phone: string; password: string }) => {
    setProfileData((prev) => ({ ...prev, ...data }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfileData((prev) => ({
            ...prev,
            profileImage: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col bg-[#FFE8D7] pl-16 pb-16 rounded-2xl">
      <div className="flex justify-end mb-8 mt-8 mr-8">
        <img
          src={"assets/profile/edit_icon.webp"}
          alt={"Change profile information"}
          className="h-12 w-12 object-cover cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className="w-full h-auto flex flex-row bg-[#FFE8D7] rounded-2xl gap-16">
        <label className="relative cursor-pointer">
          <img
            src={profileData.profileImage}
            alt={"Profile"}
            className="w-64 h-64 object-cover rounded-2xl"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageUpload}
          />
        </label>
        <div className="flex flex-col justify-between">
          <div className="text-[#1A2B78] font-bold text-[1.3em]">{profileData.name}</div>
          <InformationContent title={t("Adress")} content={"13015 Chem. du Littoral, 13015 Marseille"} />
          <InformationContent title={t("Email")} content={profileData.email} />
          <InformationContent title={t("Phone")} content={profileData.phone} />
          <InformationContent title={t("Password")} content={profileData.password} />
          <div className="text-[#1A2B78] underline cursor-pointer">{t("ForgotPassword")}</div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        defaultValues={profileData}
      />
    </div>
  );
}