import { queries } from "./queries";
import { episodeType, podcastDetailType, podcastType } from "./types";

const typeDefs = [queries, podcastType, podcastDetailType, episodeType];

export default typeDefs;
