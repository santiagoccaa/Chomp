import { Step } from "@/components";

import { Montserrat } from "next/font/google";
const font = Montserrat({ subsets: ["latin"] });

export default function PagoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${font.className} container mx-auto h-[100vh] py-8`}>
            <div className="relative w-full h-full bg-light rounded-xl overflow-hidden shadow-2xl">
                <Step />
                {children}
            </div>
        </div>
    );
}
