package ibf2022.batch1.csf.assessment.server.Utils;

import java.io.StringReader;

import org.bson.Document;

import ibf2022.batch1.csf.assessment.server.models.Review;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

public class Utils {
    
    public static JsonObject toJson(String json) {
        JsonReader reader = Json.createReader(new StringReader(json));
        return reader.readObject();
    }

    public static Review toReview(JsonObject json) {
        Review review = new Review();
        review.setTitle(json.getString("display_title"));
        review.setRating(json.getString("mpaa_rating"));
        review.setByline(json.getString("byline"));
        review.setHeadline(json.getString("headline"));
        review.setSummary(json.getString("summary_short"));
        review.setReviewURL(json.getJsonArray("link").getJsonObject(1).getString("url"));
        review.setImage(json.getJsonArray("multimedia").getJsonObject(1).getString("src"));
        return review;
    }

}
