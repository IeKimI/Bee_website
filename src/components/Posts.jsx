import React from "react";
import "./Posts.css";
import Post from "./Post";

const Posts = () => {
  const blogPosts = [
    {
      title: "Pollination",
      body: `Why is pollination important 
      Its helps maintain the ecosystem
      One in three bites of food eaten depends on pollinators 
      What is pollination 
      The essential part of plant reproduction
        Pollen from the male part of the plant rubs or drops onto a pollinator, the polimator then takes it to another flower where the pollen sticks to the female part of the plant. Fertilizes the pant 
      When does pollination happen 
      Happens year round 
      spring : pollinators need early blooming plants 
      Summer: peak blooming when pollinators reach peak populations. 
      Fall: late blooming plants for pollinators before pollinators 
      Winter: leave decaying plants alone
      Where do pollinators live
      Bees can use mud, sand, plant resins and abandoned snail shells as nests.
      Pollinators' habitats need to be within easy range for food and clean shallow water.
      Who pollinates
      Plants and pollinators evolved side by side for millions of years
      Plants have developed many complex ways of attracting pollinators
      Similarity pollinators evolved to specialized physical traits and behaviors that enhanced theri pollination efforts 
      Bees: Flower nectar provides fuel. Pollen provides protein and amino acids. 
      Beetles: They are “mess and soil” pollinators. They stumble though blossoms for food. Most frequently look for magnolias and flowers close to the ground 
      Butterflies:  visit flowers with flared petals that lead to narrow throats that conceal nectar. They use their long proboscis to reach the nectar. 
      Flies: act opposite to bees who visit sweet-smelling flowers. They are attracted to flowers with rotting odors, meat-like color, or fur-like texture. This is why they are attracted to dead animals and poop.
      Hummingbirds: uses its long thin bill and tongue to reach the nectar hidden deep in the tubular flowers. 
      Moths: outnumber butterflies 10 to 1. Most active at night. Night blooming flowers have a sweet scent and white or cream color blossom. 
      Wind: pollinate grains mostly nuts and trees that blows the pollen plant to plant 
      `,
      author: "WPI Bee Team",
      imgUrl:
        "image/pollination1.png",
    },
    {
      title: "Life cycle of bees ",
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "image/lifecycle1.png",
    },
    {
      title: "Decline in pollinator diversity and its impact",
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
      author: "Monu Kr",
      imgUrl:
        "image/decline1.png",
    },
    {
      title: "Call to action",
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "image/brochure1.png",
    },
  ];

  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
