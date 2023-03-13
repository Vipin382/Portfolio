import React from "react";
import { Avatar, Text } from "@mantine/core";
import { AiFillMessage } from "react-icons/ai";
import CodeComp from "../CodeComp";
import { AiFillStar } from "react-icons/ai";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

const code1 = `function initializeModelChunk<T>(chunk:ResolvedModelChunk):T{
    const value:T = parseModel(chunk._response,chunk._value);
    const initialzedChunk:InitializedChunk<T> = (chunk:any);
    initialzedChunk._status = INITIALIZED;
    initialzedChunk._value = value;
    return value;`;

const AboutCard = () => {
  return (
    <div className="p-7 flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar color="cyan" radius="xl" size={"sm"}>
            MK
          </Avatar>
          <div>
            <Text color="blue.5" size={14} className={fira.className}>
              @username
            </Text>
            <Text className={`text-[#607B96] ${fira.className}`} size={10}>
              Created 5 months ago
            </Text>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <AiFillMessage color="#607B96" size={12} />
            <Text className={`text-[#607B96] ${fira.className}`} size={14}>
              details
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <AiFillStar className="text-[#607B96]" size={12} />
            <Text className={`text-[#607B96] ${fira.className}`} size={12}>
              3 stars
            </Text>
          </div>
        </div>
      </div>
      <div>
        <CodeComp code={code1} />
      </div>
    </div>
  );
};

export default AboutCard;
