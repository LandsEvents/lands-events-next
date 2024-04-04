'use client'

import {Fragment} from "react";
import Head from "next/head";

export default function Header(){

    return(
            <div className="w-screen h-[100px] bg-lands-accent flex flex-row justify-center">
                <div className="ml-[200px] w-1/3 flex flex-row justify-start">
                    <div className="mr-[50px] h-[125px] w-[250px] bg-white">
                        <a><img src='/landslogo.png'></img></a>
                    </div>
                </div>
                <div className="w-1/3 flex flex-row justify-start">
                    <ul className="mt-[35px] text-lg text-white flex flex-row space-x-10">
                        <li className="hover:italic hover:font-bold"><a href="/">Home</a></li>
                        <li className="hover:italic hover:font-bold"><a href="/calender">Events</a></li>
                        <li className="hover:italic hover:font-bold"><a href="/fotoalbums">Fotoalbums</a></li>
                        <li className="hover:italic hover:font-bold"><a href="/nieuws">Nieuws</a></li>
                    </ul>
                </div>
                <div className="w-1/3">
                </div>
            </div>
    )
}