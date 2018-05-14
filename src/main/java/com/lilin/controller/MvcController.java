package com.lilin.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lilin.pojo.Article;
import com.lilin.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MvcController {

    private ArticleService articleService;
    private ObjectMapper objectMapper;

    @Autowired
    MvcController(ArticleService articleService, ObjectMapper objectMapper){
        this.articleService = articleService;
        this.objectMapper =objectMapper;
    }

    @RequestMapping(value = "admin", method = RequestMethod.GET)
    public String admin(){
        return "admin";
    }

    @ResponseBody
    @RequestMapping(value = "select", method = RequestMethod.GET)
    public String select (int id) throws JsonProcessingException{
        Article article = articleService.select(id);
        System.out.println(id);
        return objectMapper.writeValueAsString(article);
    }

    @RequestMapping(value = "delete", method = RequestMethod.GET)
    public String delete(int id){
        articleService.delete(id);
        return "redirect:admin";
    }

    @RequestMapping(value = "insert",method = RequestMethod.GET)
    public String insert(String title, String author, String content){
        articleService.insert(title, author, content);
        return "redirect:admin";
    }

    @RequestMapping(value = "update",method = RequestMethod.GET)
    public String update(int id, String title, String author, String content){
        articleService.update(id, title, author, content);
        return "redirect:admin";
    }

    @ResponseBody
    @RequestMapping(value = "getData",method = RequestMethod.GET)
    public String test() throws JsonProcessingException{
        List<Article> articles = articleService.list();
        return objectMapper.writeValueAsString(articles);
    }

}
