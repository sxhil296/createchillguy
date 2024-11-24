import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsDownload } from "react-icons/bs";
import { PiCopySimpleLight } from "react-icons/pi";

type CustomsProps = {
  solidBg: string;
  handleSolidBg: (e: React.ChangeEvent<HTMLInputElement>) => void;
};




const Customs = ({ solidBg, handleSolidBg }: CustomsProps) => {


  return (
    <div className="flex flex-col rounded-md border shadow-lg cursor-pointer w-[320px] h-[60%] p-4">
      {/*for  background color */}
      <div className="mb-4 border-b py-4">
        <p>Background</p>
        <Tabs defaultValue="meme" className="w-full mt-2">
          <TabsList className="w-full flex justify-between">
            <TabsTrigger value="solid">Solid</TabsTrigger>
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
          </TabsList>
          <TabsContent value="solid">
            <div className="w-8 h-8 border rounded-md">
              <input
                type="color"
                className="w-10 h-10 border rounded-md"
                aria-label="Solid color picker"
                value={solidBg}
                onChange={handleSolidBg}
              />
            </div>
          </TabsContent>
          <TabsContent value="gradient">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Color 1:</label>
                <input
                  type="color"
                  className="w-10 h-10 border rounded-md"
                  aria-label="Gradient color 1 picker"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-700">Color 2:</label>
                <input
                  type="color"
                  className="w-10 h-10 border rounded-md"
                  aria-label="Gradient color 2 picker"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="image">
            <div className="w-[160px] h-[60px] rounded-md border ">
              <input
                type="file"
                accept="image/*"
                className="hidden w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                aria-label="Upload background image"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* for text */}
      <div className="flex flex-col gap-2 border-b py-4 mb-4">
        <p>Text</p>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-[12px] text-gray-400">
            Message
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md outline-none"
            placeholder="Message"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="color" className="text-[12px] text-gray-400">
            Text Color
          </label>
          <input
            type="color"
            className="w-10 h-10 border rounded-md"
            aria-label="Text color picker"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fontSize" className="text-[12px] text-gray-400">
            Font Size
          </label>
          <input type="range" />
        </div>
      </div>

      {/* character varient */}
      <div></div>
      {/* buttons */}
      <div className="flex justify-between items-center gap-2">
        <button className="px-4 border rounded-md py-1 w-full flex items-center">
          <span>
            <BsDownload />
          </span>
          Download
        </button>
        <button className="px-4 border rounded-md py-1 w-full flex items-center">
          <span>
            <PiCopySimpleLight />
          </span>
          Copy
        </button>
      </div>
    </div>
  );
};

export default Customs;
