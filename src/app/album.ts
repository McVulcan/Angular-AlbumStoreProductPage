import { Track } from "./track";

export interface Album {
  name: string;
  releasedDate: string;
  coverImage: string;
  tracks: Track[]
}
