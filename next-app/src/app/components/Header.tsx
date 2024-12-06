"use client"
import Image from "next/image"
import Link from "next/link";
import { useState, useRef } from "react"
    
const Header = () => {
    const [isFoodOpen, setIsFoodOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const timeoutFood = useRef<NodeJS.Timeout|null>(null);
    const timeoutMenu = useRef<NodeJS.Timeout|null>(null); 

    const handleMouseEnterFood = () => {
        if (timeoutFood.current){
            clearTimeout(timeoutFood.current);
            timeoutFood.current = null;
        }
        setIsMenuOpen(false);
        setIsFoodOpen(true);
    }

    const handleMouseLeaveFood = () => {
        timeoutFood.current = setTimeout(() =>{
            setIsFoodOpen(false);
        }, 200)
    }

    const handleMouseEnterMenu = () => {
        if (timeoutMenu.current){
            clearTimeout(timeoutMenu.current);
            timeoutMenu.current = null;
        }
        setIsFoodOpen(false);
        setIsMenuOpen(true);
    }

    const handleMouseLeaveMenu = () => {
        timeoutMenu.current = setTimeout(() =>{
            setIsMenuOpen(false);
        }, 200)
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-white">
            <div className="border-b-2 border-text">
                <nav className="flex items-center justify-between mx-8">
                    <Image 
                        src="/wakalogo.png"
                        alt="若鯱家のロゴ"
                        width={180}
                        height={180}
                    />
                    <div className="flex">
                        {/* Food Dropdown */}
                        <div
                            onMouseEnter={handleMouseEnterFood}
                            onMouseLeave={handleMouseLeaveFood}
                            className="relative"
                        >
                            <div className="flex items-center space-x-11 px-4 border-l border-text">
                                <Image
                                    src="/food-icon.svg"
                                    alt="食品のアイコン"
                                    width={30}
                                    height={30}
                                />
                                <p className="text-base text-text">食品の情報管理</p>
                                <div
                                    className={`transform transition-transform duration-300 ${
                                        isFoodOpen ? "-rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <Image
                                        src="/down-arrow-icon.svg"
                                        alt="ドロップダウンメニューのアイコン"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>
                            <div
                                className={`absolute right-0 top-full w-full mt-6 rounded bg-white border border-text px-4 py-2 transition-all duration-300 ease-in-out ${
                                    isFoodOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <ul>
                                    <li className="flex p-2 items-center space-x-3">
                                        <Image
                                            src="/food-icon.svg"
                                            alt="食品のアイコン"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-xs text-text">食品情報一覧</p>
                                    </li>
                                    <li className="flex p-2 items-center space-x-3">
                                        <Image
                                            src="/pulus-icon.svg"
                                            alt="メニュー情報新規登録のアイコン"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-xs text-text">食品情報新規登録</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Menu Dropdown */}
                        <div
                            onMouseEnter={handleMouseEnterMenu}
                            onMouseLeave={handleMouseLeaveMenu}
                            className="relative"
                        >
                            <div className="flex items-center space-x-11 px-4 border-r border-l border-text">
                                <Image
                                    src="/menu-svgrepo-com.svg"
                                    alt="メニューのアイコン"
                                    width={28}
                                    height={28}
                                />
                                <p className="text-base text-text">メニュー表情報管理</p>
                                <div
                                    className={`transform transition-transform duration-300 ${
                                        isMenuOpen ? "-rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <Image
                                        src="/down-arrow-icon.svg"
                                        alt="ドロップダウンメニューのアイコン"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </div>
                            <div
                                className={`absolute right-0 top-full w-full mt-6 rounded bg-white border border-text px-4 py-2 transition-all duration-300 ease-in-out ${
                                    isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <ul>
                                    <li className="flex p-2 items-center space-x-3">
                                        <Image
                                            src="/menu-svgrepo-com.svg"
                                            alt="メニューのアイコン"
                                            width={28}
                                            height={28}
                                        />
                                        <p className="text-xs text-text">メニュー表情報一覧</p>
                                    </li>
                                    <li className="flex p-2 items-center space-x-3">
                                        <Image
                                            src="/pulus-icon.svg"
                                            alt="メニュー情報新規作成のアイコン"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-xs text-text">メニュー表情報新規作成</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header;