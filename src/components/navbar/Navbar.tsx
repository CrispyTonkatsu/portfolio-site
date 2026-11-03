import ThemeSwapper from "./ThemeSwapper";
import PageButton, { type PageButtonProps } from "./Pagebuttons";
import MainButton from "./MainButton";
import { useRef } from "react";

export default function Navbar() {
  const pages: PageButtonProps[] = [
    {
      text: "Projects",
      link: "/projects",
      svgPath: "M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2",
    },
    {
      text: "Blog",
      link: "/blog",
      svgPath: "m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z",
    },
    {
      text: "Contact",
      link: "/contact",
      svgPath: "M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1",
    }
  ];

  const detailsRef = useRef<HTMLDetailsElement>(null)

  function handleClose() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <div
      className="navbar bg-base-100 shadow-sm sticky top-0 z-50"
    >
      <div className="navbar-start">
        <MainButton />
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal rounded-box">
          <li className="md:hidden">
            <details
              ref={detailsRef}
              onBlur={handleClose}
            >
              <summary>Pages</summary>
              <ul>
                {
                  pages.map(page => {
                    return (
                      <li key={page.link}>
                        <PageButton
                          {...page}
                        />
                      </li>
                    );
                  })
                }
              </ul>
            </details>
          </li>

          {
            pages.map(page => {
              return (
                <li
                  key={page.link}
                  className="hidden md:inline-flex">
                  <PageButton
                    {...page}
                  />
                </li>
              );
            })
          }

        </ul>
      </div>

      <div className="navbar-end">
        <ThemeSwapper lightTheme="light" darkTheme="sunset" />
      </div>
    </div >
  );
}
