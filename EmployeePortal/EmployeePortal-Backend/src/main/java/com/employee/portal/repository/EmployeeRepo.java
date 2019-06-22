package com.employee.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.portal.model.EmpModel;

@Repository
public interface EmployeeRepo extends JpaRepository<EmpModel, Integer>{

}
