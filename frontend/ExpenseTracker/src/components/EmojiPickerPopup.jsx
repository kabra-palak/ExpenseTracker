import React, { useState } from 'react';
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from 'react-icons/lu';

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12" />
          ) : (
            <LuImage />
          )}
        </div>
        <p className="text-sm font-medium">{icon ? "Change Icon" : "Pick Icon"}</p>
      </div>

      {isOpen && (
        <div className="relative mt-4 ml-4 z-50">
          <button
            className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-3 -right-3 z-10 cursor-pointer shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <LuX />
          </button>
          <div className="shadow-md rounded-md">
            <EmojiPicker
              onEmojiClick={(emoji) => {
                onSelect(emoji?.imageUrl || "");
                setIsOpen(false); // optionally close after selecting
              }}
              lazyLoadEmojis={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerPopup;
