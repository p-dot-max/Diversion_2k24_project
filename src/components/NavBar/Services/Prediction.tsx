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
  )
};

const Prediction = () => {
  const [file, setFile] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-10 relative">

      <div className="w-[733px]">
      <SelectCrop />
      </div>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setFile(acceptedFiles[0]);
          setPreviewImage(URL.createObjectURL(acceptedFiles[0]));
          console.log(acceptedFiles);
        }}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section className="w-2/5 h-2/5 z-10 bg-transparent">
            <div
              {...getRootProps()}
              className="flex justify-center items-center w-[733px] h-[398px] bg-white bg-opacity-25 rounded-[19px] border-2 border-white backdrop-blur-[101.20px]"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="bg-transparent">Drop it here</p>
              ) : (
                <ol className="flex flex-col items-center bg-transparent">
                <li className="bg-transparent w-[496px] text-center text-zinc-900 text-opacity-40 text-4xl font-black font-['Inter']">Drag & drop or click here.</li>
                <li className="bg-transparent w-[496px] text-center text-zinc-900 text-opacity-40 text-base font-normal font-['Inter']">to upload your image ( max 2 MiB )</li>
                </ol>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      <div className="w-[498px] h-[498px] bg-green-300 rounded-full absolute ml-[702px] mb-[219px]" />
      <div className="w-[498px] h-[498px] bg-slate-400 rounded-full absolute mr-[757px] mt-[300px]" />

      {previewImage && (
        <div className="w-2/5 relative">
          <img
            className="w-full h-full"
            src={previewImage}
            alt="Preview Image"
          />
          <button
            className="bg-blue-800 text-white font-semibold absolute top-0 right-0 p-2 rounded-sm"
            onClick={() => setPreviewImage("")}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Prediction;
