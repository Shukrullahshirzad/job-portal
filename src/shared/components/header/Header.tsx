import { Avatar, Indicator } from "@mantine/core";
import { IconBriefcase, IconSettings, IconBell } from "@tabler/icons-react";
import avatar from "../../../assets/images/find_job.png"
import Navlinks from "./NavLinks.tsx";
const Header = () => {
  return (
    <header className="w-full bg-mine-shaft-950 text-white p-4 h-20 flex justify-between items-center">
      <div className="logo flex gap-1 items-center">
        <IconBriefcase className="h-10 w-10 hover:text-bright-sun-400" />
        <span className="text-bright-sun-400 text-3xl">Jobs Hub</span>
      </div>
      <div className="navlink flex  items-center justify-around gap-6">
        <Navlinks />
      </div>
      <div className="avatar flex gap-3 items-center ">
        <span>User</span>
        <Avatar src={avatar} />
        <Indicator color="bright-sun.4" size={8} offset={6} processing>
          <IconBell className="bg-mine-shaft-900 p-1 rounded-full stroke-2 text-3xl hover:text-bright-sun-400" />
        </Indicator>
        <IconSettings className="bg-mine-shaft-900 p-1 rounded-full hover:text-bright-sun-400" />
      </div>
    </header>
  );
};

export default Header;
