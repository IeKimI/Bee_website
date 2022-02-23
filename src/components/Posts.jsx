import React from "react";
import "./Posts.css";
import Post from "./Post";

const Posts = () => {
  const blogPosts = [
    {
      name:"pollination",
      title: "Pollination",
      body: (
        <>
           <h2>What is pollination?</h2>
          <ul>
            <li>The essential part of plant reproduction</li>
            <li>
              Pollen from the male part of the plant rubs or drops onto a
              pollinator, the pollinator then takes it to another flower where
              the pollen sticks to the female part of the plant. Fertilizes the
              plant.
            </li>
          </ul>
          <h2>Why is pollination important?</h2>
          <ul>
            <li>It helps maintain the ecosystem.</li>
            <li>One in three bites of food eaten depends on pollinators.</li>
          </ul>
         
          <h2>When does pollination happen?</h2>
          <ul>
            <li>Happens year round </li>
            <ul>
              <li>
                <strong>Spring:</strong> pollinators need early blooming plants
              </li>
              <li>
                <strong>Summer:</strong> peak blooming when pollinators reach
                peak populations.
              </li>
              <li>
                <strong>Fall:</strong> late blooming plants for pollinators
                before pollinators
              </li>
              <li>
                <strong>Winter:</strong> leave decaying plants alone
              </li>
            </ul>
          </ul>
          <h2>Where do pollinators live?</h2>
          <ul>
            <li>
              Bees can use mud, sand, plant resins and abandoned snail shells as
              nests.
            </li>
            <li>
              Pollinators' habitats need to be within easy range for food and
              clean shallow water.
            </li>
          </ul>
          <h2>Who pollinates?</h2>
          <ul>
            <li>
              Plants and pollinators evolved side by side for millions of years.
            </li>
            <li>
              Plants have developed many complex ways of attracting pollinators.
            </li>
            <ul>
              <li>
                Similarity pollinators evolved to specialized physical traits
                and behaviors that enhanced their pollination efforts.
              </li>
              <ul>
                <li>
                  <strong>Bees:</strong> Flower nectar provides fuel. Pollen provides protein and
                  amino acids.
                </li>
                <li>
                  <strong>Beetles:</strong> They are “mess and soil” pollinators. They stumble
                  though blossoms for food. Most frequently look for magnolias
                  and flowers close to the ground
                </li>
                <li>
                  <strong>Butterflies:</strong> visit flowers with flared petals that lead to
                  narrow throats that conceal nectar. They use their long
                  proboscis to reach the nectar.
                </li>
                <li>
                  <strong>Flies:</strong> act opposite to bees who visit sweet-smelling flowers.
                  They are attracted to flowers with rotting odors, meat-like
                  color, or fur-like texture. This is why they are attracted to
                  dead animals and poop.
                </li>
                <li>
                  <strong>Hummingbirds:</strong> uses its long thin bill and tongue to reach the
                  nectar hidden deep in the tubular flowers.
                </li>
                <li>
                  <strong>Moths:</strong> outnumber butterflies 10 to 1. Most active at night.
                  Night blooming flowers have a sweet scent and white or cream
                  color blossom.
                </li>
                <li>
                  <strong>Wind:</strong> pollinate grains mostly nuts and trees that blows the
                  pollen plant to plant
                </li>
              </ul>
            </ul>
          </ul>
        </>
      ),
      author: "WPI Bee Team",
      imgList: ["image/pollination1.png","image/pollination1.png"],
    },
    {
      title: "Life cycle of bees",
      body: (
        <>
        <h2>Life Cycle of a Honey Bee (Four Stages)</h2>
        <h3>Egg</h3>
        <ul>
            <li>The eggs are about half the size of a grain of rice.</li>
            <li>
            The queen lays the eggs in their own hexagonal cells in the brood section of the comb, attached to the cap at the end.</li>
            <li>Eggs take about 3 days to hatch into larvae.</li>
          </ul>

          <h3>Larvae</h3>
        <ul>
            <li>Larvae grow in uncapped cells, which are referred to as “open brood”.</li>
            <li>
            The larvae are white and lay in a crescent in the cell.</li>
            <li>When larvae are ready to molt into pupae, they stand upright in the cell and workers cap the cells with wax.</li>
            <li>The larval stage lasts 5.5-6.5 days depending on whether they are workers, drones, or queens.</li>
          </ul>

          <h3>Pupae</h3>
        <ul>
            <li>Larvae molt into pupae inside the capped cells. These are referred to as “capped brood”.</li>
            <li>
            When the pupae molt into adult bees, they chew their way out of the capped cells.</li>
            <li>Time in this stage varies between 8 and 14.5 days depending on whether they are workers, drones, or queens.</li>
          </ul>

          <h3>Adult Bee</h3>
        <ul>
            <li>Adults have a head, thorax, and abdomen, and they are covered in hairs.</li>
            <li>The head has antennae five eyes: two large compound eyes, and three tiny eyes on top of the head.</li>
          </ul>

        <h2>Types of Bees</h2>
        <h3>Worker Bee</h3>
        <ul>
            <li>Worker bees in the hive are female, and non reproductive.</li>
            <li>
              When an egg is fertilized, it becomes a female worker bee.
            </li>
            <li>Workers are adapted for carrying nectar and pollen: both of their hind legs have pollen baskets.</li>
            <li>When a worker bee stings, the stinger is torn from their abdomen.</li>
            <li>Female larvae that are fed pollen, nectar, and brood food become workers.
</li>
          </ul>

          <h3>Drone Bee</h3>
          <ul>
            <li>Drones are the only male honey bees. </li>
            <li>
            They are larger, and have no stinger.
            </li>
            <li>Drones do not collect pollen or nectar.</li>
            <li>The only purpose of drones is to mate with the queen.</li>
          </ul>

          <h3>Queen Bees</h3>
          <ul>
            <li>Female larvae that are fed royal jelly, pollen, and nectar become queens.</li>
            <li>
            The queen bee is the only reproductive female in the colony under normal circumstances.
            </li>
          </ul>

          <p>Source: https://entnemdept.ufl.edu/creatures/misc/BEES/euro_honey_bee.htm</p>

       
        </>
      ),
      author: "WPI Bee Team",
      imgList: ["image/lifecycle1.png"],
    },
    {
      title: "Decline in pollinator diversity and its impact",
      body: (
        <>
        <h3>Declines</h3>
        <ul>
            <li>Pollinator biodiversity is declining globally at alarming rates: more than 40% of pollinator species are classified as highly threatened (Kopec & Burd, 2017).</li>
            <li>
            The number of European honey bee colonies decreased by 25% over 20 years in Europe and 59% over 58 years in North America.</li>
            <li>1 in every 4 species of bee in the United States is at risk of extinction.</li>
          </ul>

          <h3>Human Impact</h3>
        <ul>
            <li>Human impact like urbanization and agricultural land expansions lead to habitat degradation, meaning a reduction in the bee habitat, like floral and nesting resources (Potts et al., 2010). 
</li>
            <li>
            Habitat loss affects Hawaiian native bees especially, since they prefer to live in uninhabited areas and along shorelines.</li>
            <li>Pesticides used in agricultural areas are highly toxic to bees.</li>
            <li>Herbicides used to kill weeds also kill plants that provide forage to bees.</li>
            <li>Climate change affects bee life cycles
            <ul>
              <li>“As average monthly temperatures rise, flowers bloom earlier in the spring, creating a potential mismatch in seasonal timing between when flowers produce pollen and when bees are ready to feed on that pollen.” (Conservation.org)</li>
              </ul>
            </li>
          </ul>

          <h3>Invasive Species</h3>
        <ul>
            <li>One of the biggest factors affecting European honey bees is the Varroa destructor mite.
            <ul>
              <li>It is an external parasitic mite which reproduces in honeybee colonies.</li>
              <li>The mite has spread throughout the world. Only a few places still exist without the mite, such as Maui and Kauai.</li>
              <li>The mite spreads viruses such as the Deformed Wing Virus (DWV). Honeybees infected with DWV have shrunken, damaged wings, and often other deformities. They generally live for less than 48 hours.</li>
              <li>The queen can also be infected with DWV and can spread it throughout the hive, destroying it from the inside.</li>
              </ul>
 </li>
          </ul>

          <h3>Effects </h3>
        <ul>
            <li>Without bees we will lose agricultural benefits. </li>
            <li>These declines carry serious ecological and evolutionary implications for plants, food webs, and ecosystem functions (Vanbergen et al., 2013).</li>
            <li>Complete pollinator loss has been measured to translate into a 12% loss of all fruit and a 6% loss of all vegetables globally (Potts et al., 2010).</li>
            <li>In terms of global economic value, pollinator services deliver 173 billion USD annually (Potts, et al., 2010) and 13 billion are delivered to US agriculture alone (Potts et al., 2010).</li>
            <li>The queen bee production in Hawai‘i is currently estimated to be worth around $10 million a year (Hawai‘i Apiary Program Info, 2016);</li>
          </ul>

        </>
      ),
      author: "WPI Bee Team",
      imgList: ["image/decline1.png"],
    },
    {
      title: "Call to action",
      body: (
        <>
          <p>
            An interconnection of multiple devices, also known as hosts, that
            are connected using multiple paths for the purpose of sending/
            receiving data media. Computer networks can also include multiple
            devices/mediums which help in the communication between two
            different devices; these are known as Network devices and include
            things such as routers, switches, hubs, and bridges.
          </p>
        </>
      ),
      author: "Sonu Kr",
      imgList: ["image/brochure1.png"],
    },
  ];

  return (
    <div className="posts-container{}">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
