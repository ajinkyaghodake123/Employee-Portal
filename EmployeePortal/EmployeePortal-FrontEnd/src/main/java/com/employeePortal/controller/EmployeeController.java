package com.employeePortal.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employeePortal.model.EmployeeModel;
import com.employeePortal.service.EmployeeService;

@RestController
public class EmployeeController {

	@Autowired
	EmployeeService empService;

	// get All employee
	@RequestMapping(value = "/getAllEmp", method = RequestMethod.GET)
	public List<EmployeeModel> findAllEmployee() {
		// return mappingService.fiindAllDept();
		return empService.findAllEmp();
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public EmployeeModel RegisterEmployee(@RequestBody EmployeeModel empModel) {
		System.out.println(new Date());
		
		System.out.println("request obj - "+ empModel.getDateOfBirth());
		return empService.save(empModel);
	}

}
