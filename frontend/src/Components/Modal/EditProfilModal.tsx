import React, { useState } from "react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; email: string; phone: string; password: string }) => void;
  defaultValues: { name: string; email: string; phone: string; password: string };
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, onSave, defaultValues }) => {
  const [formData, setFormData] = useState(defaultValues);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <h2 className="text-[#1A2B78] text-[1.5em] font-bold mb-6">Edit Profile</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-gray-300 rounded p-2 w-full"
          />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Close</button>
          <button onClick={handleSave} className="px-4 py-2 bg-[#1A2B78] text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
