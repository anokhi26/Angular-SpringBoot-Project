package com.javasampleapproach.jpamysqlangular4.repo;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.javasampleapproach.jpamysqlangular4.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
    List<User> findByLastName(String lastName);
}
