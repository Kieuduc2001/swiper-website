import { useEffect, useState } from 'react';

export default function Footer() {
  const [banner, setBanner] = useState(false);
  const [removeBanner, setRemoveBanner] = useState(false);
  const onBannerCloseClick = (e) => {
    e.preventDefault();
    localStorage.closeUIBanner = true;
    setBanner(false);
    setRemoveBanner(true);
  };
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof localStorage !== 'undefined' &&
      localStorage.closeUIBanner
    ) {
      setRemoveBanner(true);
    } else {
      setBanner(true);
    }
  }, []);
  return (
    <>
      <footer className="border-t border-outline-variant px-4 py-8 text-center sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-on-surface-variant">
            {new Date().getFullYear()} © Swiper by{' '}
            <a href="https://nolimits4web.com" target="_blank">
              <img
                src="/images/n4w-logo.svg"
                alt="nolimits4web"
                className="inline-block h-12 w-12"
              />
            </a>
          </div>
        </div>
      </footer>
      {!removeBanner && (
        <a
          href="https://devhunt.org/tool/ui-initiative"
          target="_blank"
          className={`sticky bottom-0 z-[1000] flex  flex-wrap items-center justify-center gap-4 border-t border-[#f97316] bg-black px-4 py-4 duration-700 hover:no-underline ${
            banner
              ? 'translate-y-0'
              : 'pointer-events-none translate-y-full opacity-0'
          }`}
        >
          <span
            onClick={onBannerCloseClick}
            className="absolute right-1 top-1 cursor-pointer rounded-lg p-1 opacity-50 hover:bg-white/10 hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </span>
          <span className="font-bold text-[#f97316]">
            Support UI Initiative on
          </span>
          <span className="rounded-full border-2 border-[#f97316] px-4 py-1">
            <svg
              width="124"
              height="35"
              className="h-6"
              viewBox="0 0 851 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.542 30.5714C52.191 15.1556 75.5192 0.0305717 102.985 0L106.809 3.82143C106.84 31.4352 91.7479 54.784 76.3359 71.4299V103.179L72.5191 107H49.6183L46.9235 105.884L39.2977 98.2488L39.2289 98.241L8.69452 67.6696L8.68674 67.6012L1.12211 60.0267L0 57.3214V34.3929L3.81679 30.5714H35.542ZM27.809 38.2143H7.63359V55.7467L10.8241 58.9261C15.97 51.614 21.6472 44.6915 27.809 38.2143ZM47.9389 96.1244L51.145 99.3571H68.664V79.1878C62.1846 85.3399 55.2572 91.0011 47.9389 96.1244ZM76.1182 39.7929C76.7122 42.7755 76.0988 45.8727 74.4121 48.4023H74.4044C72.7183 50.9309 70.0974 52.6851 67.1189 53.2793C64.1404 53.8735 61.0487 53.2587 58.5226 51.5701C55.9972 49.8814 54.245 47.2578 53.6516 44.2757C53.0581 41.2936 53.6721 38.1981 55.3587 35.6691C57.0453 33.1394 59.6663 31.384 62.6453 30.7893C65.6244 30.1945 68.7178 30.8088 71.2443 32.4974C73.7709 34.1861 75.5242 36.8102 76.1182 39.7929Z"
                fill="white"
              />
              <path
                d="M22.9008 99.3571V107H0V84.0714H7.63359V99.3571H22.9008Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M207.693 5.3349C200.743 2.62384 192.618 1.26831 183.32 1.26831H146.126V104.896H183.32C192.618 104.896 200.743 103.447 207.693 100.549C214.643 97.6512 220.42 93.7715 225.022 88.9103C229.624 84.0491 233.052 78.627 235.307 72.644C237.655 66.6609 238.829 60.5844 238.829 54.4144V51.3294C238.829 44.879 237.655 38.6622 235.307 32.6792C233.052 26.6027 229.624 21.2273 225.022 16.5531C220.42 11.7853 214.643 8.04596 207.693 5.3349ZM198.817 22.0219C194.685 20.5262 189.941 19.7783 184.588 19.7783H166.132V86.3862H184.588C189.941 86.3862 194.685 85.5916 198.817 84.0024C203.044 82.3196 206.613 79.9825 209.525 76.991C212.436 73.9995 214.643 70.4938 216.146 66.474C217.743 62.3606 218.541 57.8266 218.541 52.8719C218.541 47.7303 217.743 43.1495 216.146 39.1297C214.643 35.0163 212.436 31.5106 209.525 28.6126C206.613 25.7146 203.044 23.5177 198.817 22.0219Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M289.429 107C282.854 107 277.078 105.878 272.1 103.634C267.216 101.391 263.13 98.399 259.843 94.6596C256.649 90.8268 254.207 86.5732 252.517 81.899C250.92 77.2247 250.122 72.457 250.122 67.5958V64.9315C250.122 59.8833 250.92 55.0221 252.517 50.3478C254.207 45.5801 256.649 41.3733 259.843 37.7274C263.13 33.988 267.169 31.0432 271.959 28.8931C276.749 26.6494 282.29 25.5276 288.583 25.5276C296.849 25.5276 303.752 27.3506 309.293 30.9965C314.929 34.5489 319.155 39.2699 321.973 45.1594C324.791 50.9555 326.2 57.219 326.2 63.9499V70.9612H268.691C269.026 73.8992 269.692 76.6103 270.691 79.0944C272.194 82.7403 274.495 85.6384 277.594 87.7885C280.694 89.8452 284.638 90.8735 289.429 90.8735C294.219 90.8735 298.116 89.9387 301.122 88.069C304.128 86.1058 306.053 83.7219 306.898 80.9174H324.932C323.805 86.1525 321.644 90.7333 318.451 94.6596C315.258 98.586 311.172 101.624 306.194 103.774C301.31 105.925 295.721 107 289.429 107ZM270.691 53.1524C269.955 54.9365 269.4 56.8997 269.024 59.0419H307.493C307.147 56.6177 306.573 54.4208 305.771 52.4512C304.362 48.9923 302.202 46.328 299.291 44.4583C296.473 42.5886 292.904 41.6537 288.583 41.6537C284.263 41.6537 280.6 42.6353 277.594 44.5985C274.589 46.5617 272.287 49.413 270.691 53.1524Z"
                fill="#fff"
              />
              <path
                d="M333.277 28.1919L357.227 104.335H388.645L409.355 28.1919H390.476L374.893 88.3494H371.567L353.424 28.1919H333.277Z"
                fill="#fff"
              />
              <path
                d="M542.459 98.0251C547.343 103.821 554.199 106.719 563.028 106.719H563.873C569.79 106.719 574.721 105.41 578.666 102.793C582.611 100.175 585.57 96.2956 587.542 91.154C588.087 89.7336 588.557 88.2169 588.951 86.604V104.335H604.448V28.0517H584.865V73.0647C584.865 78.0193 583.409 81.9457 580.498 84.8437C577.68 87.7418 574.017 89.1908 569.509 89.1908C565 89.1908 561.431 87.8353 558.801 85.1242C556.172 82.3196 554.857 78.5803 554.857 73.906V28.0517H535.274V72.2233C535.274 83.6284 537.669 92.229 542.459 98.0251Z"
                fill="#fff"
              />
              <path
                d="M650.894 47.8237C647.983 50.7218 646.527 54.6481 646.527 59.6028V104.335H626.944V28.1919H642.441V46.9556C642.895 45.0026 643.459 43.1886 644.132 41.5135C646.198 36.2784 649.251 32.352 653.289 29.7344C657.422 27.1169 662.541 25.8081 668.646 25.8081H669.491C678.602 25.8081 685.505 28.7528 690.201 34.6424C694.897 40.4384 697.245 49.1325 697.245 60.7247V104.335H677.662V59.0419C677.662 54.3677 676.301 50.5815 673.577 47.6835C670.947 44.7855 667.284 43.3365 662.588 43.3365C657.798 43.3365 653.9 44.8322 650.894 47.8237Z"
                fill="#fff"
              />
              <path
                d="M734.078 102.653C738.68 104.429 744.504 105.317 751.548 105.317H762.537V88.6299H750.562C746.805 88.6299 743.893 87.6483 741.827 85.6851C739.855 83.6284 738.868 80.7304 738.868 76.991L738.938 42.4951H762.537V28.1919H738.966L739.009 6.73717H720.694L720.65 28.1919H708.437V42.4951H720.621L720.553 75.729C720.553 83.1143 721.68 89.0038 723.935 93.3976C726.189 97.6979 729.57 100.783 734.078 102.653Z"
                fill="#fff"
              />
              <path
                d="M493.18 104.335V61.8465H445.701V104.335H425.696V1.96945H445.701V44.3181H493.18V1.96945H513.185V104.335H493.18Z"
                fill="#fff"
              />
            </svg>
          </span>
          <span className="text-[#f97316] opacity-50">
            Voting ends on Oct 10th
          </span>
        </a>
      )}
    </>
  );
}
