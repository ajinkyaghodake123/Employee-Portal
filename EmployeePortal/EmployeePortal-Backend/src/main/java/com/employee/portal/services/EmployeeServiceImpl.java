package com.employee.portal.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.portal.model.EmpModel;
import com.employee.portal.repository.EmployeeRepo;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepo empRepo;
	
	@Override
	public EmpModel register(EmpModel emp) {
		// TODO Auto-generated method stub
		return empRepo.save(emp);
	}

	@Override
	public List<EmpModel> findAllEmployee() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

}
