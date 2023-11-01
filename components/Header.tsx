"use client"
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope, faPhone, faUnlock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Header() {
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    const openModal1 = () => {
        setIsModal1Open(true);
    };

    const openModal2 = () => {
        setIsModal2Open(true);
    };
    const closeModal1 = () => {
        setIsModal1Open(false);
    };

    const closeModal2 = () => {
        setIsModal2Open(false);
    };
    const [isScrolled, setIsScrolled] = useState(false);
    // Menu Scroll Effect
    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY
            if (scrollTop >= 32) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="bg-gray-300 hidden md:block lg:block">
                <div className=" m-auto lg:max-w-pc-width">
                    <ul className="flex justify-start items-center">
                        <li className=" text-gray-600 leading-8 flex items-center text-xs px-3"><FontAwesomeIcon icon={faPhone} flip="horizontal" width={12} height={12} style={{ marginRight: "5px" }} /> CSKH SĐT/Zalo 0947838128</li>
                        <li className="block p-0 h-3" style={{ borderRight: '1px solid rgb(75, 85, 99)' }}></li>
                        <li className="text-gray-600 px-3"><span><FontAwesomeIcon icon={faEnvelope} width={12} height={12} /></span></li>
                    </ul>
                </div>
            </div>
            <div className={isScrolled ? 'bg-FE sticky w-full shadow-lg top-0 left-0 ' : 'w-full bg-FE'}>
                <div className="m-auto py-4 flex justify-between md:max-w-3xl lg:max-w-pc-width ">
                    <div className="block md:hidden lg:hidden">
                        <button onClick={openModal1}
                            className="block font-bold py-2 px-4 rounded md:hidden lg:hidden">
                            <FontAwesomeIcon className="text-2xl" icon={faBars} />
                        </button>
                    </div>
                    <div className="flex">
                        <Link href="" className=" md:translate-x-0 lg:translate-x-0">
                            <Image
                                className=""
                                src="/images/ZeJ8zsO.png"
                                alt=""
                                width={205}
                                height={41}
                                layout="fixed"
                            />
                        </Link>
                        <ul className=" justify-center items-center hidden md:flex lg:flex">
                            <li className="py-4 px-2">
                                <Link href="" className="-tracking-widest text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                    Rút tiền
                                </Link>
                            </li>
                            <li className="py-4 px-2">
                                <Link href="" className="-tracking-widest text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                    Nạp tiền
                                </Link>
                            </li>
                            <li className="py-4 px-2">
                                <Link href="" className="-tracking-widest text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                    Mua thẻ
                                </Link>
                            </li>
                            <li className="py-4 px-2">
                                <Link href="" className="-tracking-widest text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                    Nạp điện thoại
                                </Link>
                            </li>
                            <li className="py-4 px-2">
                                <Link href="" className="-tracking-widest text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                    Lịch sử đổi thẻ
                                </Link>
                            </li>
                            <li className="py-4 px-2">
                                <Link href="" className="-tracking-widest text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                    Kết nối API
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="hidden justify-center items-center lg:flex">
                            <Link
                                href=""
                                className=" mr-2 bg-orange-500 hover:bg-orange-400 rounded-lg text-sm text-white font-medium h-8 py-0 px-3 flex justify-center items-center"
                            >
                                <span className="mr-2">
                                    {" "}
                                    <FontAwesomeIcon icon={faUser} width={12} height={12} />
                                </span>{" "}
                                Đăng ký
                            </Link>
                            <Link
                                href=""
                                className="bg-sky-700 rounded-lg text-sm text-white font-medium h-8 py-0 px-3 flex justify-center items-center"
                            >
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={faUnlock} width={12} height={12} />
                                </span>{" "}
                                Đăng nhập
                            </Link>
                        </div>
                        <div className="mr-4 block md:block lg:hidden">
                            <button onClick={openModal2}
                                className="text-sky-900 text-sm border border-sky-900  py-1 px-3 rounded md:flex lg:hidden">
                                <FontAwesomeIcon icon={faUser} width={15} height={15} />  <span className="hidden md:block lg:block">Tài khoản</span>
                            </button>
                            <div className={`fixed top-0 left-0 w-full h-full ${isModal2Open ? 'flex' : 'hidden'}`}>
                                <div
                                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
                                    onClick={closeModal2}
                                ></div>
                                <div
                                    className={`bg-white pt-4 w-1/2 transform transition-all duration-300 ${isModal2Open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                                        }`}
                                >
                                    <div className="flex justify-center items-center mb-4">
                                        <Link href="" className="">
                                            <Image
                                                className=""
                                                src="/images/ZeJ8zsO.png"
                                                alt=""
                                                width={150}
                                                height={50}
                                                layout="fixed"
                                            />
                                        </Link></div>
                                    <div>
                                        <ul>
                                            <li className="border-t border-gray-200 p-2"><Link href='' className="text-sm" >Đăng nhập</Link></li>
                                            <li className="border-t border-gray-200 p-2"><Link href='' className="text-sm" >Đăng ký</Link></li>
                                            <li className="border-t border-gray-200 p-2"><Link href='' className="text-sm" >Quên mật khẩu?</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={`fixed top-0 left-0 w-full h-full ${isModal1Open ? 'flex' : 'hidden'}`}>
                                <div
                                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
                                    onClick={closeModal1}
                                ></div>
                                <div
                                    className={`bg-white  pt-4 w-1/2 transform transition-all duration-300 ${isModal1Open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                                        }`}
                                >
                                    <div className="flex justify-center items-center mb-4">
                                        <Link href="" className="">
                                            <Image
                                                className=""
                                                src="/images/ZeJ8zsO.png"
                                                alt=""
                                                width={150}
                                                height={50}
                                                layout="fixed"
                                            />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <ul className="">
                                            <li className="py-3 px-2 border-t border-gray-200">
                                                <Link href="" className="text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                                    Rút tiền
                                                </Link>
                                            </li>
                                            <li className="py-3 px-2 border-t border-gray-200">
                                                <Link href="" className="text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                                    Nạp tiền
                                                </Link>
                                            </li>
                                            <li className="py-3 px-2 border-t border-gray-200">
                                                <Link href="" className="text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                                    Mua thẻ
                                                </Link>
                                            </li>
                                            <li className="py-3 px-2 border-t border-gray-200">
                                                <Link href="" className="text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                                    Nạp điện thoại
                                                </Link>
                                            </li>
                                            <li className="py-3 px-2 border-t border-gray-200">
                                                <Link href="" className="text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                                    Lịch sử đổi thẻ
                                                </Link>
                                            </li>
                                            <li className="py-3 px-2 border-t border-gray-200">
                                                <Link href="" className="text-sm lg:text-gray-600 lg:uppercase lg:font-medium">
                                                    Kết nối API
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
