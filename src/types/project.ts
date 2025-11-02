export interface Project {
  id: string;
  title: string;
  releaseDate: string;
  type: string;
  genre: string;
  cover: string;
  bandcampUrl: string;
}

export interface ProjectsData {
  [key: string]: Project;
}