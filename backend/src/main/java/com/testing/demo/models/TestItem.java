package com.testing.demo.models;

public class TestItem {

    // Properties
    private Long id;
    private String name;
    private String description;

    public TestItem(String name, String description) {
        this.name = name;
        this.description = description;
    }

    // Empty Constructor

    public TestItem() {
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
