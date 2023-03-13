import { Fira_Code } from "next/font/google";
import { Anchor, Flex, Loader } from "@mantine/core";
import { useMantineTheme, Text, Title, Stack } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
const fira = Fira_Code({ subsets: ["latin"] });
import Autoplay from "embla-carousel-autoplay";
import React, { Suspense } from "react";

const CodeComp = React.lazy(() => import("@/components/CodeComp"));

const code1 = `function initializeModelChunk<T>(chunk:ResolvedModelChunk):T{
  const value:T = parseModel(chunk._response,chunk._value);
  const initialzedChunk:InitializedChunk<T> = (chunk:any);
  initialzedChunk._status = INITIALIZED;
  initialzedChunk._value = value;
  return value;`;

const code2 = `import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}`;

const code3 = `import { useState } from 'react';
export default function App() {
  return (
    <div>
     Hello World
    </div>
  );
}`;

const code4 = `export function getAboutUsLink(language){
  switch (language.toLowerCase()){
    case englishCode.toLowerCase():
      return '/about-us';
    case spanishCode.toLowerCase():
      return '/acerca-de';
  }
  return '';
}`;
export const FetchWholeData = async () => {};
export default function Home() {
  const theme = useMantineTheme();
  const autoplay = React.useRef(
    Autoplay({
      delay: 2000,
      rootNode: (emblaRoot: any) => {
        return emblaRoot;
      },
    })
  );

  return (
    <div className={`overflow-hidden `}>
      <Flex
        h="85.2vh"
        justify={"center"}
        align="center"
        className="px-2 xsm:px-10 overflow-hidden gap-8 md:gap-12 lg:gap-10 xl:gap-16"
      >
        <div className="flex h-full bg-right-bottom justify-around w-full nm:w-auto nm:h-auto flex-col nm:gap-10 nm:min-w-0">
          <div className="relative nm:hidden after:content-[url('/img/newGreen.svg')] after:blur-[65px] after:absolute after:top-[-123px] after:left-[-152px]"></div>
          <Stack spacing={"10px"} className="relative after:content-[url('/img/newBlue.svg')] nm:after:hidden after:blur-[65px]  after:top-[-57px] after:left-[-24px] after:absolute ">
            <Text className={fira.className} style={{ color: "white" }}>
              Hi all, I am
            </Text>
            <Title
              order={1}
              className={`${fira.className} xsm:text-8xl nm:font-thin font-normal`}
              style={{ color: "white" }}
            >
              Vipin Bhati
            </Title>
            <Title
              order={2}
              className={`${fira.className} text-[12px] sm:text-xl text-[#43d9ad] nm:font-normal nm:text-[#4d5bce]`}
            >
              {"> Full-Stack developer"}
            </Title>
          </Stack>
          <Stack spacing={"6px"}>
            <Text
              c="dimmed"
              className={`${fira.className} text-[12px] sm:text-[15px]`}
            >
              {`// complete the game to continue`}
            </Text>
            <Text
              c="dimmed"
              className={`${fira.className} text-[12px] sm:text-[15px] `}
            >
              {`// you can also see it on my Github page`}
            </Text>
            <Anchor
              component="a"
              href="https://github.com/Vipin382"
              className={`${fira.className} text-[12px] sm:text-[15px] `}
            >
              <span style={{ color: theme.colors.navyBlue[0] }}>const </span>
              <span style={{ color: theme.colors.greenShade[0] }}>Vpin's_github </span>

              <span
                style={{ color: "#E99287" }}
                className=" text-ellipsis text-[12px] sm:text-[15px]"
              >
                "https://github.com/Vipin382"
              </span>
            </Anchor>
          </Stack>
        </div>
        <div className="relative hidden nm:block after:content-[url('/img/Green.svg')] after:blur-[75px] after:absolute after:top-[-123px] after:left-[-152px]">
          <div className="relative after:content-[url('/img/Blue.svg')] after:blur-[75px] after:top-[1px] after:absolute ">
            <Suspense
              fallback={
                <Loader
                  className="flex justify-center items-center"
                  size={"sm"}
                />
              }
            >
              <Carousel
                align="start"
                slideGap="md"
                slideSize="53.333333%"
                controlsOffset="xs"
                controlSize={28}
                orientation="vertical"
                loop
                dragFree
                withControls={false}
                className="lg:h-[85vh] overflow-hidden w-[400px] lg:w-[600px]"
                plugins={[autoplay.current]}
                opacity={"0.6"}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                breakpoints={[
                  { maxWidth: "md", slideSize: "50%" },
                  { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
                ]}
              >
                <Carousel.Slide>
                  <CodeComp code={code1} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code2} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code3} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code4} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code1} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code2} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code3} />
                </Carousel.Slide>
                <Carousel.Slide>
                  <CodeComp code={code4} />
                </Carousel.Slide>
              </Carousel>
            </Suspense>
          </div>
        </div>
      </Flex>
    </div>
  );
}
