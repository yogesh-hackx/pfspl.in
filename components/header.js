import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { elastic as Menu } from 'react-burger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import HamMenu from '@components/HamMenu';

const menus = {
    slide: { buttonText: 'Slide', items: 1 },
    stack: { buttonText: 'Stack', items: 1 },
    elastic: { buttonText: 'Elastic', items: 1 },
    bubble: { buttonText: 'Bubble', items: 1 },
    push: { buttonText: 'Push', items: 1 },
    pushRotate: { buttonText: 'Push Rotate', items: 2 },
    scaleDown: { buttonText: 'Scale Down', items: 2 },
    scaleRotate: { buttonText: 'Scale Rotate', items: 2 },
    fallDown: { buttonText: 'Fall Down', items: 2 },
    reveal: { buttonText: 'Reveal', items: 1 },
};

const menuItems = [
    { title: 'Home', route: '/' },
    { title: 'About Us', route: '/about' },
    { title: 'Contact Us', route: '/contact' },
    { title: 'Profile', route: '/profile' },
];

export default function Header() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <>
            <header className="fixed w-full z-10 nav-bar">
                <div className="flex flex-wrap items-center  sm:justify-between justify-between lg:container px-4 py-2 mx-auto md:flex-no-wrap md:px-6">
                    <div className="flex items-center self-start">
                        <Link href="/">
                            <Image
                                src="/LOGO.svg"
                                width={108}
                                height={44}
                                // layout="fill"
                                priority
                                alt="PFS LOGO"
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="flex">
                        {menuItems.map(({ route, title }) => (
                            <li
                                className="mt-3 md:mt-0 md:ml-6 list-none hidden md:flex"
                                key={title}
                            >
                                <Link href={route}>
                                    <a className="text-white">{title}</a>
                                </Link>
                            </li>
                        ))}
                    </div>
                    <HamburgerMenu
                        isOpen={mobileMenuIsOpen}
                        menuClicked={() =>
                            setMobileMenuIsOpen(!mobileMenuIsOpen)
                        }
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color="white"
                        borderRadius={0}
                        animationDuration={0.5}
                        className="mx-3 text-white rounded md:hidden"
                    />
                    {/* <HamMenu menus={menus} /> */}

                    {/* <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> */}
                </div>
            </header>
            <div className="menu-container" id="menu-container">
                <Menu
                    outerContainerId="menu-container"
                    // className={cn('h-full text-sm md:hidden')}
                    isOpen={mobileMenuIsOpen}
                    onClose={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                    right
                    width={'300px'}
                    noOverlay
                    burgerButtonClassName={'hidden-ham-button'}
                >
                    {menuItems.map(({ route, title }) => (
                        <li
                            className="mt-3 md:mt-0 md:ml-6"
                            key={title}
                            onClick={() =>
                                setMobileMenuIsOpen(!mobileMenuIsOpen)
                            }
                        >
                            <Link href={route}>
                                <a className="text-white">{title}</a>
                            </Link>
                        </li>
                    ))}
                </Menu>
            </div>
        </>
    );
}
