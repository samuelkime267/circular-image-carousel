import React, { useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap/dist/gsap";
import TextPlugin from "gsap/dist/TextPlugin";

export default function Loader() {
  const { progress } = useProgress();
  const loaderProgress = useRef();
  const loaderWrapper = useRef();

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(loaderProgress.current, {
        text: progress,
        onComplete: () => {
          if (progress === 100) {
            gsap.to(loaderWrapper.current, {
              autoAlpha: 0,
              duration: 0.5,
            });
          }
        },
      });
    });

    return () => ctx.revert();
  }, [progress]);

  return (
    <div ref={loaderWrapper} className="loader">
      <h1 className="loader-text">
        Loading <span ref={loaderProgress}>0</span>%
      </h1>
    </div>
  );
}
