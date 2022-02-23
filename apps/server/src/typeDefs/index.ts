import { mutations } from "./mutations";
import { queries } from "./queries";
import { SearchResult, podcastDetailResult } from "./types";

const typeDefs = [queries, mutations, SearchResult, podcastDetailResult];

export default typeDefs;
