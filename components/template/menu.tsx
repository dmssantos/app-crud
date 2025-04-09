import { IconHome, IconUser } from "@tabler/icons-react";
import MenuItem from "./menuItem";

const Menu = () => {
  return (
    <aside className="w-72 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem
          MenuItemIcon={IconHome}
          menuItemText="Início"
          menuItemUrl="/"
        />
        <MenuItem
          MenuItemIcon={IconUser}
          menuItemText="Cadastro Usuários"
          menuItemUrl="/users"
        />
      </nav>
    </aside>
  );
};

export default Menu;
