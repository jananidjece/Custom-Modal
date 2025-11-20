"use client";
import { useState } from "react";
import Modal from "../component/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Add New Table
      </button>

      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}