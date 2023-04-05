package ibf2022.batch1.csf.assessment.server.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ibf2022.batch1.csf.assessment.server.Utils.Utils;
import ibf2022.batch1.csf.assessment.server.models.Review;
import ibf2022.batch1.csf.assessment.server.repositories.MovieRepository;
import ibf2022.batch1.csf.assessment.server.services.MovieService;
import jakarta.json.JsonObject;

// TODO: Task 3, Task 4, Task 8

@Controller
@ResponseBody
@CrossOrigin(origins = "*")
@RequestMapping(path="/api/search")
public class MovieController {

	@Autowired
    MovieService movieSvc;
    
    @Autowired
    MovieRepository movieRepo;

    @GetMapping()
    public ResponseEntity<List<Review>> getReview(@RequestParam String query) {

        List<Review> movieData = movieSvc.searchReviews(query);
        
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(movieData);
}

    @PostMapping()
    public ResponseEntity<String> postComment(@RequestBody String payload) {
        
        JsonObject json = Utils.toJson(payload);

        movieRepo.mongoInsert(json);
        return ResponseEntity
        .status(HttpStatus.CREATED)
        .contentType(MediaType.APPLICATION_JSON)
        .body(json.toString());
    }
}
