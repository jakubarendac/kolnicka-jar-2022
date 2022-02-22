import { queries } from "./queries";
import {
  episodeType,
  podcastDetailType,
  podcastType,
  searchResult,
} from "./types";

const typeDefs = [
  queries,
  podcastType,
  podcastDetailType,
  episodeType,
  searchResult,
];

export default typeDefs;
