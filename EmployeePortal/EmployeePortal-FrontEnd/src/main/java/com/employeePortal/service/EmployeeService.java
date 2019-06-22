package com.employeePortal.service;

import java.util.List;

import com.employeePortal.model.EmployeeModel;

public interface EmployeeService {

	public EmployeeModel save(EmployeeModel employeeModel);
	public List<EmployeeModel> findAllEmp();
}
