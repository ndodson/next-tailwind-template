import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-around">
      <div className="">
        <Header />
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}