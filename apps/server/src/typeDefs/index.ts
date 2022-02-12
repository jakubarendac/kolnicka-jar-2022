import query from "./query";
import { episodeType, podcastDetailType, podcastType } from "./types";

const typeDefs = [query, podcastType, podcastDetailType, episodeType];

export default typeDefs;
