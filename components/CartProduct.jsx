import React from 'react'
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
export default function CartProduct({cartItems}) {
  return (
    <div>
            <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm">
              <div className="flex items-center gap-3">
                <Image
                  src={cartItems.image}
                  width={249}
                  height={249}
                  alt="Alt text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>{cartItems.title}</h2>
                  
                </div>
              </div>
              <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4>${cartItems.price}</h4>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
    </div>
  )
}
