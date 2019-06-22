package com.employee.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employee.portal.model.EmpModel;
import com.employee.portal.services.EmployeeService;

@CrossOrigin("*")
@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeService empService;

	@RequestMapping(value = "/register" , method = RequestMethod.POST)
	public EmpModel register(@RequestBody EmpModel empModel) {
		
		return empService.register(empModel);	
	}
	
	@RequestMapping(value = "/getAllEmp", method = RequestMethod.GET)
	public List<EmpModel> getAllEmployee() {
		return empService.findAllEmployee();
	}
}
