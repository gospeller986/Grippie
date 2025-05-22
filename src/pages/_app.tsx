import { fontPrometoTrial, fontProximaNovaAlt } from "@/assets/fonts";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/sonner"

export default function App({ Component, pageProps, router }: AppProps) {
     return (
          <div>
               <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
               <AnimatePresence mode="wait" >
                    <main className={`${fontPrometoTrial.variable} ${fontProximaNovaAlt.variable}`}>
                         <Component key={router.route} {...pageProps} />
                         <Toaster />
                    </main>
               </AnimatePresence>
          </div>

     )
}
