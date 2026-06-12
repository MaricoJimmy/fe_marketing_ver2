"use client";
import React from 'react';

export default function LightDashboardMockup({ className }) {
  return (
    <div className={`bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col ${className}`}>
      {/* Top Header */}
      <div className="h-10 border-b border-[#E2E8F0] bg-white flex items-center px-4 gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
        </div>
        <div className="flex-1 mx-4 h-5 bg-[#F1F5F9] rounded-md border border-[#E2E8F0]"></div>
        <div className="w-6 h-6 rounded-full bg-[#E2E8F0]"></div>
      </div>
      
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 max-w-[200px] border-r border-[#E2E8F0] bg-[#F1F5F9] p-4 flex flex-col gap-3">
          <div className="h-5 w-3/4 bg-[#E2E8F0] rounded mb-2"></div>
          <div className="h-4 w-full bg-white rounded border border-[#E2E8F0]"></div>
          <div className="h-4 w-5/6 bg-[#E2E8F0] rounded"></div>
          <div className="h-4 w-4/5 bg-[#E2E8F0] rounded"></div>
          <div className="h-4 w-full bg-[#E2E8F0] rounded"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-5 flex flex-col gap-5 bg-white">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <div className="h-4 w-20 bg-[#E2E8F0] rounded"></div>
              <div className="h-8 w-40 bg-[#0F172A] rounded"></div>
            </div>
            <div className="h-8 w-24 bg-[#3B82F6] rounded-md"></div>
          </div>
          
          {/* Chart area */}
          <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-4 flex flex-col gap-4">
            <div className="h-4 w-1/4 bg-[#E2E8F0] rounded"></div>
            <div className="flex-1 relative flex items-end gap-2 pb-2 border-b border-[#E2E8F0]">
              {[40, 70, 45, 90, 65, 85, 55, 100, 75, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-[#3B82F6] to-[#60A5FA] rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
          
          {/* Bottom Cards */}
          <div className="h-24 flex gap-4">
            <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 space-y-2">
              <div className="h-3 w-1/2 bg-[#E2E8F0] rounded"></div>
              <div className="h-6 w-3/4 bg-[#0F172A] rounded"></div>
            </div>
            <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 space-y-2">
              <div className="h-3 w-1/2 bg-[#E2E8F0] rounded"></div>
              <div className="h-6 w-3/4 bg-[#0F172A] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

