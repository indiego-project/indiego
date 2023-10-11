// logos for default settings
import ChatIcon from "../../../public/icons/navbar/chatIcon.svg";
import MapIcon from "../../../public/icons/navbar/mapIcon.svg";
import TicketIcon from "../../../public/icons/navbar/ticketIcon.svg";
import UserIcon from "../../../public/icons/navbar/userIcon.svg";

interface INavbarLink {
  icon: JSX.Element;
  title: string;
}

interface INavbarProps {
  links?: INavbarLink[];
}

const defaultLinks = [
  { icon: <TicketIcon />, title: "티켓팅" },
  { icon: <MapIcon />, title: "지도찾기" },
  { icon: <ChatIcon />, title: "커뮤니티" },
  { icon: <UserIcon />, title: "내 정보" },
];

const Navbar = ({ links = defaultLinks }: INavbarProps) => {
  const NavbarLink = ({ icon, title }: INavbarLink) => {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        {icon}
        <p className="text-xs text-[#828282] mt-2">{title}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 max-w-mb_base w-full h-20 absolute bottom-0 bg-[#f1f1f1] border border-[#828282] border-b-0 rounded-tl-[20px] rounded-tr-[20px]">
      {links.map((link) => (
        <NavbarLink
          icon={link.icon}
          title={link.title}
          key={`navbar_${link.title}`}
        />
      ))}
    </div>
  );
};

export default Navbar;
