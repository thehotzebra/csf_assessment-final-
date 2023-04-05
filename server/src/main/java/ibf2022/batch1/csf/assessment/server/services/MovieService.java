package ibf2022.batch1.csf.assessment.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import ibf2022.batch1.csf.assessment.server.Utils.Utils;
import ibf2022.batch1.csf.assessment.server.models.Review;
import jakarta.json.JsonObject;;

@Service
public class MovieService {

	// TODO: Task 4
	// DO NOT CHANGE THE METHOD'S SIGNATURE

	private final String API_KEY = "ApFMC6tlOAujKXc7XAvmRGFdCWO3o6Mr";
    private final String URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
	public List<Review> searchReviews(String query) {
	
        UriComponents uri = UriComponentsBuilder
                        .fromUriString(URL)
                        .queryParam("query", query)
                        .queryParam("api-key", API_KEY)
                        .build();

        System.out.println(uri);

		RequestEntity<Void> req = RequestEntity
                                    .get(uri.toUriString())
                                    .accept(MediaType.APPLICATION_JSON)
                                    .build();

        RestTemplate template = new RestTemplate();

		ResponseEntity<String> response = null;

		response = template.exchange(req, String.class);
            Review review = Utils.toReview(Utils.toJson(response.getBody()));

            return null;
	}

}
