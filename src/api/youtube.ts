import axios from "axios";
import { Video } from "../interfaces/Video";

export const getVideo =
  (keyword: string | undefined) => async (): Promise<Video[]> =>
    await axios
      .get(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((r) => r.data.items)
      .catch((e) => console.log(e));
