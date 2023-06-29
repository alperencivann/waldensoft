import React from 'react';
import Menu from "./Menu";
const Navbar = () => {
    return (
        <>
            <header className="w-full bg-stone-900 text-slate-200 h-14">
                <div className="justify-between flex container mx-auto py-3">
                    <div className="ml-2">alperen</div>
                    <div className="mr-2">sağ</div>
                </div>
            </header>
            <Menu/>
        </ >
    );
}

export default Navbar;