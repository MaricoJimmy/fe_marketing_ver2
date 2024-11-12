import React from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";

function MenuItem({ className, title, children, href, ...props }) {
  return (
    <li className="w-full ">
      <NavigationMenuLink asChild>
        <Link href={href} {...props}>
          <a
            className={`${className} block select-none space-y-1 p-3 bg-transparent hover:bg-primary/5 no-underline outline-none transition-colors cursor-pointer rounded-md`}
          >
            <div className="text-base text-gray text-nowrap font-semibold leading-none">
              {title}
            </div>
            {/* {children ? (
              <p className="line-clamp-2 text-nowrap text-sm leading-snug text-muted-foreground font-medium">
                {children}
              </p>
            ) : null} */}
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default MenuItem;
