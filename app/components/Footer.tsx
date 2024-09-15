'use client'
import React from 'react'
import { Label } from './acce-ui/label'
import { Input } from './acce-ui/input'
import { cn } from '@/lib/utils'
import { IconBrandGithub, IconBrandGoogle, IconHome, IconTerminal2, IconNewSection, IconExchange, IconBrandX } from '@tabler/icons-react'
import { FloatingDock } from './acce-ui/floatingdock'

const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
const Footer = () => {

    return (
        <div>
            <FloatingDock items={links} />
        </div>
    )
}

export default Footer