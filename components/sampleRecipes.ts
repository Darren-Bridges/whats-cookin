export const sampleRecipes = [
  {
    id: "wc1",
    name: "Spicy Thai Noodles",
    cuisine: "Thai",
    mood: "Adventurous",
    allergens: ["peanuts"],
    price: "$$",
    ingredients: [
      { name: "rice noodles", quantity: { amount: 200, unit: "g", ingredient: "rice noodles" } },
      { name: "peanuts", quantity: { amount: 50, unit: "g", ingredient: "peanuts" } },
      { name: "chili", quantity: { amount: 2, unit: "pieces", ingredient: "chili" } },
      { name: "soy sauce", quantity: { amount: 60, unit: "ml", ingredient: "soy sauce" } }
    ],
    time: 30,
    steps: [
      "Cook rice noodles according to package instructions.",
      "In a pan, sauté chili and peanuts.",
      "Add cooked noodles and soy sauce, toss well.",
      "Serve hot, garnished with extra peanuts."
    ]
  },
  {
    id: "wc2",
    name: "Classic Margherita Pizza",
    cuisine: "Italian",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$",
    ingredients: [
      { name: "flour", quantity: { amount: 300, unit: "g", ingredient: "flour" } },
      { name: "tomato", quantity: { amount: 200, unit: "g", ingredient: "tomato" } },
      { name: "mozzarella", quantity: { amount: 150, unit: "g", ingredient: "mozzarella" } },
      { name: "basil", quantity: { amount: 10, unit: "g", ingredient: "basil" } }
    ],
    time: 45,
    steps: [
      "Prepare pizza dough and let it rise.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella and basil leaves.",
      "Bake at 475°F (245°C) for 12-15 minutes."
    ]
  },
  {
    id: "wc3",
    name: "Vegan Buddha Bowl",
    cuisine: "Fusion",
    mood: "Healthy",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "quinoa", quantity: { amount: 100, unit: "g", ingredient: "quinoa" } },
      { name: "chickpeas", quantity: { amount: 200, unit: "g", ingredient: "chickpeas" } },
      { name: "avocado", quantity: { amount: 1, unit: "pieces", ingredient: "avocado" } },
      { name: "spinach", quantity: { amount: 50, unit: "g", ingredient: "spinach" } }
    ],
    time: 25,
    steps: [
      "Cook quinoa as per instructions.",
      "Roast chickpeas with spices.",
      "Arrange quinoa, chickpeas, avocado, and spinach in a bowl.",
      "Drizzle with your favorite dressing."
    ]
  },
  {
    id: "wc4",
    name: "Chicken Tikka Masala",
    cuisine: "Indian",
    mood: "Spicy",
    allergens: ["dairy"],
    price: "$$$",
    ingredients: [
      { name: "chicken", quantity: { amount: 500, unit: "g", ingredient: "chicken" } },
      { name: "yogurt", quantity: { amount: 200, unit: "ml", ingredient: "yogurt" } },
      { name: "spices", quantity: { amount: 2, unit: "tbsp", ingredient: "spices" } },
      { name: "tomato", quantity: { amount: 400, unit: "g", ingredient: "tomato" } }
    ],
    time: 50,
    steps: [
      "Marinate chicken in yogurt and spices.",
      "Grill or sauté chicken until cooked.",
      "Simmer tomato sauce with spices, add chicken.",
      "Serve with rice or naan."
    ]
  },
  {
    id: "wc5",
    name: "Gluten-Free Pancakes",
    cuisine: "American",
    mood: "Breakfast",
    allergens: ["eggs"],
    price: "$",
    ingredients: [
      { name: "gluten-free flour", quantity: { amount: 200, unit: "g", ingredient: "gluten-free flour" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "milk", quantity: { amount: 300, unit: "ml", ingredient: "milk" } },
      { name: "baking powder", quantity: { amount: 2, unit: "tsp", ingredient: "baking powder" } }
    ],
    time: 20,
    steps: [
      "Mix all ingredients to form a batter.",
      "Heat a non-stick pan and pour batter.",
      "Cook until bubbles form, then flip.",
      "Serve warm with toppings of choice."
    ]
  },
  {
    id: "wc6",
    name: "Spaghetti Bolognese",
    cuisine: "Italian",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "spaghetti", quantity: { amount: 400, unit: "g", ingredient: "spaghetti" } },
      { name: "ground beef", quantity: { amount: 500, unit: "g", ingredient: "ground beef" } },
      { name: "tomato sauce", quantity: { amount: 400, unit: "ml", ingredient: "tomato sauce" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 3, unit: "cloves", ingredient: "garlic" } },
      { name: "carrot", quantity: { amount: 2, unit: "pieces", ingredient: "carrot" } },
      { name: "mixed herbs", quantity: { amount: 2, unit: "tsp", ingredient: "mixed herbs" } },
      { name: "parmesan", quantity: { amount: 50, unit: "g", ingredient: "parmesan" } }
    ],
    time: 45,
    steps: [
      "Cook spaghetti according to package instructions.",
      "Sauté onion and garlic, add ground beef and brown.",
      "Add tomato sauce, carrot, and mixed herbs, simmer.",
      "Serve sauce over spaghetti and top with parmesan."
    ]
  },
  {
    id: "wc7",
    name: "Sausage Pasta",
    cuisine: "Italian",
    mood: "Hearty",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "penne", quantity: { amount: 100, unit: "g", ingredient: "penne" } },
      { name: "sausage", quantity: { amount: 200, unit: "g", ingredient: "sausage" } },
      { name: "tomato", quantity: { amount: 100, unit: "g", ingredient: "tomato" } },
      { name: "cream", quantity: { amount: 50, unit: "ml", ingredient: "cream" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "parmesan", quantity: { amount: 30, unit: "g", ingredient: "parmesan" } }
    ],
    time: 35,
    steps: [
      "Cook penne according to package instructions.",
      "Sauté onion and sausage until browned.",
      "Add tomato and cream, simmer.",
      "Toss with penne and top with parmesan."
    ]
  },
  {
    id: "wc8",
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    mood: "Classic",
    allergens: ["gluten", "egg", "dairy"],
    price: "$$",
    ingredients: [
      { name: "spaghetti", quantity: { amount: 100, unit: "g", ingredient: "spaghetti" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "parmesan", quantity: { amount: 30, unit: "g", ingredient: "parmesan" } },
      { name: "pancetta", quantity: { amount: 50, unit: "g", ingredient: "pancetta" } },
      { name: "black pepper", quantity: { amount: 1, unit: "tsp", ingredient: "black pepper" } }
    ],
    time: 25,
    steps: [
      "Cook spaghetti and reserve some pasta water.",
      "Fry pancetta until crisp.",
      "Mix egg yolks and parmesan, combine with hot pasta and pancetta.",
      "Add pasta water as needed for creaminess, season with pepper."
    ]
  },
  {
    id: "wc9",
    name: "Donburi Bowl Chicken",
    cuisine: "Japanese",
    mood: "Savory",
    allergens: ["soy", "egg"],
    price: "$$",
    ingredients: [
      { name: "rice", quantity: { amount: 100, unit: "g", ingredient: "rice" } },
      { name: "chicken", quantity: { amount: 200, unit: "g", ingredient: "chicken" } },
      { name: "soy sauce", quantity: { amount: 50, unit: "ml", ingredient: "soy sauce" } },
      { name: "sriracha", quantity: { amount: 20, unit: "ml", ingredient: "sriracha" } },
      { name: "carrot", quantity: { amount: 1, unit: "pieces", ingredient: "carrot" } },
      { name: "cucumber", quantity: { amount: 1, unit: "pieces", ingredient: "cucumber" } }
    ],
    time: 30,
    steps: [
      "Cook rice and set aside.",
      "Peel and slice cucumber and carrot.",
      "Sauté chicken, add soy sauce and sriracha.",
      "Serve over rice with cucumber and carrot."
    ]
  },
  {
    id: "wc10",
    name: "Katsu Curry Rice Bowl",
    cuisine: "Japanese",
    mood: "Comfort",
    allergens: ["gluten", "egg"],
    price: "$$$",
    ingredients: [
      { name: "rice", quantity: { amount: 100, unit: "g", ingredient: "rice" } },
      { name: "chicken breast", quantity: { amount: 200, unit: "g", ingredient: "chicken breast" } },
      { name: "panko breadcrumbs", quantity: { amount: 30, unit: "g", ingredient: "panko breadcrumbs" } },
      { name: "egg", quantity: { amount: 1, unit: "eggs", ingredient: "egg" } },
      { name: "flour", quantity: { amount: 30, unit: "g", ingredient: "flour" } },
      { name: "curry roux", quantity: { amount: 50, unit: "g", ingredient: "curry roux" } },
      { name: "carrot", quantity: { amount: 1, unit: "pieces", ingredient: "carrot" } },
      { name: "potato", quantity: { amount: 1, unit: "pieces", ingredient: "potato" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } }
    ],
    time: 50,
    steps: [
      "Cook rice and set aside.",
      "Bread chicken with flour, egg, and panko, then fry until golden.",
      "Simmer carrot, potato, and onion with curry roux.",
      "Slice chicken and serve over rice with curry sauce."
    ]
  },
  {
    id: "wc11",
    name: "Reggae reggae nachos",
    cuisine: "Caribbean",
    mood: "Party",
    allergens: ["dairy", "gluten"],
    price: "$$",
    ingredients: [
      { name: "olive oil", quantity: { amount: 2, unit: "tbsp", ingredient: "olive oil" } },
      { name: "red onion", quantity: { amount: 1, unit: "pieces", ingredient: "red onion" } },
      { name: "Scotch bonnet chilli", quantity: { amount: 1, unit: "pieces", ingredient: "Scotch bonnet chilli" } },
      { name: "chopped tomato", quantity: { amount: 200, unit: "g", ingredient: "chopped tomato" } },
      { name: "tomato sauce", quantity: { amount: 100, unit: "ml", ingredient: "tomato sauce" } },
      { name: "allspice", quantity: { amount: 1, unit: "tsp", ingredient: "allspice" } },
      { name: "tortilla chips", quantity: { amount: 200, unit: "g", ingredient: "tortilla chips" } },
      { name: "jalapeno chilli", quantity: { amount: 2, unit: "pieces", ingredient: "jalapeno chilli" } },
      { name: "mozzarella", quantity: { amount: 150, unit: "g", ingredient: "mozzarella" } },
      { name: "coriander", quantity: { amount: 10, unit: "g", ingredient: "coriander" } },
      { name: "guacamole", quantity: { amount: 100, unit: "g", ingredient: "guacamole" } },
      { name: "soured cream", quantity: { amount: 100, unit: "ml", ingredient: "soured cream" } }
    ],
    time: 25,
    steps: [
      "Heat oven to 220C/200C fan/gas 7. Heat the oil in a frying pan, then soften the onion and chilli for a few mins.",
      "Stir in the tomatoes, tomato sauce and allspice. Bubble for 1 min, then remove from the heat.",
      "Take a large ovenproof dish or plate and pile on the tortilla chips. Cover with the tomato sauce, then sprinkle with the sliced jalapeños and mozzarella.",
      "Place in oven for about 15 mins until cheese is melted. Scatter with coriander. Serve with guacamole and soured cream on the side."
    ]
  },
  {
    id: "wc12",
    name: "Jerk chicken kebabs with mango salsa",
    cuisine: "Caribbean",
    mood: "Adventurous",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "jerk seasoning", quantity: { amount: 2, unit: "tbsp", ingredient: "jerk seasoning" } },
      { name: "olive oil", quantity: { amount: 3, unit: "tbsp", ingredient: "olive oil" } },
      { name: "lime juice", quantity: { amount: 30, unit: "ml", ingredient: "lime juice" } },
      { name: "chicken breasts", quantity: { amount: 400, unit: "g", ingredient: "chicken breasts" } },
      { name: "yellow pepper", quantity: { amount: 2, unit: "pieces", ingredient: "yellow pepper" } },
      { name: "rocket leaves", quantity: { amount: 50, unit: "g", ingredient: "rocket leaves" } },
      { name: "mango chunks", quantity: { amount: 200, unit: "g", ingredient: "mango chunks" } },
      { name: "red pepper", quantity: { amount: 1, unit: "pieces", ingredient: "red pepper" } },
      { name: "spring onions", quantity: { amount: 4, unit: "pieces", ingredient: "spring onions" } },
      { name: "red chilli", quantity: { amount: 1, unit: "pieces", ingredient: "red chilli" } }
    ],
    time: 35,
    steps: [
      "Mix together the jerk seasoning, olive oil and lime juice. Toss the chicken in it and leave to marinate in the fridge for at least 20 mins, or up to 24 hours.",
      "Make the salsa by mixing all the ingredients together with some seasoning – add a chopped red chilli if you like extra heat.",
      "Heat the grill or barbecue to Medium. Thread the chicken onto 8 metal skewers divided by the yellow peppers – aim for 3 of each per skewer.",
      "Cook for 8 mins each side until cooked through and lightly charred. Serve with the salsa and rocket leaves."
    ]
  },
  {
    id: "wc13",
    name: "Jerk chicken with rice & peas",
    cuisine: "Caribbean",
    mood: "Comfort",
    allergens: ["soy"],
    price: "$$",
    ingredients: [
      { name: "chicken thighs", quantity: { amount: 1200, unit: "g", ingredient: "chicken thighs" } },
      { name: "lime", quantity: { amount: 2, unit: "pieces", ingredient: "lime" } },
      { name: "hot sauce", quantity: { amount: 30, unit: "ml", ingredient: "hot sauce" } },
      { name: "spring onions", quantity: { amount: 6, unit: "pieces", ingredient: "spring onions" } },
      { name: "ginger", quantity: { amount: 20, unit: "g", ingredient: "ginger" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "scotch bonnet chillies", quantity: { amount: 3, unit: "pieces", ingredient: "scotch bonnet chillies" } },
      { name: "thyme", quantity: { amount: 2, unit: "tsp", ingredient: "thyme" } },
      { name: "soy sauce", quantity: { amount: 60, unit: "ml", ingredient: "soy sauce" } },
      { name: "vegetable oil", quantity: { amount: 60, unit: "ml", ingredient: "vegetable oil" } },
      { name: "brown sugar", quantity: { amount: 30, unit: "g", ingredient: "brown sugar" } },
      { name: "allspice", quantity: { amount: 2, unit: "tsp", ingredient: "allspice" } },
      { name: "basmati rice", quantity: { amount: 300, unit: "g", ingredient: "basmati rice" } },
      { name: "coconut milk", quantity: { amount: 400, unit: "ml", ingredient: "coconut milk" } },
      { name: "kidney beans", quantity: { amount: 400, unit: "g", ingredient: "kidney beans" } }
    ],
    time: 120,
    steps: [
      "To make the jerk marinade, combine the spring onions, ginger, garlic, onion, scotch bonnet chillies, dried thyme, lime juice, soy sauce, vegetable oil, brown sugar and ground allspice in a food processor along with 1 tsp salt, and blend to a purée.",
      "Taste the jerk mixture for seasoning – it should taste pretty salty, but not unpleasantly, puckering salty. You can now throw in more chillies if it's not spicy enough for you.",
      "Make a few slashes in 12 chicken thighs and pour the marinade over the meat, rubbing it into all the crevices. Cover and leave to marinate overnight in the fridge.",
      "To cook in the oven, heat to 180C/160C fan/gas 4. Put the chicken pieces in a roasting tin with the halved lime and cook for 45 mins until tender and cooked through.",
      "While the chicken is cooking, prepare the rice & peas. Rinse the basmati rice in plenty of cold water, then tip it into a large saucepan. Add the coconut milk, spring onions, thyme sprigs, garlic and ground allspice.",
      "Season with salt, add 300ml cold water and set over a high heat. Once the rice begins to boil, turn it down to a medium heat, cover and cook for 10 mins. Add the kidney beans to the rice, then cover with a lid. Leave off the heat for 5 mins until all the liquid is absorbed.",
      "Squeeze the roasted lime over the chicken and serve with the rice & peas, and some hot sauce if you like it really spicy."
    ]
  },
  {
    id: "wc14",
    name: "Rum punch",
    cuisine: "Caribbean",
    mood: "Celebration",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "orange juice", quantity: { amount: 500, unit: "ml", ingredient: "orange juice" } },
      { name: "lime juice", quantity: { amount: 100, unit: "ml", ingredient: "lime juice" } },
      { name: "golden rum", quantity: { amount: 300, unit: "ml", ingredient: "golden rum" } },
      { name: "sugar syrup", quantity: { amount: 100, unit: "ml", ingredient: "sugar syrup" } },
      { name: "grenadine syrup", quantity: { amount: 50, unit: "ml", ingredient: "grenadine syrup" } },
      { name: "bitters", quantity: { amount: 10, unit: "ml", ingredient: "bitters" } },
      { name: "ice cubes", quantity: { amount: 20, unit: "pieces", ingredient: "ice cubes" } },
      { name: "nutmeg", quantity: { amount: 1, unit: "tsp", ingredient: "nutmeg" } },
      { name: "orange slices", quantity: { amount: 4, unit: "pieces", ingredient: "orange slices" } },
      { name: "maraschino cherries", quantity: { amount: 8, unit: "pieces", ingredient: "maraschino cherries" } }
    ],
    time: 70,
    steps: [
      "Pour the juices, rum, sugar syrup, grenadine and bitters into a large jug and give it a good stir. Pop into the fridge to chill for 1 hr.",
      "Serve over ice cubes, sprinkle over the nutmeg and garnish with an orange slice and maraschino cherry, speared with a cocktail stick."
    ]
  },
  {
    id: "wc15",
    name: "Eton mess",
    cuisine: "British",
    mood: "Indulgent",
    allergens: ["eggs", "dairy"],
    price: "$",
    ingredients: [
      { name: "egg whites", quantity: { amount: 4, unit: "eggs", ingredient: "egg whites" } },
      { name: "caster sugar", quantity: { amount: 200, unit: "g", ingredient: "caster sugar" } },
      { name: "strawberries", quantity: { amount: 400, unit: "g", ingredient: "strawberries" } },
      { name: "double cream", quantity: { amount: 300, unit: "ml", ingredient: "double cream" } },
      { name: "icing sugar", quantity: { amount: 50, unit: "g", ingredient: "icing sugar" } }
    ],
    time: 90,
    steps: [
      "Heat oven to 120C/100C fan/gas 1 and line a large baking tray with parchment paper. Whisk the egg whites in a clean bowl using an electric whisk or tabletop mixer until they reach stiff peaks, then add the sugar in 3 lots, re-whisking to stiff peaks every time.",
      "Spoon dollops of the mixture onto the baking parchment, cook on the bottom shelf of the oven for 1hr – 1hr15 mins until the meringues are completely hard and come off the paper easily. Leave to cool.",
      "Blitz 1/3 of the strawberries to make a strawberry sauce. In a large bowl whisk the cream with the icing sugar until it just holds its shape.",
      "Roughly crush ¾ of the meringues and tip them in with the chopped strawberries and stir, then swirl through the strawberry sauce. Dollop into bowls then crush the remaining meringues, sprinkling the pieces over the top."
    ]
  },
  {
    id: "wc16",
    name: "Fancy Full English breakfast",
    cuisine: "British",
    mood: "Comfort",
    allergens: ["gluten", "eggs", "dairy"],
    price: "$$",
    ingredients: [
      { name: "bacon", quantity: { amount: 200, unit: "g", ingredient: "bacon" } },
      { name: "portabello mushrooms", quantity: { amount: 4, unit: "pieces", ingredient: "portabello mushrooms" } },
      { name: "cherry tomatoes", quantity: { amount: 200, unit: "g", ingredient: "cherry tomatoes" } },
      { name: "olive oil", quantity: { amount: 30, unit: "ml", ingredient: "olive oil" } },
      { name: "granary bread", quantity: { amount: 4, unit: "slices", ingredient: "granary bread" } },
      { name: "pork sausages", quantity: { amount: 4, unit: "pieces", ingredient: "pork sausages" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "cider vinegar", quantity: { amount: 15, unit: "ml", ingredient: "cider vinegar" } },
      { name: "orange juice", quantity: { amount: 200, unit: "ml", ingredient: "orange juice" } },
      { name: "blueberries", quantity: { amount: 100, unit: "g", ingredient: "blueberries" } }
    ],
    time: 25,
    steps: [
      "Lay the bacon, mushrooms and tomatoes on a foil-lined tray. Brush the tops of the mushrooms with 3 tsp of the oil and both sides of the bread with the remaining oil. Set aside. Heat the grill to very hot. Lay the sausages on a small foil-lined tray. Grill for about 10 mins until cooked, turning occasionally.",
      "Meanwhile, three-quarters fill a small pan, and a wide, deep sauté pan with water. Bring both to the boil. Lower an egg into the small pan and remove after 30 secs. Crack the egg into a cup. Add vinegar to the larger pan then, using a wire whisk, swirl the water around to create a whirlpool. Remove the whisk and slowly tip the egg into the centre of the whirlpool.",
      "When the water comes back to the boil, remove the pan from the heat, cover and leave for 3 mins, then remove the egg. Place in a bowl of warm water while you cook the other egg.",
      "Meanwhile heat a griddle pan to very hot. Place the tomatoes, bacon and mushrooms under the grill for 3-4 mins without turning. At the same time, lay the bread on the griddle pan, cook until crisp, about 1 min each side. Drain everything on kitchen paper.",
      "Remove the eggs with a slotted spoon and drain briefly on a cloth. Arrange everything on a plate and serve with the juice and fruit."
    ]
  },
  {
    id: "wc17",
    name: "Classic fish & chips",
    cuisine: "British",
    mood: "Comfort",
    allergens: ["gluten", "fish"],
    price: "$$",
    ingredients: [
      { name: "sunflower oil", quantity: { amount: 1000, unit: "ml", ingredient: "sunflower oil" } },
      { name: "fish fillets", quantity: { amount: 400, unit: "g", ingredient: "fish fillets" } },
      { name: "Maris Piper potatoes", quantity: { amount: 800, unit: "g", ingredient: "Maris Piper potatoes" } },
      { name: "malt vinegar", quantity: { amount: 15, unit: "ml", ingredient: "malt vinegar" } },
      { name: "self-raising flour", quantity: { amount: 150, unit: "g", ingredient: "self-raising flour" } },
      { name: "cornflour", quantity: { amount: 50, unit: "g", ingredient: "cornflour" } },
      { name: "turmeric", quantity: { amount: 1, unit: "tsp", ingredient: "turmeric" } },
      { name: "lager", quantity: { amount: 200, unit: "ml", ingredient: "lager" } },
      { name: "cornichons", quantity: { amount: 30, unit: "g", ingredient: "cornichons" } },
      { name: "capers", quantity: { amount: 20, unit: "g", ingredient: "capers" } },
      { name: "shallot", quantity: { amount: 1, unit: "pieces", ingredient: "shallot" } },
      { name: "parsley", quantity: { amount: 10, unit: "g", ingredient: "parsley" } },
      { name: "mayonnaise", quantity: { amount: 100, unit: "ml", ingredient: "mayonnaise" } }
    ],
    time: 45,
    steps: [
      "Cut the potatoes into chips and soak in cold water for 5 mins, then wash until the water runs clear. Tip into a pan of cold water with a pinch of salt and 1 tsp malt vinegar. Bring to a simmer, then turn down the heat and simmer gently for 10-12 mins until cooked through but not falling apart. Drain gently, then place on a tray in a single layer and chill until needed.",
      "To make the tartare sauce, chop the cornichons, capers and shallot, then combine with the parsley, mayo and a pinch of salt.",
      "When you're ready to fry, prepare the batter. Tip the flours and turmeric into a bowl with a pinch of salt, pour over the beer or fizzy water, and mix quickly until everything just comes together to the consistency of double cream – do not over-beat, a few lumps are fine. Keep chilled.",
      "Pour the oil into a deep, wide pan like a wok, or heat a deep-fat fryer to 180C. Heat the oil until it is shimmering and carefully lower in the chips using a slotted spoon. Fry for 8-10 mins, gently stirring occasionally until golden and crisp. Transfer to kitchen paper to drain.",
      "Put a little flour in a dish, then bring the oil you used to cook the chips up to 185C. Working quickly, dust the fish in flour, then dredge through the batter. Hold the fillet above the batter to let the excess drip back into the bowl, then carefully lower into the oil. Fry the fillets for a minute until the batter is just starting to set, then take a spoon and drizzle the fillets with extra batter to create an even crunchier, wispy coating. Fry the fish for about 4 mins, turning once, until deep golden and crisp. Lift onto some kitchen paper to drain for a minute, then serve with the chips, tartare sauce, and plenty of salt and vinegar."
    ]
  },
  {
    id: "wc18",
    name: "American pancakes",
    cuisine: "American",
    mood: "Comfort",
    allergens: ["gluten", "eggs", "dairy"],
    price: "$",
    ingredients: [
      { name: "self-raising flour", quantity: { amount: 200, unit: "g", ingredient: "self-raising flour" } },
      { name: "baking powder", quantity: { amount: 1.5, unit: "tsp", ingredient: "baking powder" } },
      { name: "golden caster sugar", quantity: { amount: 15, unit: "g", ingredient: "golden caster sugar" } },
      { name: "eggs", quantity: { amount: 3, unit: "eggs", ingredient: "eggs" } },
      { name: "melted butter", quantity: { amount: 25, unit: "g", ingredient: "melted butter" } },
      { name: "milk", quantity: { amount: 200, unit: "ml", ingredient: "milk" } },
      { name: "vegetable oil", quantity: { amount: 5, unit: "ml", ingredient: "vegetable oil" } },
      { name: "maple syrup", quantity: { amount: 60, unit: "ml", ingredient: "maple syrup" } }
    ],
    time: 20,
    steps: [
      "Mix 200g self-raising flour, 1 ½ tsp baking powder, 1 tbsp golden caster sugar and a pinch of salt together in a large bowl.",
      "Create a well in the centre with the back of your spoon then add 3 large eggs, 25g melted butter and 200ml milk.",
      "Whisk together either with a balloon whisk or electric hand beaters until smooth then pour into a jug.",
      "Heat a small knob of butter and 1 tsp of oil in a large, non-stick frying pan over a medium heat. When the butter looks frothy, pour in rounds of the batter, approximately 8cm wide. Make sure you don't put the pancakes too close together as they will spread during cooking. Cook the pancakes on one side for about 1-2 mins or until lots of tiny bubbles start to appear and pop on the surface. Flip the pancakes over and cook for a further minute on the other side. Repeat until all the batter is used up.",
      "Serve your pancakes stacked up on a plate with a drizzle of maple syrup and any of your favourite toppings."
    ]
  },
  {
    id: "wc19",
    name: "Cajun chicken burgers",
    cuisine: "American",
    mood: "Adventurous",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "chicken breasts", quantity: { amount: 400, unit: "g", ingredient: "chicken breasts" } },
      { name: "olive oil", quantity: { amount: 30, unit: "ml", ingredient: "olive oil" } },
      { name: "smoked bacon", quantity: { amount: 200, unit: "g", ingredient: "smoked bacon" } },
      { name: "avocados", quantity: { amount: 2, unit: "pieces", ingredient: "avocados" } },
      { name: "ciabatta rolls", quantity: { amount: 4, unit: "pieces", ingredient: "ciabatta rolls" } },
      { name: "cheese", quantity: { amount: 100, unit: "g", ingredient: "cheese" } },
      { name: "baby spinach", quantity: { amount: 50, unit: "g", ingredient: "baby spinach" } },
      { name: "mayonnaise", quantity: { amount: 60, unit: "ml", ingredient: "mayonnaise" } },
      { name: "ground cumin", quantity: { amount: 1, unit: "tsp", ingredient: "ground cumin" } },
      { name: "ground coriander", quantity: { amount: 1, unit: "tsp", ingredient: "ground coriander" } },
      { name: "paprika", quantity: { amount: 1, unit: "tsp", ingredient: "paprika" } }
    ],
    time: 25,
    steps: [
      "Mix the seasoning ingredients together with a good grinding of black pepper and a sprinkling of salt, then set aside in a large dish. Heat grill to high. On a board, flatten out the chicken slightly, then drizzle half the oil over and toss in the seasoning until completely coated. Heat the remaining oil in a large frying pan, sizzle the chicken for 5 mins on each side until firm, push to one side of the pan, then fry the bacon for a few mins until cooked.",
      "While the chicken is cooking, halve, stone, peel and slice the avocados, and toast the cut sides of the buns. Cover the tops of the buns with cheese, then grill until melted.",
      "To assemble the burgers, spread the buns with mayonnaise if you want, top with a handful of spinach, then a rasher of bacon. To keep the avocado in place, slice the chicken, then alternate between a slice of chicken and avocado. Top with the bun, press down lightly and serve."
    ]
  },
  {
    id: "wc20",
    name: "Truffled mac 'n' cheese",
    cuisine: "American",
    mood: "Indulgent",
    allergens: ["gluten", "dairy"],
    price: "$$$",
    ingredients: [
      { name: "macaroni", quantity: { amount: 300, unit: "g", ingredient: "macaroni" } },
      { name: "whole milk", quantity: { amount: 500, unit: "ml", ingredient: "whole milk" } },
      { name: "bay leaves", quantity: { amount: 2, unit: "pieces", ingredient: "bay leaves" } },
      { name: "butter", quantity: { amount: 50, unit: "g", ingredient: "butter" } },
      { name: "plain flour", quantity: { amount: 50, unit: "g", ingredient: "plain flour" } },
      { name: "Dijon mustard", quantity: { amount: 15, unit: "ml", ingredient: "Dijon mustard" } },
      { name: "thyme leaves", quantity: { amount: 5, unit: "g", ingredient: "thyme leaves" } },
      { name: "truffle paste", quantity: { amount: 20, unit: "g", ingredient: "truffle paste" } },
      { name: "porcini powder", quantity: { amount: 10, unit: "g", ingredient: "porcini powder" } },
      { name: "taleggio cheese", quantity: { amount: 100, unit: "g", ingredient: "taleggio cheese" } },
      { name: "mozzarella", quantity: { amount: 100, unit: "g", ingredient: "mozzarella" } },
      { name: "mature cheddar", quantity: { amount: 100, unit: "g", ingredient: "mature cheddar" } },
      { name: "breadcrumbs", quantity: { amount: 50, unit: "g", ingredient: "breadcrumbs" } },
      { name: "parmesan", quantity: { amount: 50, unit: "g", ingredient: "parmesan" } }
    ],
    time: 50,
    steps: [
      "Cook the macaroni following pack instructions until al dente. Drain, rinse with cold water and set aside to cool.",
      "Tip the milk and bay leaves into a pan and bring to a simmer. Remove from the heat. Melt the butter in a large non-stick saucepan, then stir in the flour to make a thick paste, continuing to stir for 3-4 mins. Remove and discard the bay leaves from the milk, then gradually pour it into the flour and butter mix, continuously stirring to keep the sauce smooth. Add the mustard, thyme, truffle paste and porcini powder, then stir in the taleggio cheese and mozzarella until melted slightly. Remove from the heat, tip in the macaroni and stir to coat. Scrape into an ovenproof dish.",
      "Heat the oven to 200C/180C fan/gas 6. Sprinkle over the cheddar, breadcrumbs and parmesan, and bake for 20 mins until golden. For a crispy top, grill for 5 mins or until just golden. Serve straightaway."
    ]
  },
  {
    id: "wc21",
    name: "Sloppy joes",
    cuisine: "American",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$",
    ingredients: [
      { name: "vegetable oil", quantity: { amount: 15, unit: "ml", ingredient: "vegetable oil" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "red peppers", quantity: { amount: 2, unit: "pieces", ingredient: "red peppers" } },
      { name: "minced beef", quantity: { amount: 500, unit: "g", ingredient: "minced beef" } },
      { name: "chopped tomatoes", quantity: { amount: 400, unit: "g", ingredient: "chopped tomatoes" } },
      { name: "Nando's PERi-BBQ sauce", quantity: { amount: 100, unit: "ml", ingredient: "Nando's PERi-BBQ sauce" } },
      { name: "cheese slices", quantity: { amount: 4, unit: "pieces", ingredient: "cheese slices" } },
      { name: "burger buns", quantity: { amount: 4, unit: "pieces", ingredient: "burger buns" } },
      { name: "crispy onions", quantity: { amount: 50, unit: "g", ingredient: "crispy onions" } },
      { name: "iceberg lettuce", quantity: { amount: 100, unit: "g", ingredient: "iceberg lettuce" } }
    ],
    time: 35,
    steps: [
      "Heat the oil in a deep frying pan, and tip in the mince, breaking it up with a wooden spoon as you go, until browned all over. Stir in the onion and pepper and cook for 8-10 mins until softened. Tip in the tomatoes and Nando's PERi-BBQ sauce, and season. Simmer for 20-25 mins until the sauce has thickened.",
      "Put the cheese slices on top of the mince and cover with a lid for 2 mins to let it melt into the sauce. Pile into the buns with the crispy onions, and lettuce on the side for scooping up the extra sauce."
    ]
  },
  {
    id: "wc22",
    name: "One-pot chicken & rice",
    cuisine: "British",
    mood: "Healthy",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "smoked paprika", quantity: { amount: 2, unit: "tsp", ingredient: "smoked paprika" } },
      { name: "ground coriander", quantity: { amount: 2, unit: "tsp", ingredient: "ground coriander" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "rapeseed oil", quantity: { amount: 15, unit: "ml", ingredient: "rapeseed oil" } },
      { name: "chicken thighs", quantity: { amount: 600, unit: "g", ingredient: "chicken thighs" } },
      { name: "vegetable bouillon", quantity: { amount: 500, unit: "ml", ingredient: "vegetable bouillon" } },
      { name: "brown rice", quantity: { amount: 200, unit: "g", ingredient: "brown rice" } },
      { name: "leeks", quantity: { amount: 2, unit: "pieces", ingredient: "leeks" } },
      { name: "oregano", quantity: { amount: 2, unit: "tsp", ingredient: "oregano" } },
      { name: "bay leaves", quantity: { amount: 2, unit: "pieces", ingredient: "bay leaves" } },
      { name: "mixed frozen vegetables", quantity: { amount: 200, unit: "g", ingredient: "mixed frozen vegetables" } }
    ],
    time: 45,
    steps: [
      "Put the spices, garlic and oil in a large bowl and mix well. Add the chicken and turn in the mixture until well coated. Heat a large non-stick pan that has a lid, then fry the chicken, uncovered (without extra oil) over a medium-high heat for 5 mins until browned, turning the chicken halfway to brown on both sides. Remove from the pan and set aside on a plate.",
      "Pour the bouillon into the pan, stirring well to incorporate any garlicky bits that may have stuck to the base of the pan, then stir in the rice, leeks, oregano or thyme and bay, if using. Lay the chicken on top, then cover the pan and bring to the boil. Turn down the heat and simmer for 20 mins.",
      "Stir in the frozen vegetables, then cover and simmer for about 5 mins to heat through. Leave to stand for about 5-10 mins, then lightly mix and serve."
    ]
  },
  {
    id: "wc23",
    name: "Vegan burrito bowl",
    cuisine: "Mexican",
    mood: "Healthy",
    allergens: [],
    price: "$",
    ingredients: [
      { name: "brown rice", quantity: { amount: 200, unit: "g", ingredient: "brown rice" } },
      { name: "tomato purée", quantity: { amount: 30, unit: "g", ingredient: "tomato purée" } },
      { name: "cumin seeds", quantity: { amount: 1, unit: "tsp", ingredient: "cumin seeds" } },
      { name: "hot chilli powder", quantity: { amount: 1, unit: "tsp", ingredient: "hot chilli powder" } },
      { name: "vegetable bouillon powder", quantity: { amount: 10, unit: "g", ingredient: "vegetable bouillon powder" } },
      { name: "black beans", quantity: { amount: 400, unit: "g", ingredient: "black beans" } },
      { name: "tomatoes", quantity: { amount: 200, unit: "g", ingredient: "tomatoes" } },
      { name: "red onion", quantity: { amount: 1, unit: "pieces", ingredient: "red onion" } },
      { name: "coriander", quantity: { amount: 20, unit: "g", ingredient: "coriander" } },
      { name: "limes", quantity: { amount: 2, unit: "pieces", ingredient: "limes" } },
      { name: "avocados", quantity: { amount: 2, unit: "pieces", ingredient: "avocados" } },
      { name: "sweetcorn", quantity: { amount: 200, unit: "g", ingredient: "sweetcorn" } }
    ],
    time: 30,
    steps: [
      "Tip the rice and 600ml water into a pan, then stir in the tomato purée, cumin, chilli and bouillon powder. Cover and cook over a low heat for 20 mins until the rice is tender, and it has absorbed the liquid. Remove from the heat and stir in the black beans.",
      "Meanwhile, mix the tomatoes with the red onion, coriander and the juice of 1 lime to make a salsa. Roughly mash the remaining lime juice with the avocados to create a chunky texture.",
      "Spoon the rice into four bowls or rigid containers. Top with the tomato salsa, avocado and corn. The rice will keep for up to two days – just make the toppings fresh on the day."
    ]
  },
  {
    id: "wc24",
    name: "Vegan pho",
    cuisine: "Vietnamese",
    mood: "Healthy",
    allergens: ["peanuts", "soy"],
    price: "$",
    ingredients: [
      { name: "rice noodles", quantity: { amount: 200, unit: "g", ingredient: "rice noodles" } },
      { name: "Marmite", quantity: { amount: 10, unit: "g", ingredient: "Marmite" } },
      { name: "vegetable oil", quantity: { amount: 15, unit: "ml", ingredient: "vegetable oil" } },
      { name: "chestnut mushrooms", quantity: { amount: 200, unit: "g", ingredient: "chestnut mushrooms" } },
      { name: "leek", quantity: { amount: 1, unit: "pieces", ingredient: "leek" } },
      { name: "soy sauce", quantity: { amount: 30, unit: "ml", ingredient: "soy sauce" } },
      { name: "red chilli", quantity: { amount: 1, unit: "pieces", ingredient: "red chilli" } },
      { name: "mint leaves", quantity: { amount: 10, unit: "g", ingredient: "mint leaves" } },
      { name: "salted peanuts", quantity: { amount: 30, unit: "g", ingredient: "salted peanuts" } },
      { name: "sriracha", quantity: { amount: 15, unit: "ml", ingredient: "sriracha" } }
    ],
    time: 25,
    steps: [
      "Tip the noodles into a bowl and cover with boiling water. Leave to stand for 10 mins, then drain, rinse in cold water and set aside.",
      "In a jug, mix the Marmite with 500ml boiling water. Set aside while you cook the vegetables.",
      "Heat the oil in a saucepan, then add the mushrooms and leek. Cook for 10-15 mins until softened and beginning to colour, then add the soy sauce and Marmite and water mixture and stir. Bring to the boil for 5 mins.",
      "Divide the noodles between two deep bowls, then ladle over the hot broth. Top with the chilli slices, mint leaves and peanuts, and serve with some sriracha on the side."
    ]
  }
]; 