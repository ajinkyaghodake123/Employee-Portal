package com.employee.portal.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.portal.model.EmpModel;

@Service
public interface EmployeeService {

	public EmpModel register(EmpModel emp);
	public List<EmpModel> findAllEmployee();
}
