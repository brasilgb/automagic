import { Link, usePage } from '@inertiajs/react';
import { IoBusiness, IoCaretForward, IoChevronForward, IoCog, IoColorPalette, IoHome, IoPeople, IoPerson } from "react-icons/io5";
import React, { useState } from 'react'
import SideLink from '../SideLink';
import { LiaCashRegisterSolid } from 'react-icons/lia';
import { GiReceiveMoney } from 'react-icons/gi';
import ApplicationLogo from '../ApplicationLogo';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosBusiness } from 'react-icons/io';
import { BiSolidBusiness } from 'react-icons/bi';

const SideBar = () => {
    const { auth } = usePage().props as any;
    const [openSide, setOpenSide] = useState(true);
    const [dropdowOpen, setDropdowOpen] = useState(false);
    return (
        <aside className={`${openSide ? "md:w-72 " : "w-20"} h-full relative bg-blue-primary duration-300 p-5 pt-8 shadow-lg`}>

            <div onClick={() => setOpenSide(!openSide)} className={`${openSide ? "rotate-180 " : "0"} duration-300 absolute cursor-pointer flex items-center justify-center -right-2 w-7 h-7 rounded-full bg-white top-16 shadow-sm border-2 border-sky-800 text-sky-800 `}>
                <IoChevronForward />
            </div>

            <div className={``}>
                <div className="flex items-center gap-x-4">
                    <ApplicationLogo />
                    <h1 className={`text-xl text-white font-bold duration-300 origin-left ${!openSide && "scale-0"}`}>Empresa</h1>
                </div>

            </div>
            <ul className='mt-12 flex flex-col gap-2'>
                <SideLink
                    url={route('dashboard')}
                    icon={<IoHome size={24} />}
                    openSide={openSide}
                    active={route().current('dashboard')}
                    label="Dashboard"
                />
                {auth?.user?.company_id === null &&

                    <SideLink
                        url={route('companies.index')}
                        icon={<IoIosBusiness size={24} />}
                        openSide={openSide}
                        active={route().current('companies.*')}
                        label="Empresas"
                    />
                }

                {auth?.user?.company_id !== null &&
                    <SideLink
                        url={route('sales')}
                        icon={<GiReceiveMoney size={24} />}
                        openSide={openSide}
                        active={route().current('sales')}
                        label="Faturamento"
                    />
                }
                
                <SideLink
                    url={route('companies.index')}
                    icon={<IoColorPalette size={24} />}
                    openSide={openSide}
                    active={route().current('companies.index')}
                    label="Aparência"
                />

                <SideLink
                    url={route('users.index')}
                    icon={<IoPerson size={24} />}
                    openSide={openSide}
                    active={route().current('users.*')}
                    label="Usuários"
                />
            </ul>
        </aside>
    )
}

export default SideBar