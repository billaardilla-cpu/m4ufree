"use client";

import { useEffect } from 'react';

export default function AdsterraLayoutWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let scriptsLoaded = false;
      
      const loadAdScripts = () => {
        if (scriptsLoaded) return;
        
        // Memuat skrip iklan Native Banner
        const nativeBannerScript = document.createElement('script');
        nativeBannerScript.src = "//eminencehillsidenutrition.com/5828cc06e116d6dcd698a74d88abcdc6/invoke.js";
        nativeBannerScript.async = true;
        nativeBannerScript.setAttribute('data-cfasync', 'false');
        nativeBannerScript.id = 'adsterra-native-banner';
        document.body.appendChild(nativeBannerScript);

        // Memuat skrip iklan Popunder
        const popunderScript = document.createElement('script');
        popunderScript.type = 'text/javascript';
        popunderScript.src = "//eminencehillsidenutrition.com/2d/63/fd/2d63fd28b934e2822e847a47b3c8d3cc.js";
        popunderScript.async = true;
        popunderScript.id = 'adsterra-popunder';
        document.body.appendChild(popunderScript);

        // Memuat skrip iklan Social Bar
        const socialBarScript = document.createElement('script');
        socialBarScript.type = 'text/javascript';
        socialBarScript.src = "//eminencehillsidenutrition.com/ba/78/9b/ba789ba25400bcc7ada13e5d608764ed.js";
        socialBarScript.async = true;
        socialBarScript.id = 'adsterra-social-bar';
        document.body.appendChild(socialBarScript);

        scriptsLoaded = true;
      };

      // Delay loading untuk memastikan DOM siap
      const timer = setTimeout(loadAdScripts, 1000);

      return () => {
        clearTimeout(timer);
        
        // Hapus scripts jika ada
        const scriptsToRemove = [
          'adsterra-native-banner',
          'adsterra-popunder', 
          'adsterra-social-bar'
        ];
        
        scriptsToRemove.forEach(id => {
          const script = document.getElementById(id);
          if (script && script.parentNode) {
            script.parentNode.removeChild(script);
          }
        });
      };
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
}