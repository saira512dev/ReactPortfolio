import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  const pageLink = page
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  console.log(page, lowerCasePage, pageLink, `#${lowerCasePage}`);

  function handleLinkClick() {
    setSelectedPage(lowerCasePage);
  }

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-indigo-400" : ""}
  transition duration-500 hover:text-primary-300 font-dmsans font-medium tracking-wide`}
      href={`#${lowerCasePage}`}
      onClick={handleLinkClick}
    >
      {pageLink}
    </AnchorLink>
  );
};

export default Link;
