import { Avatar } from "@mantine/core";
import { IconBinoculars, IconSettings } from "@tabler/icons-react";
const Header = () => {
  return <header
    className="w-full bg-black text-white p-4 h-20 flex justify-between items-center"
    >
    <div className="flex gap-1 items-center">
      <IconBinoculars />
      <span><span className="text-orange-400">i</span>Jobs</span>
    </div>
    <div>
      links
    </div>
    <div className="flex gap-1 items-center">
      <span>User</span>
      <Avatar />
      <IconSettings />
    </div>
  </header>;
  
}

export default Header