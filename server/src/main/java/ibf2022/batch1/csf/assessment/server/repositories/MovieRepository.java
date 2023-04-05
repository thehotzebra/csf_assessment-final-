package ibf2022.batch1.csf.assessment.server.repositories;

import javax.swing.text.Document;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import jakarta.json.JsonObject;

@Repository
public class MovieRepository {

	@Autowired
    MongoTemplate template;

	// TODO: Task 5
	// You may modify the parameter but not the return type
	// Write the native mongo database query in the comment below

	//db.posts.find().count()
	public int countComments(Object param) {
		Criteria criteria1 = Criteria.where("");
		Query query = Query.query(criteria1);
		
		return 0;
	}

	// TODO: Task 8
	// Write a method to insert movie comments comments collection
	// Write the native mongo database query in the comment below
	/*
	 * db.comments.update({ title: 'Avengers' },
			$set: {
			comment: 'Testing123'
			},
			{
			upsert: true
			})		
	 */

	public void mongoInsert(JsonObject json) {

        JsonObject inserted = template.insert(json, "comments");
        System.out.println(inserted);


    }
}
