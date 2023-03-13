import { ProjectCardState } from "@/atoms/atom";
import React, { Suspense } from "react";
import { Loader } from "@mantine/core";
import { useRecoilState } from "recoil";

const ProjectCards = React.lazy(() => import("@/components/ProjectCards"));
const Sidebar = React.lazy(() => import("@/components/project/Sidebar"));

const Projects = () => {
  const [ProjectList, SetProjectList] = useRecoilState(ProjectCardState);
  return (
    <div className="min-h-[85.2vh] relative flex flex-col nm:flex-row">
      <Suspense
        fallback={
          <Loader className="flex justify-center items-center" size={"xs"} />
        }
      >
        <Sidebar />
      </Suspense>

      <Suspense
        fallback={
          <Loader className="flex justify-center items-center" size={"xs"} />
        }
      >
        <div className="grid transition-all duration-200 gap-8 p-4 resGrid w-full overflow-y-auto place-content-start">
          {ProjectList ? (
            ProjectList.map((item, index) => {
              return (
                <ProjectCards
                  key={index}
                  index={index}
                  ImgLink={item.ImgLink}
                  gitLink={item.gitLink}
                  LiveLink={item.LiveLink}
                  ProjectName={item.ProjectName}
                  about={item.about}
                />
              );
            })
          ) : (
            <Loader size={"xs"} />
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Projects;
