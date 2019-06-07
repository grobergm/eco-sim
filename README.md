# EcoSim 

## Developed by Matt Groberg

### Version 1.0

<a href='https://ecosim-f5668.firebaseapp.com/'>Play Game</a>

### Description

_Grow, Compete, Evolve..._
In this game you take on the role of a plants competing for space and water in a randomly generated environment. Each player starts by selecting several adaptations that their species will have. In the setup menu, you can choose resource levels (which will modify the probability of uninhabitable rcoky areas and water tiles), game length, and map size.

During the game, players take turns placing their seeds in ideal locations. Plants will gather water from tiles around them (increasing their range with greater root size). However, plants will lose water if other plants are next to them, based on that plant's rootsize. Plants use water to make sugar through photosynthesis each turn, if they have enough water to support their leaves. If not, they will lose leaves. 

By selecting one of your plants, you can spend sugar on growing leaves, roots, or flowers (if you haven't reached the max for your species). 
Flowers only last one turn, but will give you additional seed to place on the board. When the game ends, each player gets pointed for each leaf on their plants and each seed. 

### Future Versions:

**Animations:**
* Growing and loosing leaves have scale transitions
* Resources gathered have indicators
* (Eventually) Animals are animated when moving

**AI**
* Can add a computer controlled plant population.
* Can automate strategies (like growing leaves) to make it easy to have many plants
* (Eventually) add computer controlled animal populations

**Animals**
* Players can choose between plants or animals. 
* Animals can remove plant leaves and drink water to get energy.
* Animals use energy to move, fight other animals, and care for their offspring.
* Plants can choose herbivore defense adaptations.

**Environment**
* More resources are added to the map (for example: in addition to sugar, plants need Nitrogen for leaves, and Phosphorous for seeds).
* Water tiles are replaced with gradual elevation changes (more water in low areas). 
* Resources can be depleated by plants
* Resources are replenished periodically by rain or other organisms

**More Plant Adaptations**
* Plants can branch in different directions with woody growth adaptation, allowing them to compete for light.
* Flowers need to be pollinated to produce seed
* Seed is randomly dispursed, adapations to increase dispersal (like attaching to animals, or increasing range).

### Tech Used
* User Interface: React
* State Management: Redux 
* Testing: Jest   
* Linting: ES-Lint
* Styling: JSX style objects and CSS
* Bundling and Standardization: WebPack and Babel with NodeJS
* Deployment: Firebase

### Legal Info
MIT Licence Matt Groberg (copyright 2019)

