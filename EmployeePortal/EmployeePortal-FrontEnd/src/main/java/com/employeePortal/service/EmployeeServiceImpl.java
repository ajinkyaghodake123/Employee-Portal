package com.employeePortal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeePortal.model.EmployeeModel;
import com.employeePortal.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository empRepo;

	@Override
	public List<EmployeeModel> findAllEmp() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

	@Override
	public EmployeeModel save(EmployeeModel employeeModel) {
		// TODO Auto-generated method stub
		return empRepo.save(employeeModel);
	}
	
}
