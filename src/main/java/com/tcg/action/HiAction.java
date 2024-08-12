package com.tcg.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HiAction {

	@RequestMapping("hi")
	public String hi() {
		return "Hi";
	}
}
