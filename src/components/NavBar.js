import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Link} from "react-scroll";

const navigation = [
    {name: 'About', href: '#', current: true, to: "about"},
    {name: 'Projects', href: '#projects', current: false, to: "projects"},
    {name: 'Contact', href: '#', current: false, to: "contact"},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    function handleSetActive(to) {
        console.log("heeey"+ to);
    }
    return (
        <Disclosure as="nav" className="sticky z-40 top-0  bg-primary-dark">
            {({open}) => (
                <>
                    <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-element hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                activeClass={'bg-element text-accent' }
                                                to={item.to}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                className={classNames(
                                                    'bg-primary-dark text-accent hover:bg-element  hover:text-white ' +
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                onSetActive={handleSetActive(item.name)}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    activeClass={'bg-element text-accent'}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className={classNames(
                                        'bg-primary-dark  hover:bg-element hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    onSetActive={handleSetActive(item.name)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
