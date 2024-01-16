import DiscourseRoute from "discourse/routes/discourse";
import RssPollingFeedSettings from "../../admin/models/rss-polling-feed-settings";

export default DiscourseRoute.extend({
  model() {
    return RssPollingFeedSettings.show().then((result) => result.feed_settings);
  },

  setupController(controller, model) {
    controller.setProperties({
      model,
    });
  },
});
