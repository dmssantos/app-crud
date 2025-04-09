import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  MenuItemIcon: ElementType;
  menuItemText: string;
  menuItemUrl: string;
}

export default function MenuItem({
  MenuItemIcon,
  menuItemText,
  menuItemUrl,
}: MenuItemProps) {
  return (
    <Link href={menuItemUrl} className="flex gap-2 px-4 py-2 hover:bg-black">
      <MenuItemIcon className="text-zinc-200" size={24} stroke={1} />
      <span className="text-zinc-200">{menuItemText}</span>
    </Link>
  );
}
