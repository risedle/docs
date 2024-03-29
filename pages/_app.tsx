import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RisedleDocs({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}
