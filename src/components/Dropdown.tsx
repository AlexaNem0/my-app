import React from "react";

/**
 *
 * component props:
 * - button text, eg. catalog
 * - nested list of links as object: {link: "http:/example.com", text: "text"}
 *
 */

interface Link {
  link: string;
  text: string;
  children?: Link[];
}
interface DropdownProps {
  label: string;
  links: Link[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, links }) => {
  return (
    <div className="m-auto" data-testid="dropdown">
      add your code here
    </div>
  );
};
export default Dropdown;
