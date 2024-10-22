import React from "react";
import { LayoutGrid, Settings, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

const MyApps: React.FC = () => {
  return (
    <NavigationMenu className="flex flex-col space-y-2 space-x-2 p-4">
      <NavigationMenuList className="flex flex-col">
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="flex items-center hover:opacity-80">
            <LayoutGrid className="mr-2" /> My First App
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="flex items-center  hover:opacity-80">
            <Settings className="mr-2" /> My Second App
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger className="flex items-center  hover:opacity-80">
            <User className="mr-2" /> My Third App
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MyApps;
