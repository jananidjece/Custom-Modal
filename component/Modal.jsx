import React, { useState } from 'react';

export default function Modal({ open, onClose }) {
  const [tableLabel, setTableLabel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [section, setSection] = useState("");
  
  if (!open) return null;


  return (
    <div className="fixed inset-0 bg-gray-800/60 backdrop flex justify-center items-center">
      {/* Modal Container */}
      <div className="bg-white w-[450px] rounded-xl shadow-lg p-6 relative">
        
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Table</h2>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Table Label */}
          <div className="flex flex-col">
            <label className="text-sm font-medium">Table Label</label>
            <input
              type="text"
              placeholder="e.g., Patio 5"
              className="border p-2 rounded-md"
              onChange={(e) => setTableLabel(e.target.value)}
            />
          </div>

          {/* Capacity + Section */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Capacity</label>
              <input
                type="number"
                inputMode='numeric'
                pattern='[0-9]'
                placeholder="e.g., 4"
                onChange={(e) => setCapacity(e.target.value)}
                className="border p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Section</label>
              <select 
              onChange={(e) => setSection(e.target.value)}
              className="border p-2 rounded-md">
                <option value="">Select a section</option>
                <option>Patio</option>
                <option>Indoor</option>
                <option>VIP</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>

            <button 
             onClick={onClose}
            className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

