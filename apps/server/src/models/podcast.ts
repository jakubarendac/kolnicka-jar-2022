import PodcastApi from "../data/podcastApi";

class Podcast {
  static search(dataSource: PodcastApi, q: string) {
    return dataSource.getSearch(q);
  }

  static podcastDetail(dataSource: PodcastApi, id: string) {
    return dataSource.getPodcastDetailById(id);
  }
}

export default Podcast;
