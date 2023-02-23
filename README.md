# Pokemon-API

Using External API Keys, Creating an arena that displays a Pokemon Battle (From the popular Pokemon Games)

The Prompt for the project:
Create an arena that displays two Pokemon battling each other.
Compare the two to see who is likely to win.

## Code Plan:

Taking inspiration from the old school battle menu for pokemon ruby/sapphire/emerald. I wanted to create something similar display on the DOM.

![pokemon battle template](/img/Project-Outline.jpg)

### Arena Displaying Two Pokemon Battling:

- Fetch pokemon using https://pokeapi.co/ API
- Randomize the per battle pokemon (2 pokemon should be chosen partner vs rival pokemon)
- Place the chosen pokemon into a partner side and rival side
- Display the HP/Name/& LVL for the rival and HP/Name/LVL/EXP for the partner
- Below the screen there should be a section that lists the moves that the partner pokemon can use.
- There should be 4 moves, that could be randomized maybe, and show the move type and How many times the pokemon can use the move.

### Compare the pokemon (Who is likely to win?):

- This section will be up for debate on wether I want to have them battle using their moves or just present who will win depending on their type advantage/level/moveset/etc.
