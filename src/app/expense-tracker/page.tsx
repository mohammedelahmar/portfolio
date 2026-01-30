import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
     title: "ExpenseTracker | Financial Management System",
     description:
          "A full-stack MERN application for tracking expenses, managing subscriptions, and scanning receipts with OCR technology.",
};

export default function Page() {
     return <ClientPage />;
}
