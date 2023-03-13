import { ProjectCardState, ProjectCardInterface } from "@/atoms/atom";
import { FetchData } from "@/utils/Fetcher";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import ProfileModel from "../ProfileModel";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [projects, setProjects] = useRecoilState(ProjectCardState);
  useEffect(() => {
    const MakeCall = async () => {
      const ProjectData = await FetchData();
      setProjects(ProjectData.newData as ProjectCardInterface[]);
    };
    MakeCall();
  }, []);

  return (
    <>
      <Navbar />
      <ProfileModel />
      <main className={`min-h-[85vh] h-full`}>{children}</main>
      <Footer />
    </>
  );
}
