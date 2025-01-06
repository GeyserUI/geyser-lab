"use client";

import {
  Album,
  Component,
  FlaskConical,
  Home,
  LibraryBig,
  NotebookTabs,
  Search,
  Settings,
} from "lucide-react";
import { GradientBorderButton } from "./ui/gradient-border-button";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Link } from "next-view-transitions";
import LabNavigation from "./lab-navigation";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegments } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const navItems = [
  // { label: "Home", href: "/", icon: Home },
  { label: "Labs", href: "/labs/lab-1", icon: FlaskConical },
  { label: "Library", href: "/lib", icon: LibraryBig },
  { label: "Headcn", href: "/headcn", icon: Component },
  // { label: "Guides", href: "/guides", icon: NotebookTabs },
];

function Header({ version }: { version: string }) {
  const segments = useSelectedLayoutSegments();

  const isLabsPage = segments.includes("labs");

  return (
    <>
      <div
        className={cn(
          "flex justify-between w-full p-4",
          isLabsPage ? "border-b " : null
        )}
      >
        <div className="flex gap-4 items-center">
          <Image
            src={"/geyser-black.svg"}
            height={24}
            width={24}
            alt="geyser logo"
            className="dark:invert "
          />
          {/* <div className="rounded-[5px] h-fit font-mono bg-neutral-800 leading-[10px] px-1.5 py-1 text-[14px] text-white shadow">
            v{version}
          </div> */}
          <div className="font-mono py-1 px-2 bg-neutral-50 text-xs border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg">
            v{version}
          </div>
          <Separator
            orientation="vertical"
            className="h-5 w-px dark:bg-gray-600 bg-neutral-400"
          />
          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive =
                (segments.length === 0 && item.href === "/") || // Handle root page
                segments.includes(
                  item.href.replace("/", "").split("/").pop() || ""
                );

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "dark:hover:text-white/80 hover:text-black/80 gap-2 flex items-center text-lg font-medium transition-colors py-1  px-2 sm:text-sm",
                    isActive
                      ? "text-foreground bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg "
                      : "text-foreground/60"
                  )}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <Button
            className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
            asChild
            variant={"outline"}
          >
            <Link
              href="https://github.com/origin-space/originui"
              target="_blank"
            >
              <svg
                className="-ms-0.5 me-2 fill-current text-zinc-500"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6C16 3.6 12.4 0 8 0Z" />
              </svg>
              <span className="flex items-baseline   gap-1">
                Star on Github
              </span>
            </Link>
          </Button>
          <ThemeToggle />
          <Button
            className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
            size={"icon"}
            variant={"outline"}
          >
            <Search />
          </Button>
          {/* <Button
            className="bg-neutral-50 border dark:border-neutral-700 shadow dark:bg-neutral-800 rounded-lg text-foreground"
            size={"icon"}
            variant={"outline"}
          >
            <Settings />
          </Button> */}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLabsPage && (
          <motion.div
            key="lab-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <LabNavigation />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
