import "../styles/index.css";
import { Fragment, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // تكوين Google Analytics
    ReactGA.initialize('UA-6119975531'); // استبدل برمز التتبع الخاص بك
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []); // يتم تنفيذ هذا المكون مرة واحدة بعد تحميل الصفحة

  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://www.youtubedownloads.com/"
        openGraph={{
          url: "https://www.youtubedownloads.com/",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
