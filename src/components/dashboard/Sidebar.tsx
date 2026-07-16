"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FiUser } from "react-icons/fi";
import { LuBox, LuSettings } from "react-icons/lu";

const Sidebar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const path = usePathname();
  const router = useRouter()
  // console.log(user);

  const buyer: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }[] = [
    { icon: LuBox, label: "My Order", href: "/dashboard/buyer/my-order" },

    { icon: FiUser, label: "Profile", href: "/dashboard/buyer/profile" },
    { icon: LuSettings, label: "Settings", href: "/dashboard/buyer/settings" },
  ];
  const seller: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }[] = [
    { icon: LuBox, label: "Overview", href: "/dashboard/seller/overview" },
    {
      icon: LuBox,
      label: "Add Product",
      href: "/dashboard/seller/add-product",
    },

    { icon: FiUser, label: "Profile", href: "/dashboard/seller/profile" },
  ];
  const admin: {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }[] = [
    {
      icon: LuBox,
      label: "Manage Product",
      href: "/dashboard/admin/manage-product",
    },

    { icon: FiUser, label: "Profile", href: "/dashboard/admin/profile" },
  ];


  const handleLogOut = async()=>{
    await authClient.signOut()
    toast.success('Log out successful')
    router.push('/')
  }

  const navItems =
    user?.role === "buyer" ? buyer : user?.role === "seller" ? seller : admin;
  return (
    <div className="w-full md:w-56 border-r md:border-r md:border-slate-500">
      <div className="py-10 flex flex-col justify-between gap-10">
        <div className="">
          <span className="font-exo2 text-sm font-medium uppercase">
            My Account
          </span>
          <div className="flex items-center gap-3">
            <div>
              <Avatar className="rounded-lg">
                <Avatar.Image alt="Square Avatar" src={user?.image} />
                <Avatar.Fallback className="rounded-lg">SQ</Avatar.Fallback>
              </Avatar>
            </div>
            <div>
              <h2 className="text-xl font-exo2 font-bold">{user?.name}</h2>
              <span className="text-sm font-mono text-slate-400 -mt-3">
                {user?.role}
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-1 pr-3 mt-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default ${path === item.href ? "bg-default" : ""}`}
                type="button"
              >
                <item.icon className="size-5 text-muted" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pr-3">
          <Button fullWidth onClick={handleLogOut}>Log Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
