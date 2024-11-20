package test.java.com.example.otl_server;

import com.example.otl_server.controller.CommentService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@Disabled
@SpringBootTest
public class OtlServerApplicationTests {

	@MockBean
	private CommentService commentService;

	@Test
	void contextLoads() {
	}

}
