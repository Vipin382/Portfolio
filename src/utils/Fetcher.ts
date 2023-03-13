import { ProjectCardInterface } from "@/atoms/atom";
import { supabase } from "../db/SuperbaseClient";

export interface IEmailValidation {
  email: string;
}
export interface ProjectInterface {
  projectName: string;
  gitLink: string;
  LiveLink: string;
  ImgUrl: string;
  about: string;
}
export interface ImageFile {
  img: File;
  imgName: string;
}

export const ValidateOwner = async (data: IEmailValidation) => {
  const user = await supabase.auth.signInWithPassword({
    email: data.email,
    password: "vip#@990",
  });
  if (user.data.user && user.error === null) {
    return { message: `Welcome Master vipin bhati`, status: 200 };
  } else {
    return { message: user.error?.message, status: user.error?.status };
  }
};

export const UploadImage = async (data: ImageFile) => {
  const imgData = await supabase.storage
    .from("project-pic")
    .upload(`public/${data.imgName}`, data.img as File);

  const newData = await supabase.storage
    .from("project-pic")
    .getPublicUrl(imgData.data?.path as string);

  if (newData.data.publicUrl) {
    return {
      message: `Image Uploaded`,
      status: 200,
      urlPath: newData.data.publicUrl,
    };
  } else {
    return { message: "Error", error: imgData.error?.message };
  }
};

export const CreateProject = async (data: ProjectCardInterface) => {
  const project = await supabase.from("project").insert({
    giturl: data.gitLink,
    imgurl: data.ImgLink,
    about: data.about,
    projectname: data.ProjectName,
    liveurl: data.LiveLink,
  });
  if (project.error !== null) {
    return { message: project.error.message, status: project.error.code };
  }
  return { message: "success", status: 200, data: project.data };
};

export const FetchData = async () => {
  const data = await supabase.from("project").select();
  if (data.error !== null) {
    return { message: data.error.message, status: data.error.code };
  }
  const newData: ProjectCardInterface[] = [];
  data.data.map((item, _index) => {
    newData.push({
      gitLink: item.giturl,
      LiveLink: item.liveurl,
      about: item.about,
      ProjectName: item.projectname,
      ImgLink: item.imgurl,
    });
  });

  return { message: "success", status: 200, newData };
};
