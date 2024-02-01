import { useState } from "react";
import Dropzone from "react-dropzone";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const SelectCrop = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a crop" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Crops</SelectLabel>
          <SelectItem value="potato">Potato</SelectItem>
          <SelectItem value="pepper">Pepper</SelectItem>
          <SelectItem value="tomato">Tomato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const Prediction = () => {
  const [file, setFile] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="w-[498px] h-[498px] bg-green-300 rounded-full absolute ml-[702px] mb-[219px]" />
      <div className="w-[498px] h-[498px] bg-slate-400 rounded-full absolute mr-[757px] mt-[300px]" />
      {/* <section className="flex flex-wrap justify-center w-full max-w-4xl p-4 my-4 bg-white shadow-md rounded-md dark:bg-gray-800"> */}

      <section className="flex flex-wrap justify-center w-full max-w-4xl p-4 my-4 bg-white bg-opacity-25 shadow-md rounded-md border-2 border-white backdrop-blur-[101.20px] z-10">
        <div className="w-full md:w-1/2 p-2 md:h-full">
          <h2 className="text-2xl font-bold text-center mb-4">
            Crop Disease Detection
          </h2>
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <SelectCrop />

            <Label htmlFor="crop-image">Upload Crop Image</Label>
            <div className="flex flex-col justify-center items-center md:h-[300px] border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <Dropzone
        onDrop={(acceptedFiles) => {
          setFile(acceptedFiles[0]);
          setPreviewImage(URL.createObjectURL(acceptedFiles[0]));
          console.log(acceptedFiles);
        }}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section className="bg-transparent">
            <div
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="bg-transparent">Drop it here</p>
              ) : (
                <ol className="flex flex-col items-center bg-transparent">
                  <li className="bg-transparent text-center text-zinc-900 text-opacity-40 font-black font-['Inter']">
                    Drag & drop or click here.
                  </li>
                  <li className="bg-transparent text-center text-zinc-900 text-opacity-40 font-normal font-['Inter']">
                    to upload your image ( max 2 MiB )
                  </li>
                </ol>
              )}
            </div>
          </section>
        )}
      </Dropzone>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Detect Disease
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <h2 className="text-2xl font-bold text-center mb-4">
            Detected Disease
          </h2>
          {previewImage ? (
        <div className="flex flex-col items-center relative">
          <img
            alt="Detected Disease"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            src={previewImage}
            height="200"
            width="200"
          />
          <button
            className="bg-blue-800 text-white font-semibold absolute top-0 right-0 p-2 rounded-sm"
            onClick={() => setPreviewImage("")}
          >
            Remove
          </button>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
              Disease Name: <span className="font-bold">Fusarium Wilt</span>
            </p>
        </div>
      ): (
        <div className="flex flex-col items-center">
            <img
              alt="Detected Disease"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height="200"
              src="/placeholder.svg"
              width="200"
            />
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Disease Name: <span className="font-bold">Fusarium Wilt</span>
            </p>
          </div>
      )}
        </div>
      </section>
      <section className="w-full max-w-2xl p-4 my-4 bg-white bg-opacity-25 shadow-md rounded-md border-2 border-white backdrop-blur-[101.20px] dark:bg-gray-800 z-10">
        <h2 className="text-2xl font-bold text-center mb-4">
          Recommended Solution
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Fusarium wilt can be managed by using resistant varieties, crop
          rotation, and soil solarization. Avoid planting susceptible crops in
          infested fields.
        </p>
      </section>
      <section className="w-full max-w-2xl p-4 my-4 bg-white bg-opacity-25 shadow-md rounded-md border-2 border-white backdrop-blur-[101.20px] dark:bg-gray-800 z-10">
        <h2 className="text-2xl font-bold text-center mb-4">Feedback</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Label htmlFor="feedback">Your Feedback</Label>
          <Textarea id="feedback" placeholder="Type your feedback here." />
        </div>
        <div className="flex justify-center mt-4">
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Submit Feedback
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Prediction;
