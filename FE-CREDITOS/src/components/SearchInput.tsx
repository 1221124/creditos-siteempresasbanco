import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <InputGroup>
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>
      <FormControl
        value={searchTerm}
        placeholder={placeholder}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
