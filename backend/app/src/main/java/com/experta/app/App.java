package com.experta.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import com.experta.app.dao.UserRepository;
import com.experta.app.model.User;
import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class App {

	@Autowired
	private UserRepository repository;

	@PostMapping("/register")
	public boolean register(@RequestBody User user) {
		try {			
		repository.saveAndFlush(user);
		return true;
		}catch(Exception e){
			return false;
		}
	}

	@GetMapping("/getAllUsers")
	public List<User> findAllUsers() {
		return repository.findAll();
	}

	@DeleteMapping("/deleteUser/{id}")
	public List<User> cancelRegistration(@PathVariable int id) {
		repository.deleteById(id);
		return repository.findAll();
	}

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

}
