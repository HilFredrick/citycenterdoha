import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlideshow from "./components/HeroSlideshow";

const EXPLORE_ZONES = [
  {
    title: "SOHO SQUARE",
    href: "https://citycenterdoha.com/soho-square/",
    image: "/images/explore/soho-square.webp",
  },
  {
    title: "GOLDEN SOUQ",
    href: "https://citycenterdoha.com/golden-souq/",
    image: "/images/explore/golden-souq.webp",
  },
  {
    title: "FOOD COURT",
    href: "https://citycenterdoha.com/food-court/",
    image: "/images/explore/food-court.webp",
  },
  {
    title: "ARABIAN COURT",
    href: "https://citycenterdoha.com/arabian-court/",
    image: "/images/explore/arabian-court.webp",
  },
  {
    title: "NEW MALL",
    href: "https://citycenterdoha.com/new-mall-2/",
    image: "/images/explore/new-mall.webp",
  },
  {
    title: "METRO BRIDGE",
    href: "https://citycenterdoha.com/metro-bridge/",
    image: "/images/explore/metro-bridge.webp",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero Background Slideshow */}
        <HeroSlideshow />

        {/* Mall Hours & Mall Map Quick Info Bar */}
        <section
          aria-label="Mall Opening Hours and Map"
          className="mx-auto mt-5 mb-3 max-w-[872px] px-4"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Opening Hours Box */}
            <div className="flex items-center gap-5 rounded-tl-[40px] rounded-br-[40px] bg-surface px-7 py-4 sm:gap-[24px] sm:px-[45px]">
              <span className="shrink-0 text-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                >
                  <path
                    d="M24 45C19.8466 45 15.7865 43.7684 12.333 41.4609C8.8796 39.1534 6.18798 35.8736 4.59854 32.0364C3.0091 28.1991 2.59323 23.9767 3.40352 19.9031C4.21381 15.8295 6.21386 12.0877 9.15077 9.15077C12.0877 6.21386 15.8295 4.21381 19.9031 3.40352C23.9767 2.59323 28.1991 3.0091 32.0364 4.59854C35.8736 6.18798 39.1534 8.8796 41.4609 12.333C43.7684 15.7865 45 19.8466 45 24C45 29.5696 42.7875 34.911 38.8493 38.8493C34.911 42.7875 29.5696 45 24 45ZM24 6.00001C20.4399 6.00001 16.9598 7.05569 13.9997 9.03356C11.0397 11.0114 8.73256 13.8226 7.37018 17.1117C6.0078 20.4008 5.65134 24.02 6.34587 27.5116C7.04041 31.0033 8.75474 34.2106 11.2721 36.7279C13.7894 39.2453 16.9967 40.9596 20.4884 41.6541C23.98 42.3487 27.5992 41.9922 30.8883 40.6298C34.1774 39.2675 36.9886 36.9604 38.9665 34.0003C40.9443 31.0402 42 27.5601 42 24C42 19.2261 40.1036 14.6477 36.7279 11.2721C33.3523 7.89643 28.7739 6.00001 24 6.00001Z"
                    fill="currentColor"
                  />
                  <path
                    d="M30.885 33L22.5 24.615V10.5H25.5V23.37L33 30.885L30.885 33Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <h2 className="text-[20px] leading-tight font-normal text-brand sm:text-[24px]">
                  Saturday - Friday: 10 am
                </h2>
                <p className="mt-0.5 text-[20px] leading-tight font-semibold text-success sm:text-[24px]">
                  Now Open
                </p>
              </div>
            </div>

            {/* Plan Your Mall Visit Box */}
            <a
              href="#new-map"
              className="flex min-h-[44px] items-center gap-5 rounded-tr-[40px] rounded-bl-[40px] bg-surface px-7 py-4 transition-opacity hover:opacity-90 sm:gap-[24px] sm:px-[45px]"
            >
              <span className="shrink-0 text-brand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                >
                  <path
                    d="M25.12 41.64C24.7936 41.8744 24.4018 42.0005 24 42.0005C23.5981 42.0005 23.2064 41.8744 22.88 41.64C13.222 34.756 2.97199 20.596 13.334 10.364C16.1787 7.5657 20.0097 5.99825 24 6C28 6 31.838 7.57 34.666 10.362C45.028 20.594 34.778 34.752 25.12 41.64Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 24C25.0609 24 26.0783 23.5786 26.8284 22.8284C27.5786 22.0783 28 21.0609 28 20C28 18.9391 27.5786 17.9217 26.8284 17.1716C26.0783 16.4214 25.0609 16 24 16C22.9391 16 21.9217 16.4214 21.1716 17.1716C20.4214 17.9217 20 18.9391 20 20C20 21.0609 20.4214 22.0783 21.1716 22.8284C21.9217 23.5786 22.9391 24 24 24Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2 className="text-[20px] leading-tight font-normal text-brand sm:text-[24px]">
                  Plan Your Mall Visit
                </h2>
                <p className="mt-0.5 text-[20px] leading-tight font-normal text-brand underline sm:text-[24px]">
                  Mall Map
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Intro & Video Section */}
        <section className="mx-auto max-w-[1140px] px-5 py-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-5 text-[32px] leading-[1.15] font-semibold text-brand sm:text-[40px]">
                City Center Doha is more than a shopping center
              </h1>
              <div className="space-y-4 text-[16px] leading-[1.65] font-normal text-foreground">
                <p>
                  Welcome to City Center Mall in Doha, Qatar—located in the
                  heart of Doha’s premium business district DECC and West Bay,
                  we are one of the biggest malls in Doha. Our extensive range
                  of shopping, dining and entertainment options make us an ideal
                  destination for those looking to experience luxury, style and
                  pleasure at their convenience.
                </p>
                <p>
                  We are also a great place to come and have fun with your
                  family and loved ones. Our kid-friendly play areas, 14-screen
                  cinema complex and 38 different dining options to choose from
                  offer you plenty to do while you relax and enjoy your time at
                  the City Center Mall.
                </p>
              </div>
            </div>

            <div className="w-full">
              <video
                className="aspect-video w-full bg-surface object-cover"
                src="https://citycenterdoha.com/wp-content/uploads/2024/11/Main_Homepage_Video_V2.mp4"
                poster="/images/video-poster.webp"
                controls
                preload="metadata"
                controlsList="nodownload"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mx-auto max-w-[1140px] px-5 pt-6 pb-4">
          <h2 className="mb-7 text-center text-[32px] font-semibold text-brand sm:text-[37px]">
            Categories
          </h2>

          {/* Top Row: Shops (2/3) + Dining (1/3) */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <a
              href="https://citycenterdoha.com/shops/"
              className="group block min-h-[44px] md:col-span-2"
            >
              <figure className="flex flex-col items-center">
                <Image
                  src="/images/categories/shops.webp"
                  alt="Shops at City Center Doha"
                  width={690}
                  height={390}
                  className="h-auto w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                />
                <figcaption className="mt-2.5 text-center text-[22px] font-normal text-foreground transition-colors group-hover:text-brand sm:text-[24px]">
                  Shops
                </figcaption>
              </figure>
            </a>

            <a
              href="https://citycenterdoha.com/dining/"
              className="group block min-h-[44px] md:col-span-1"
            >
              <figure className="flex flex-col items-center">
                <Image
                  src="/images/categories/dining.webp"
                  alt="Dining at City Center Doha"
                  width={345}
                  height={390}
                  className="h-auto w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                />
                <figcaption className="mt-2.5 text-center text-[22px] font-normal text-foreground transition-colors group-hover:text-brand sm:text-[24px]">
                  Dining
                </figcaption>
              </figure>
            </a>
          </div>

          {/* Bottom Row: [Services + Stay] (1/2) + Entertainment (1/2) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <a
                href="https://citycenterdoha.com/services/"
                className="group block min-h-[44px]"
              >
                <figure className="flex flex-col items-center">
                  <Image
                    src="/images/categories/services.webp"
                    alt="Mall Services & Facilities | City Center Doha"
                    width={345}
                    height={390}
                    className="h-auto w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <figcaption className="mt-2.5 text-center text-[22px] font-normal text-foreground transition-colors group-hover:text-brand sm:text-[24px]">
                    Services
                  </figcaption>
                </figure>
              </a>

              <a
                href="https://citycenterdoha.com/stay-with-us/"
                className="group block min-h-[44px]"
              >
                <figure className="flex flex-col items-center">
                  <Image
                    src="/images/categories/stay.webp"
                    alt="Stay at City Center Doha"
                    width={345}
                    height={390}
                    className="h-auto w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <figcaption className="mt-2.5 text-center text-[22px] font-normal text-foreground transition-colors group-hover:text-brand sm:text-[24px]">
                    Stay
                  </figcaption>
                </figure>
              </a>
            </div>

            <a
              href="https://citycenterdoha.com/entertainment/"
              className="group block min-h-[44px]"
            >
              <figure className="flex flex-col items-center">
                <Image
                  src="/images/categories/entertainment.webp"
                  alt="Entertainment at City Center Doha"
                  width={690}
                  height={390}
                  className="h-auto w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                />
                <figcaption className="mt-2.5 text-center text-[22px] font-normal text-foreground transition-colors group-hover:text-brand sm:text-[24px]">
                  Entertainment
                </figcaption>
              </figure>
            </a>
          </div>
        </section>

        {/* Explore City Center Doha Section */}
        <section className="mx-auto max-w-[1140px] px-5 pt-10 pb-4">
          <h2 className="mb-8 text-center text-[32px] font-semibold text-brand sm:text-[37px]">
            Explore City Center Doha
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-2">
            {EXPLORE_ZONES.map((zone) => (
              <a
                key={zone.title}
                href={zone.href}
                className="group block min-h-[44px]"
              >
                <figure className="flex flex-col items-center">
                  <Image
                    src={zone.image}
                    alt={zone.title}
                    width={700}
                    height={305}
                    className="h-auto w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                  />
                  <figcaption className="mt-2.5 text-center text-[22px] font-normal text-foreground transition-colors group-hover:text-brand sm:text-[24px]">
                    {zone.title}
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>
        </section>

        {/* Our Location / Interactive Map Section */}
        <section className="mx-auto max-w-[1140px] px-5 pt-10 pb-14">
          <h2
            id="new-map"
            className="mb-4 scroll-mt-24 text-center text-[32px] font-semibold text-brand sm:text-[37px]"
          >
            Our Location
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-[16px] font-normal text-foreground">
            Navigate through City Center Mall with ease using our interactive
            map to find your favourite luxury brands, restaurants, experiences,
            and more.
          </p>
          <div className="w-full overflow-hidden rounded-lg border border-border-subtle bg-surface">
            <iframe
              id="map-viewer-iframe"
              title="City Center Doha Interactive Mall Map"
              src="https://maps.situm.com?apikey=082a70944e7f9b35c5bb2fed2258eaa3e0726739f9538bf2886d2cd659bf3644"
              className="h-[480px] w-full border-0 sm:h-[600px]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
