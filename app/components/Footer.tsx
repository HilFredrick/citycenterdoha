import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SHOPS", href: "https://citycenterdoha.com/shops/" },
  { label: "DINING", href: "https://citycenterdoha.com/dining/" },
  { label: "ENTERTAINMENT", href: "https://citycenterdoha.com/entertainment/" },
  { label: "SERVICES", href: "https://citycenterdoha.com/services/" },
  { label: "STAY WITH US", href: "https://citycenterdoha.com/stay-with-us/" },
  { label: "ABOUT US", href: "https://citycenterdoha.com/about-us/" },
  { label: "CONTACT US", href: "https://citycenterdoha.com/contact-us/" },
];

const DIRECTIONS_LINKS = [
  {
    label: "By Bus",
    href: "https://www.google.com/maps/dir//City+Center+Doha+mall,+Conference+Centre,+Doha/@25.3257487,51.4482117,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3e45c4bf34462ff3:0x6897a007cc428d7c!2m2!1d51.5306132!2d25.3257716!3e3?entry=ttu",
  },
  {
    label: "By Metro",
    href: "https://www.google.com/maps/dir//City+Center+Doha+mall,+Conference+Centre,+Doha/@25.3257487,51.4482117,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x3e45c4bf34462ff3:0x6897a007cc428d7c!2m2!1d51.5306132!2d25.3257716!3e3?entry=ttu",
  },
  {
    label: "By Car",
    href: "https://www.google.com/maps/dir//City+Center+Doha+mall,+Conference+Centre,+Doha/@25.3251909,51.4956472,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3e45c4bf34462ff3:0x6897a007cc428d7c!2m2!1d51.5306132!2d25.3257716!3e0?entry=ttu",
  },
];

export default function Footer() {
  return (
    <footer id="colophon" role="contentinfo" className="footer-surface w-full">
      <div className="mx-auto max-w-[1140px] px-5 pt-10 pb-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.05fr_0.85fr_1.35fr_0.75fr] lg:gap-6">
          {/* Column 1: Logo, Bio, Socials */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] min-w-[44px] items-center self-start"
            >
              <Image
                src="/images/logo-white.webp"
                alt="City Center Doha"
                width={230}
                height={75}
                className="h-auto w-[210px]"
              />
            </Link>
            <p className="text-[16px] leading-relaxed font-normal text-inverse">
              City Center Doha offers diverse brands, entertainment, and dining,
              making it a premier shopping destination in Qatar’s capital.
            </p>
            <div className="mt-1">
              <h3 className="mb-2.5 text-[16px] font-semibold text-inverse">
                Follow us
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/citycenterdoha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-inverse/30 bg-footer text-inverse transition-transform hover:scale-105"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/citycenterdoha/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-inverse/30 bg-footer text-inverse transition-transform hover:scale-105"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 448 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/city-center-doha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-inverse/30 bg-footer text-inverse transition-transform hover:scale-105"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 448 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (44x44px min targets) */}
          <nav aria-label="Footer Navigation" className="lg:pl-8">
            <ul className="flex flex-col">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center text-[15px] font-normal tracking-wide text-inverse transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-3 text-[16px] font-semibold text-inverse">
              Contact Info
            </h3>
            <ul className="space-y-2 text-[16px] font-normal text-inverse">
              <li className="flex items-start gap-2.5 py-1.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="mt-1 h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z"
                  />
                  <circle cx="12" cy="11" r="2.2" />
                </svg>
                <span>
                  City Center Doha Shopping Mall, Conference Centre 22744, Doha,
                  Qatar
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                  />
                </svg>
                <a
                  href="tel:+97444839990"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center transition-opacity hover:opacity-80"
                >
                  +9744483 9990 / 44977444
                </a>
              </li>
              <li className="flex items-center gap-2.5 py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16v-4M12 8h.01"
                  />
                </svg>
                <span>Information Desk - +9744493 3355</span>
              </li>
              <li className="flex items-center gap-2.5 py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 192 512"
                  className="h-4 w-4 shrink-0 fill-current"
                >
                  <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" />
                </svg>
                <span>Leasing - +97444977444</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                  />
                </svg>
                <a
                  href="mailto:info@citycenterdoha.com"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center transition-opacity hover:opacity-80"
                >
                  info@citycenterdoha.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Here & Press Releases (44x44px min targets) */}
          <div className="lg:pl-4">
            <h3 className="mb-2 text-[16px] font-semibold text-inverse">
              Get Here
            </h3>
            <ul className="flex flex-col text-[16px] text-inverse">
              {DIRECTIONS_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center font-normal transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-3 text-[16px] font-semibold text-inverse">
              <a
                href="https://citycenterdoha.com/press-release/"
                className="inline-flex min-h-[44px] min-w-[44px] items-center transition-opacity hover:opacity-80"
              >
                Press Releases
              </a>
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-inverse/15 py-4 text-center text-[14px] font-normal text-inverse">
        A subsidiary of Aamal Company Q.P.S.C. © 2026 City Center Doha - All
        rights reserved
      </div>
    </footer>
  );
}
