import "nprogress/nprogress.css";

import { useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";

NProgress.configure({ showSpinner: false });

export default function RouteProgressBar() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  return (
    <style>
      {`
        #nprogress .bar {
            background: #a7f3d0;
            height: 3px;
            z-index: 200;
            top: 0;
            left: 0;    
            width: 100%;
        }
     `}
    </style>
  );
}
