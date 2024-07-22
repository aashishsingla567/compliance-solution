import Logo from "@components/Logo";
import MaxWidthContainer from "@components/MaxWidthContainer";
import { throttle } from "lodash";
import Link from "next/link";
import { useEffect, useRef } from "react";

const SCROLL_THRESHOLD = 10;

const Header = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = throttle(() => {
      if (!navRef.current) {
        return;
      }
      if (window.scrollY > SCROLL_THRESHOLD) {
        navRef.current.classList.add("shadow-xl");
      } else {
        navRef.current.classList.remove("shadow-xl");
      }
    }, 150);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <MaxWidthContainer className="fixed left-0 right-0 top-0 z-50">
      <nav className="navbar z-50 my-3 rounded-xl bg-base-100 p-2" ref={navRef}>
        <div className="flex-1">
          <Link className="link-hover link p-1 text-xl" href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="flex flex-row items-center justify-center">
              <span>Light</span>
              <input
                type="checkbox"
                value="dark"
                className="theme-controller toggle"
              />
              <span>Dark</span>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
    </MaxWidthContainer>
  );
};

export default Header;
