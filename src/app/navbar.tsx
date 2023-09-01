import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleModalClose = () => {
            setOpen(false);
        }

        document.body.addEventListener("click" ,  handleModalClose)

        return (
            document.body.removeEventListener("click", handleModalClose)
        )
    }, [])

    return (
        <nav className="bg-black w-full border-b-2 px-5 py-2 flex flex-row justify-between items-center z-40 left-0 right-0 fixed">
            <Link href="/" scroll={true} onClick={() => setOpen(false)}>
              Baby Express
            </Link>
            <Hamburger
              toggle={setOpen}
              toggled = {open}
              size={15}
            />
            {open && (
                <ul className="fixed top-[10vh] right-0 border-2 border-t-0 px-2 h-full flex flex-col gap-2 py-2">
                    <li>
                        <Link href="/contact" scroll={true} onClick={() => setOpen(false)}>
                          Location
                        </Link>
                    </li>
                    <li>About</li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar;