import { Avatar } from "@mantine/core";
import { IconBinoculars, IconSettings, IconBell } from "@tabler/icons-react";
import avatar  from "../images/icons/avatar.png";
const Header = () => {
  return <header
    className="w-full bg-mine-shaft-950 text-white p-4 h-20 flex justify-between items-center"
    >
    <div className="flex gap-1 items-center">
      <IconBinoculars className="h-10 w-10"/>
      <span className="text-2xl">
        <span className="text-orange-400 text-4xl">i</span>Jobs
      </span>
    </div>
    <div className="flex  items-center justify-around gap-6">
      <a href="">Find Jobs</a>
      <a href="">Find Talent</a>
      <a href="">Post Job</a>
      <a href="">About Us</a>
    </div>
    <div className="flex gap-1 items-center">
      <IconBell />
      <span>User</span>
      <Avatar src={avatar}/>
      <IconSettings />
    </div>
  </header>;
  
}

export default Header