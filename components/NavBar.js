import Link from "next/link";
import { useRouter} from "next/router";
import React from "react";

export default function Navbar() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/"); 
        window.scrollTo(0, 0);
      };

    return (
        <nav style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '999' }}>
            <img src="images/rolling.png" onClick={handleClick} />
            <div>
                <Link legacyBehavior href="/">
                  <a className={router.pathname === "/" ? "active" : ""}></a>
                </Link>
            </div>

        <style jsx>{`
            nav {
                display: flex;
                gap: 10px;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 10px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            }
            img {
                max-width: 100px;
                margin-bottom: 5px;
            }
            nav a {
                font-weight: 600;
                font-size: 18px;
            }
            .active {
                color: tomato;
            }
            nav div {
                display: flex;
                gap: 10px;
            }
            img:hover {
                cursor: pointer;
              }
            
            
            
            
        `}</style>
    </nav>

    )
}