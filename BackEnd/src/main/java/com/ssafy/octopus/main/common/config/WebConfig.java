package com.ssafy.octopus.main.common.config;


import com.ssafy.octopus.main.common.interceptor.AuthInterceptor;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
 * Write by SJH
 * */

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private AuthInterceptor authInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(authInterceptor)
//                .addPathPatterns("/*") // interceptor activated page
//                .excludePathPatterns("/signIn")
//                .excludePathPatterns("/login"); // interceptor unactivated page
    }
}
