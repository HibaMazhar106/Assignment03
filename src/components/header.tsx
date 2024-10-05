import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
                <li><Link href="/">About</Link></li>
                <li><Link href="/contact-us/">Contact Us</Link></li>
                <li><Link href="/portfolio/">Portfolio</Link></li>
            </ul>
        </div>
    )
}