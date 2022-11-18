import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PAGE } from '../../types/navigation';
import { LinkATag, NavigationMenuBox, NavItem } from './styles';

const headerNavigationLinks: { title: string; url: PAGE }[] = [
  { title: 'Discover', url: PAGE.DISCOVER },
  { title: 'Start a project', url: PAGE.STARTPROJECT },
  { title: 'FAQ', url: PAGE.FAQ },
  { title: 'My', url: PAGE.MY },
  { title: 'Stats', url: PAGE.STATS },
];

export const Navigation = () => {
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentNavigationLink = headerNavigationLinks.find((link) => router.pathname.includes(link.url) && link.url !== PAGE.HOME);
    setActive(currentNavigationLink?.title ?? null);
  }, [router.pathname]);

  return (
    <NavigationMenuBox>
      {headerNavigationLinks.map(({ title, url }, index) => {
        return (
          <NavItem key={index}>
            <Link href={url}>
              <LinkATag bold={active === title}>{title}</LinkATag>
            </Link>
          </NavItem>
        );
      })}
    </NavigationMenuBox>
  );
};