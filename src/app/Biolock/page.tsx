import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
     title: "BioLock | AI Keystroke Biometric Authentication System",
     description:
          "A behavioral biometric security system combining millisecond-precision keystroke dynamics with Isolation Forest anomaly detection to block stolen credentials in real time.",
};

export default function Page() {
     return <ClientPage />;
}
