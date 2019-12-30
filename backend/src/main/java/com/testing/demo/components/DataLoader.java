package com.testing.demo.components;

import com.testing.demo.models.TestItem;
import com.testing.demo.repositories.TestItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TestItemRepository testItemRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        TestItem item1 = new TestItem("Item One", "This is the first item");
        testItemRepository.save(item1);

        TestItem item2 = new TestItem("Item Two", "This is the second item");
        testItemRepository.save(item2);

    }

}
