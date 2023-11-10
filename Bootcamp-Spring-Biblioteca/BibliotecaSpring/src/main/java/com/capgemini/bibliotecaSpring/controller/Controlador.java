package com.capgemini.bibliotecaSpring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({ "/admin", "/" })
public class Controlador {


	@GetMapping("/")
	public String index() {
		System.out.println("Hola, mundo");
		return "index";
	}

}
