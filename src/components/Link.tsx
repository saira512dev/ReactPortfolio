import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  style?: string;
};

const Link = ({ page, selectedPage, setSelectedPage, style = "" }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  const pageLink = page
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  function handleLinkClick() {
    setSelectedPage(lowerCasePage);
  }

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-indigo-400" : ""} 
    ${
      style == "" ? "" : style
    } transition duration-500 hover:text-primary-300 font-dmsans font-medium tracking-wide
    `}
      href={`#${lowerCasePage}`}
      onClick={handleLinkClick}
    >
      {pageLink}
    </AnchorLink>
  );
};

export default Link;
