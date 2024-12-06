"use client";
import scss from "./Header.module.scss";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue) {
      router.push(`/`);
    }
  };

  const handleSearch = () => {
    if (searchValue) {
      router.push(`/}`);
    }
  };

  return (
    <div className={scss.Header}>
      <div className={scss.content}>
        <input
          type="text"
          placeholder="Search for music..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeydown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Header;
