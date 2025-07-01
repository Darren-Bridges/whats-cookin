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
  },
  {
    id: "wc25",
    name: "Korean Bibimbap",
    cuisine: "Korean",
    mood: "Healthy",
    allergens: ["soy", "sesame"],
    price: "$$",
    ingredients: [
      { name: "short-grain rice", quantity: { amount: 200, unit: "g", ingredient: "short-grain rice" } },
      { name: "spinach", quantity: { amount: 100, unit: "g", ingredient: "spinach" } },
      { name: "carrots", quantity: { amount: 2, unit: "pieces", ingredient: "carrots" } },
      { name: "cucumber", quantity: { amount: 1, unit: "pieces", ingredient: "cucumber" } },
      { name: "bean sprouts", quantity: { amount: 100, unit: "g", ingredient: "bean sprouts" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "gochujang", quantity: { amount: 30, unit: "g", ingredient: "gochujang" } },
      { name: "sesame oil", quantity: { amount: 15, unit: "ml", ingredient: "sesame oil" } },
      { name: "soy sauce", quantity: { amount: 30, unit: "ml", ingredient: "soy sauce" } }
    ],
    time: 40,
    steps: [
      "Cook rice according to package instructions.",
      "Blanch spinach and season with sesame oil and soy sauce.",
      "Julienne carrots and cucumber, sauté carrots until tender.",
      "Fry eggs sunny-side up.",
      "Arrange all vegetables and egg over rice, serve with gochujang."
    ]
  },
  {
    id: "wc26",
    name: "Coq au Vin",
    cuisine: "French",
    mood: "Classic",
    allergens: ["dairy"],
    price: "$$$",
    ingredients: [
      { name: "chicken thighs", quantity: { amount: 800, unit: "g", ingredient: "chicken thighs" } },
      { name: "red wine", quantity: { amount: 500, unit: "ml", ingredient: "red wine" } },
      { name: "bacon", quantity: { amount: 150, unit: "g", ingredient: "bacon" } },
      { name: "mushrooms", quantity: { amount: 300, unit: "g", ingredient: "mushrooms" } },
      { name: "pearl onions", quantity: { amount: 200, unit: "g", ingredient: "pearl onions" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "butter", quantity: { amount: 30, unit: "g", ingredient: "butter" } },
      { name: "flour", quantity: { amount: 30, unit: "g", ingredient: "flour" } },
      { name: "thyme", quantity: { amount: 2, unit: "tsp", ingredient: "thyme" } }
    ],
    time: 90,
    steps: [
      "Marinate chicken in red wine with herbs for 2 hours.",
      "Brown chicken and bacon in butter.",
      "Add mushrooms, onions, and garlic, cook until softened.",
      "Add wine marinade and simmer for 1 hour.",
      "Thicken with flour and butter mixture, serve hot."
    ]
  },
  {
    id: "wc27",
    name: "Moussaka",
    cuisine: "Greek",
    mood: "Indulgent",
    allergens: ["dairy", "eggs", "gluten"],
    price: "$$$",
    ingredients: [
      { name: "eggplant", quantity: { amount: 2, unit: "pieces", ingredient: "eggplant" } },
      { name: "ground lamb", quantity: { amount: 500, unit: "g", ingredient: "ground lamb" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "tomato sauce", quantity: { amount: 400, unit: "ml", ingredient: "tomato sauce" } },
      { name: "cinnamon", quantity: { amount: 1, unit: "tsp", ingredient: "cinnamon" } },
      { name: "butter", quantity: { amount: 50, unit: "g", ingredient: "butter" } },
      { name: "flour", quantity: { amount: 50, unit: "g", ingredient: "flour" } },
      { name: "milk", quantity: { amount: 500, unit: "ml", ingredient: "milk" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } }
    ],
    time: 120,
    steps: [
      "Slice and salt eggplant, let sit for 30 minutes.",
      "Brown lamb with onion and spices, add tomato sauce.",
      "Make béchamel sauce with butter, flour, milk, and eggs.",
      "Layer eggplant, meat sauce, and béchamel in baking dish.",
      "Bake at 180°C for 45 minutes until golden."
    ]
  },
  {
    id: "wc28",
    name: "Mexican Street Tacos",
    cuisine: "Mexican",
    mood: "Party",
    allergens: ["gluten"],
    price: "$",
    ingredients: [
      { name: "corn tortillas", quantity: { amount: 12, unit: "pieces", ingredient: "corn tortillas" } },
      { name: "pork shoulder", quantity: { amount: 600, unit: "g", ingredient: "pork shoulder" } },
      { name: "lime", quantity: { amount: 3, unit: "pieces", ingredient: "lime" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "cilantro", quantity: { amount: 30, unit: "g", ingredient: "cilantro" } },
      { name: "salsa verde", quantity: { amount: 100, unit: "ml", ingredient: "salsa verde" } },
      { name: "chili powder", quantity: { amount: 2, unit: "tsp", ingredient: "chili powder" } },
      { name: "cumin", quantity: { amount: 1, unit: "tsp", ingredient: "cumin" } }
    ],
    time: 180,
    steps: [
      "Season pork with spices and slow cook for 3 hours.",
      "Shred pork and mix with lime juice.",
      "Warm tortillas on griddle.",
      "Fill with pork, onion, cilantro, and salsa.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "wc29",
    name: "Turkish Kebabs",
    cuisine: "Turkish",
    mood: "Adventurous",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "lamb mince", quantity: { amount: 500, unit: "g", ingredient: "lamb mince" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "parsley", quantity: { amount: 20, unit: "g", ingredient: "parsley" } },
      { name: "cumin", quantity: { amount: 1, unit: "tsp", ingredient: "cumin" } },
      { name: "sumac", quantity: { amount: 1, unit: "tsp", ingredient: "sumac" } },
      { name: "yogurt", quantity: { amount: 200, unit: "ml", ingredient: "yogurt" } },
      { name: "cucumber", quantity: { amount: 1, unit: "pieces", ingredient: "cucumber" } },
      { name: "mint", quantity: { amount: 10, unit: "g", ingredient: "mint" } },
      { name: "pita bread", quantity: { amount: 4, unit: "pieces", ingredient: "pita bread" } }
    ],
    time: 35,
    steps: [
      "Mix lamb with onion, parsley, and spices.",
      "Form into kebab shapes and grill for 8-10 minutes.",
      "Make tzatziki with yogurt, cucumber, and mint.",
      "Warm pita bread.",
      "Serve kebabs in pita with tzatziki."
    ]
  },
  {
    id: "wc30",
    name: "Schnitzel",
    cuisine: "German",
    mood: "Hearty",
    allergens: ["gluten", "eggs"],
    price: "$$",
    ingredients: [
      { name: "pork cutlets", quantity: { amount: 400, unit: "g", ingredient: "pork cutlets" } },
      { name: "flour", quantity: { amount: 100, unit: "g", ingredient: "flour" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "breadcrumbs", quantity: { amount: 150, unit: "g", ingredient: "breadcrumbs" } },
      { name: "lemon", quantity: { amount: 1, unit: "pieces", ingredient: "lemon" } },
      { name: "parsley", quantity: { amount: 15, unit: "g", ingredient: "parsley" } },
      { name: "potatoes", quantity: { amount: 400, unit: "g", ingredient: "potatoes" } },
      { name: "vegetable oil", quantity: { amount: 100, unit: "ml", ingredient: "vegetable oil" } }
    ],
    time: 45,
    steps: [
      "Pound pork cutlets thin between plastic wrap.",
      "Dredge in flour, dip in beaten eggs, coat with breadcrumbs.",
      "Fry in hot oil until golden brown.",
      "Boil potatoes and mash with butter.",
      "Serve schnitzel with potatoes and lemon wedges."
    ]
  },
  {
    id: "wc31",
    name: "Chinese Dim Sum",
    cuisine: "Chinese",
    mood: "Celebration",
    allergens: ["gluten", "shrimp"],
    price: "$$$",
    ingredients: [
      { name: "shrimp", quantity: { amount: 300, unit: "g", ingredient: "shrimp" } },
      { name: "pork mince", quantity: { amount: 200, unit: "g", ingredient: "pork mince" } },
      { name: "wonton wrappers", quantity: { amount: 24, unit: "pieces", ingredient: "wonton wrappers" } },
      { name: "ginger", quantity: { amount: 20, unit: "g", ingredient: "ginger" } },
      { name: "soy sauce", quantity: { amount: 30, unit: "ml", ingredient: "soy sauce" } },
      { name: "sesame oil", quantity: { amount: 15, unit: "ml", ingredient: "sesame oil" } },
      { name: "green onions", quantity: { amount: 4, unit: "pieces", ingredient: "green onions" } },
      { name: "chili sauce", quantity: { amount: 30, unit: "ml", ingredient: "chili sauce" } }
    ],
    time: 60,
    steps: [
      "Mix shrimp, pork, ginger, and seasonings.",
      "Fill wonton wrappers and fold into dumplings.",
      "Steam dumplings for 8-10 minutes.",
      "Make dipping sauce with soy sauce and chili.",
      "Serve hot with dipping sauce."
    ]
  },
  {
    id: "wc32",
    name: "Paella",
    cuisine: "Spanish",
    mood: "Party",
    allergens: ["shellfish", "fish"],
    price: "$$$",
    ingredients: [
      { name: "arborio rice", quantity: { amount: 300, unit: "g", ingredient: "arborio rice" } },
      { name: "shrimp", quantity: { amount: 200, unit: "g", ingredient: "shrimp" } },
      { name: "mussels", quantity: { amount: 300, unit: "g", ingredient: "mussels" } },
      { name: "chicken", quantity: { amount: 300, unit: "g", ingredient: "chicken" } },
      { name: "saffron", quantity: { amount: 1, unit: "tsp", ingredient: "saffron" } },
      { name: "bell peppers", quantity: { amount: 2, unit: "pieces", ingredient: "bell peppers" } },
      { name: "tomatoes", quantity: { amount: 200, unit: "g", ingredient: "tomatoes" } },
      { name: "chicken stock", quantity: { amount: 1000, unit: "ml", ingredient: "chicken stock" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } }
    ],
    time: 50,
    steps: [
      "Sauté chicken in olive oil until browned.",
      "Add rice and saffron, stir to coat.",
      "Add stock and simmer for 15 minutes.",
      "Add seafood and vegetables.",
      "Cook until rice is tender and seafood is done."
    ]
  },
  {
    id: "wc33",
    name: "Vietnamese Banh Mi",
    cuisine: "Vietnamese",
    mood: "Savory",
    allergens: ["gluten", "soy"],
    price: "$",
    ingredients: [
      { name: "baguette", quantity: { amount: 2, unit: "pieces", ingredient: "baguette" } },
      { name: "pork belly", quantity: { amount: 300, unit: "g", ingredient: "pork belly" } },
      { name: "carrots", quantity: { amount: 2, unit: "pieces", ingredient: "carrots" } },
      { name: "daikon", quantity: { amount: 1, unit: "pieces", ingredient: "daikon" } },
      { name: "cilantro", quantity: { amount: 20, unit: "g", ingredient: "cilantro" } },
      { name: "fish sauce", quantity: { amount: 30, unit: "ml", ingredient: "fish sauce" } },
      { name: "vinegar", quantity: { amount: 60, unit: "ml", ingredient: "vinegar" } },
      { name: "sugar", quantity: { amount: 30, unit: "g", ingredient: "sugar" } },
      { name: "mayonnaise", quantity: { amount: 60, unit: "ml", ingredient: "mayonnaise" } }
    ],
    time: 40,
    steps: [
      "Marinate pork belly in fish sauce and sugar.",
      "Pickle carrots and daikon in vinegar and sugar.",
      "Grill pork until crispy.",
      "Toast baguette and spread with mayonnaise.",
      "Fill with pork, pickled vegetables, and cilantro."
    ]
  },
  {
    id: "wc34",
    name: "Shepherd's Pie",
    cuisine: "Irish",
    mood: "Comfort",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "lamb mince", quantity: { amount: 500, unit: "g", ingredient: "lamb mince" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "carrots", quantity: { amount: 3, unit: "pieces", ingredient: "carrots" } },
      { name: "potatoes", quantity: { amount: 600, unit: "g", ingredient: "potatoes" } },
      { name: "beef stock", quantity: { amount: 300, unit: "ml", ingredient: "beef stock" } },
      { name: "butter", quantity: { amount: 50, unit: "g", ingredient: "butter" } },
      { name: "milk", quantity: { amount: 100, unit: "ml", ingredient: "milk" } },
      { name: "worcestershire sauce", quantity: { amount: 15, unit: "ml", ingredient: "worcestershire sauce" } },
      { name: "thyme", quantity: { amount: 2, unit: "tsp", ingredient: "thyme" } }
    ],
    time: 80,
    steps: [
      "Brown lamb with onion and carrots.",
      "Add stock and simmer for 30 minutes.",
      "Boil and mash potatoes with butter and milk.",
      "Layer meat mixture in baking dish.",
      "Top with mashed potatoes and bake for 30 minutes."
    ]
  },
  {
    id: "wc35",
    name: "Middle Eastern Falafel",
    cuisine: "Middle Eastern",
    mood: "Healthy",
    allergens: ["sesame"],
    price: "$",
    ingredients: [
      { name: "chickpeas", quantity: { amount: 400, unit: "g", ingredient: "chickpeas" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "parsley", quantity: { amount: 30, unit: "g", ingredient: "parsley" } },
      { name: "cumin", quantity: { amount: 2, unit: "tsp", ingredient: "cumin" } },
      { name: "coriander", quantity: { amount: 2, unit: "tsp", ingredient: "coriander" } },
      { name: "tahini", quantity: { amount: 60, unit: "ml", ingredient: "tahini" } },
      { name: "lemon juice", quantity: { amount: 30, unit: "ml", ingredient: "lemon juice" } },
      { name: "pita bread", quantity: { amount: 4, unit: "pieces", ingredient: "pita bread" } }
    ],
    time: 45,
    steps: [
      "Soak chickpeas overnight, drain and rinse.",
      "Blend chickpeas with onion, garlic, herbs, and spices.",
      "Form into balls and chill for 30 minutes.",
      "Fry falafel until golden brown.",
      "Serve in pita with tahini sauce and vegetables."
    ]
  },
  {
    id: "wc36",
    name: "Salmon Gravlax",
    cuisine: "Nordic",
    mood: "Celebration",
    allergens: ["fish"],
    price: "$$$",
    ingredients: [
      { name: "salmon fillet", quantity: { amount: 500, unit: "g", ingredient: "salmon fillet" } },
      { name: "salt", quantity: { amount: 100, unit: "g", ingredient: "salt" } },
      { name: "sugar", quantity: { amount: 100, unit: "g", ingredient: "sugar" } },
      { name: "dill", quantity: { amount: 50, unit: "g", ingredient: "dill" } },
      { name: "black pepper", quantity: { amount: 2, unit: "tsp", ingredient: "black pepper" } },
      { name: "rye bread", quantity: { amount: 8, unit: "slices", ingredient: "rye bread" } },
      { name: "mustard sauce", quantity: { amount: 100, unit: "ml", ingredient: "mustard sauce" } },
      { name: "cucumber", quantity: { amount: 1, unit: "pieces", ingredient: "cucumber" } }
    ],
    time: 2880,
    steps: [
      "Mix salt, sugar, and pepper.",
      "Coat salmon with mixture and dill.",
      "Wrap in plastic and refrigerate for 48 hours.",
      "Slice thinly and serve on rye bread.",
      "Garnish with mustard sauce and cucumber."
    ]
  },
  {
    id: "wc37",
    name: "Southern Fried Chicken",
    cuisine: "Southern",
    mood: "Comfort",
    allergens: ["gluten", "eggs"],
    price: "$$",
    ingredients: [
      { name: "chicken pieces", quantity: { amount: 1000, unit: "g", ingredient: "chicken pieces" } },
      { name: "buttermilk", quantity: { amount: 500, unit: "ml", ingredient: "buttermilk" } },
      { name: "flour", quantity: { amount: 200, unit: "g", ingredient: "flour" } },
      { name: "cornmeal", quantity: { amount: 100, unit: "g", ingredient: "cornmeal" } },
      { name: "paprika", quantity: { amount: 2, unit: "tsp", ingredient: "paprika" } },
      { name: "garlic powder", quantity: { amount: 2, unit: "tsp", ingredient: "garlic powder" } },
      { name: "vegetable oil", quantity: { amount: 500, unit: "ml", ingredient: "vegetable oil" } },
      { name: "hot sauce", quantity: { amount: 30, unit: "ml", ingredient: "hot sauce" } }
    ],
    time: 60,
    steps: [
      "Marinate chicken in buttermilk and hot sauce for 4 hours.",
      "Mix flour, cornmeal, and spices.",
      "Dredge chicken in flour mixture.",
      "Fry in hot oil until golden and cooked through.",
      "Drain on paper towels and serve hot."
    ]
  },
  {
    id: "wc38",
    name: "Cajun Jambalaya",
    cuisine: "Cajun",
    mood: "Spicy",
    allergens: ["shellfish"],
    price: "$$",
    ingredients: [
      { name: "long-grain rice", quantity: { amount: 300, unit: "g", ingredient: "long-grain rice" } },
      { name: "chicken", quantity: { amount: 400, unit: "g", ingredient: "chicken" } },
      { name: "shrimp", quantity: { amount: 300, unit: "g", ingredient: "shrimp" } },
      { name: "andouille sausage", quantity: { amount: 200, unit: "g", ingredient: "andouille sausage" } },
      { name: "bell peppers", quantity: { amount: 2, unit: "pieces", ingredient: "bell peppers" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "celery", quantity: { amount: 3, unit: "pieces", ingredient: "celery" } },
      { name: "cajun seasoning", quantity: { amount: 2, unit: "tbsp", ingredient: "cajun seasoning" } },
      { name: "chicken stock", quantity: { amount: 750, unit: "ml", ingredient: "chicken stock" } }
    ],
    time: 55,
    steps: [
      "Sauté chicken and sausage until browned.",
      "Add vegetables and cook until softened.",
      "Add rice, stock, and cajun seasoning.",
      "Simmer for 20 minutes, add shrimp.",
      "Cook until rice is tender and shrimp is pink."
    ]
  },
  {
    id: "wc39",
    name: "Matzo Ball Soup",
    cuisine: "Jewish",
    mood: "Comfort",
    allergens: ["eggs", "gluten"],
    price: "$$",
    ingredients: [
      { name: "chicken", quantity: { amount: 1000, unit: "g", ingredient: "chicken" } },
      { name: "carrots", quantity: { amount: 4, unit: "pieces", ingredient: "carrots" } },
      { name: "celery", quantity: { amount: 4, unit: "pieces", ingredient: "celery" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "matzo meal", quantity: { amount: 100, unit: "g", ingredient: "matzo meal" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "chicken fat", quantity: { amount: 30, unit: "ml", ingredient: "chicken fat" } },
      { name: "dill", quantity: { amount: 20, unit: "g", ingredient: "dill" } },
      { name: "noodles", quantity: { amount: 200, unit: "g", ingredient: "noodles" } }
    ],
    time: 120,
    steps: [
      "Simmer chicken with vegetables for 2 hours.",
      "Mix matzo meal with eggs and chicken fat.",
      "Form into balls and chill for 30 minutes.",
      "Add matzo balls to soup and simmer for 20 minutes.",
      "Add noodles and cook until tender."
    ]
  },
  {
    id: "wc40",
    name: "Mediterranean Quinoa Bowl",
    cuisine: "Mediterranean",
    mood: "Healthy",
    allergens: ["nuts"],
    price: "$$",
    ingredients: [
      { name: "quinoa", quantity: { amount: 200, unit: "g", ingredient: "quinoa" } },
      { name: "cherry tomatoes", quantity: { amount: 200, unit: "g", ingredient: "cherry tomatoes" } },
      { name: "cucumber", quantity: { amount: 1, unit: "pieces", ingredient: "cucumber" } },
      { name: "kalamata olives", quantity: { amount: 100, unit: "g", ingredient: "kalamata olives" } },
      { name: "feta cheese", quantity: { amount: 100, unit: "g", ingredient: "feta cheese" } },
      { name: "pine nuts", quantity: { amount: 50, unit: "g", ingredient: "pine nuts" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "lemon juice", quantity: { amount: 30, unit: "ml", ingredient: "lemon juice" } },
      { name: "oregano", quantity: { amount: 2, unit: "tsp", ingredient: "oregano" } }
    ],
    time: 25,
    steps: [
      "Cook quinoa according to package instructions.",
      "Chop vegetables and mix with quinoa.",
      "Add olives, feta, and pine nuts.",
      "Make dressing with olive oil, lemon, and oregano.",
      "Toss everything together and serve."
    ]
  },
  {
    id: "wc41",
    name: "Pierogi",
    cuisine: "Eastern European",
    mood: "Hearty",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "flour", quantity: { amount: 300, unit: "g", ingredient: "flour" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "potatoes", quantity: { amount: 400, unit: "g", ingredient: "potatoes" } },
      { name: "cheddar cheese", quantity: { amount: 150, unit: "g", ingredient: "cheddar cheese" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "butter", quantity: { amount: 50, unit: "g", ingredient: "butter" } },
      { name: "sour cream", quantity: { amount: 200, unit: "ml", ingredient: "sour cream" } },
      { name: "salt", quantity: { amount: 2, unit: "tsp", ingredient: "salt" } }
    ],
    time: 90,
    steps: [
      "Make dough with flour, eggs, and water.",
      "Boil and mash potatoes with cheese and onion.",
      "Roll dough and cut into circles.",
      "Fill with potato mixture and seal edges.",
      "Boil pierogi until they float, serve with sour cream."
    ]
  },
  {
    id: "wc42",
    name: "Fusion Sushi Burrito",
    cuisine: "Fusion",
    mood: "Adventurous",
    allergens: ["fish", "soy"],
    price: "$$$",
    ingredients: [
      { name: "sushi rice", quantity: { amount: 200, unit: "g", ingredient: "sushi rice" } },
      { name: "nori sheets", quantity: { amount: 4, unit: "pieces", ingredient: "nori sheets" } },
      { name: "salmon", quantity: { amount: 200, unit: "g", ingredient: "salmon" } },
      { name: "avocado", quantity: { amount: 1, unit: "pieces", ingredient: "avocado" } },
      { name: "cucumber", quantity: { amount: 1, unit: "pieces", ingredient: "cucumber" } },
      { name: "mango", quantity: { amount: 1, unit: "pieces", ingredient: "mango" } },
      { name: "spicy mayo", quantity: { amount: 60, unit: "ml", ingredient: "spicy mayo" } },
      { name: "soy sauce", quantity: { amount: 30, unit: "ml", ingredient: "soy sauce" } },
      { name: "wasabi", quantity: { amount: 10, unit: "g", ingredient: "wasabi" } }
    ],
    time: 40,
    steps: [
      "Cook sushi rice and season with vinegar.",
      "Lay nori sheet and spread rice evenly.",
      "Add salmon, avocado, cucumber, and mango.",
      "Roll tightly like a burrito.",
      "Slice and serve with soy sauce and wasabi."
    ]
  },
  {
    id: "wc43",
    name: "Fish Pie",
    cuisine: "British",
    mood: "Comfort",
    allergens: ["fish", "dairy", "gluten"],
    price: "$$",
    ingredients: [
      { name: "white fish fillets", quantity: { amount: 500, unit: "g", ingredient: "white fish fillets" } },
      { name: "salmon", quantity: { amount: 200, unit: "g", ingredient: "salmon" } },
      { name: "shrimp", quantity: { amount: 150, unit: "g", ingredient: "shrimp" } },
      { name: "potatoes", quantity: { amount: 600, unit: "g", ingredient: "potatoes" } },
      { name: "milk", quantity: { amount: 300, unit: "ml", ingredient: "milk" } },
      { name: "butter", quantity: { amount: 50, unit: "g", ingredient: "butter" } },
      { name: "flour", quantity: { amount: 30, unit: "g", ingredient: "flour" } },
      { name: "parsley", quantity: { amount: 20, unit: "g", ingredient: "parsley" } },
      { name: "lemon", quantity: { amount: 1, unit: "pieces", ingredient: "lemon" } }
    ],
    time: 75,
    steps: [
      "Poach fish in milk until just cooked.",
      "Make white sauce with butter, flour, and poaching liquid.",
      "Boil and mash potatoes with butter.",
      "Layer fish and sauce in baking dish.",
      "Top with mashed potatoes and bake until golden."
    ]
  },
  {
    id: "wc44",
    name: "American BBQ Ribs",
    cuisine: "American",
    mood: "Party",
    allergens: [],
    price: "$$$",
    ingredients: [
      { name: "pork ribs", quantity: { amount: 1000, unit: "g", ingredient: "pork ribs" } },
      { name: "barbecue sauce", quantity: { amount: 300, unit: "ml", ingredient: "barbecue sauce" } },
      { name: "brown sugar", quantity: { amount: 100, unit: "g", ingredient: "brown sugar" } },
      { name: "paprika", quantity: { amount: 2, unit: "tsp", ingredient: "paprika" } },
      { name: "garlic powder", quantity: { amount: 2, unit: "tsp", ingredient: "garlic powder" } },
      { name: "onion powder", quantity: { amount: 2, unit: "tsp", ingredient: "onion powder" } },
      { name: "apple cider vinegar", quantity: { amount: 60, unit: "ml", ingredient: "apple cider vinegar" } },
      { name: "honey", quantity: { amount: 60, unit: "ml", ingredient: "honey" } }
    ],
    time: 240,
    steps: [
      "Rub ribs with dry spices and brown sugar.",
      "Wrap in foil and bake at 150°C for 2 hours.",
      "Unwrap and brush with barbecue sauce.",
      "Grill or bake until sauce caramelizes.",
      "Rest for 10 minutes before serving."
    ]
  },
  {
    id: "wc45",
    name: "Classic Cheeseburger",
    cuisine: "American",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "ground beef", quantity: { amount: 400, unit: "g", ingredient: "ground beef" } },
      { name: "burger buns", quantity: { amount: 4, unit: "pieces", ingredient: "burger buns" } },
      { name: "cheddar cheese", quantity: { amount: 120, unit: "g", ingredient: "cheddar cheese" } },
      { name: "lettuce", quantity: { amount: 100, unit: "g", ingredient: "lettuce" } },
      { name: "tomato", quantity: { amount: 1, unit: "pieces", ingredient: "tomato" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "pickles", quantity: { amount: 50, unit: "g", ingredient: "pickles" } },
      { name: "ketchup", quantity: { amount: 60, unit: "ml", ingredient: "ketchup" } },
      { name: "mustard", quantity: { amount: 30, unit: "ml", ingredient: "mustard" } }
    ],
    time: 25,
    steps: [
      "Form beef into 4 patties, season with salt and pepper.",
      "Grill or pan-fry burgers for 4-5 minutes per side.",
      "Add cheese during last minute of cooking.",
      "Toast burger buns.",
      "Assemble with lettuce, tomato, onion, pickles, and condiments."
    ]
  },
  {
    id: "wc46",
    name: "Texas Chili Con Carne",
    cuisine: "American",
    mood: "Hearty",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "ground beef", quantity: { amount: 600, unit: "g", ingredient: "ground beef" } },
      { name: "kidney beans", quantity: { amount: 400, unit: "g", ingredient: "kidney beans" } },
      { name: "tomatoes", quantity: { amount: 400, unit: "g", ingredient: "tomatoes" } },
      { name: "onion", quantity: { amount: 2, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "chili powder", quantity: { amount: 3, unit: "tbsp", ingredient: "chili powder" } },
      { name: "cumin", quantity: { amount: 2, unit: "tsp", ingredient: "cumin" } },
      { name: "beef stock", quantity: { amount: 500, unit: "ml", ingredient: "beef stock" } },
      { name: "jalapeños", quantity: { amount: 2, unit: "pieces", ingredient: "jalapeños" } }
    ],
    time: 90,
    steps: [
      "Brown ground beef in large pot.",
      "Add chopped onions and garlic, cook until softened.",
      "Add chili powder, cumin, and jalapeños.",
      "Add tomatoes, beans, and beef stock.",
      "Simmer for 1 hour until thickened and flavors meld."
    ]
  },
  {
    id: "wc47",
    name: "Loaded Nachos",
    cuisine: "American",
    mood: "Party",
    allergens: ["dairy", "gluten"],
    price: "$$",
    ingredients: [
      { name: "tortilla chips", quantity: { amount: 300, unit: "g", ingredient: "tortilla chips" } },
      { name: "cheddar cheese", quantity: { amount: 200, unit: "g", ingredient: "cheddar cheese" } },
      { name: "monterey jack", quantity: { amount: 100, unit: "g", ingredient: "monterey jack" } },
      { name: "ground beef", quantity: { amount: 300, unit: "g", ingredient: "ground beef" } },
      { name: "black beans", quantity: { amount: 200, unit: "g", ingredient: "black beans" } },
      { name: "jalapeños", quantity: { amount: 4, unit: "pieces", ingredient: "jalapeños" } },
      { name: "sour cream", quantity: { amount: 150, unit: "ml", ingredient: "sour cream" } },
      { name: "guacamole", quantity: { amount: 200, unit: "g", ingredient: "guacamole" } },
      { name: "salsa", quantity: { amount: 150, unit: "ml", ingredient: "salsa" } }
    ],
    time: 30,
    steps: [
      "Brown ground beef with taco seasoning.",
      "Layer tortilla chips on baking sheet.",
      "Sprinkle with cheese, beef, and beans.",
      "Bake at 200°C until cheese melts.",
      "Top with jalapeños, sour cream, guacamole, and salsa."
    ]
  },
  {
    id: "wc48",
    name: "New York Style Pizza",
    cuisine: "American",
    mood: "Classic",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "pizza dough", quantity: { amount: 400, unit: "g", ingredient: "pizza dough" } },
      { name: "tomato sauce", quantity: { amount: 200, unit: "ml", ingredient: "tomato sauce" } },
      { name: "mozzarella", quantity: { amount: 300, unit: "g", ingredient: "mozzarella" } },
      { name: "pepperoni", quantity: { amount: 150, unit: "g", ingredient: "pepperoni" } },
      { name: "basil", quantity: { amount: 20, unit: "g", ingredient: "basil" } },
      { name: "olive oil", quantity: { amount: 30, unit: "ml", ingredient: "olive oil" } },
      { name: "oregano", quantity: { amount: 2, unit: "tsp", ingredient: "oregano" } },
      { name: "garlic powder", quantity: { amount: 1, unit: "tsp", ingredient: "garlic powder" } }
    ],
    time: 45,
    steps: [
      "Stretch pizza dough to 14-inch round.",
      "Spread tomato sauce and sprinkle with oregano.",
      "Add mozzarella and pepperoni slices.",
      "Bake at 260°C for 12-15 minutes.",
      "Garnish with fresh basil and drizzle with olive oil."
    ]
  },
  {
    id: "wc49",
    name: "Buffalo Wings",
    cuisine: "American",
    mood: "Party",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "chicken wings", quantity: { amount: 1000, unit: "g", ingredient: "chicken wings" } },
      { name: "hot sauce", quantity: { amount: 200, unit: "ml", ingredient: "hot sauce" } },
      { name: "butter", quantity: { amount: 100, unit: "g", ingredient: "butter" } },
      { name: "blue cheese", quantity: { amount: 150, unit: "g", ingredient: "blue cheese" } },
      { name: "celery", quantity: { amount: 4, unit: "pieces", ingredient: "celery" } },
      { name: "flour", quantity: { amount: 100, unit: "g", ingredient: "flour" } },
      { name: "garlic powder", quantity: { amount: 2, unit: "tsp", ingredient: "garlic powder" } },
      { name: "vegetable oil", quantity: { amount: 500, unit: "ml", ingredient: "vegetable oil" } }
    ],
    time: 50,
    steps: [
      "Coat wings in flour and garlic powder.",
      "Fry wings in hot oil until crispy and cooked through.",
      "Mix hot sauce with melted butter.",
      "Toss wings in buffalo sauce.",
      "Serve with blue cheese dip and celery sticks."
    ]
  },
  {
    id: "wc50",
    name: "Mushroom Risotto",
    cuisine: "Italian",
    mood: "Indulgent",
    allergens: ["dairy"],
    price: "$$$",
    ingredients: [
      { name: "arborio rice", quantity: { amount: 300, unit: "g", ingredient: "arborio rice" } },
      { name: "chicken stock", quantity: { amount: 1000, unit: "ml", ingredient: "chicken stock" } },
      { name: "white wine", quantity: { amount: 150, unit: "ml", ingredient: "white wine" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } },
      { name: "butter", quantity: { amount: 60, unit: "g", ingredient: "butter" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 3, unit: "cloves", ingredient: "garlic" } },
      { name: "mushrooms", quantity: { amount: 200, unit: "g", ingredient: "mushrooms" } },
      { name: "parsley", quantity: { amount: 20, unit: "g", ingredient: "parsley" } }
    ],
    time: 35,
    steps: [
      "Sauté onion and garlic in butter until soft.",
      "Add rice and toast for 2 minutes.",
      "Add wine and stir until absorbed.",
      "Gradually add hot stock, stirring constantly.",
      "Finish with parmesan, butter, and parsley."
    ]
  },
  {
    id: "wc51",
    name: "Tiramisu",
    cuisine: "Italian",
    mood: "Indulgent",
    allergens: ["eggs", "dairy"],
    price: "$$$",
    ingredients: [
      { name: "ladyfinger cookies", quantity: { amount: 200, unit: "g", ingredient: "ladyfinger cookies" } },
      { name: "mascarpone", quantity: { amount: 500, unit: "g", ingredient: "mascarpone" } },
      { name: "eggs", quantity: { amount: 4, unit: "eggs", ingredient: "eggs" } },
      { name: "sugar", quantity: { amount: 100, unit: "g", ingredient: "sugar" } },
      { name: "espresso", quantity: { amount: 300, unit: "ml", ingredient: "espresso" } },
      { name: "cocoa powder", quantity: { amount: 30, unit: "g", ingredient: "cocoa powder" } },
      { name: "vanilla extract", quantity: { amount: 1, unit: "tsp", ingredient: "vanilla extract" } },
      { name: "marsala wine", quantity: { amount: 60, unit: "ml", ingredient: "marsala wine" } }
    ],
    time: 60,
    steps: [
      "Separate eggs and beat yolks with sugar until pale.",
      "Fold in mascarpone and vanilla.",
      "Beat egg whites to stiff peaks and fold in.",
      "Dip ladyfingers in coffee and layer in dish.",
      "Alternate layers of cream and cookies, dust with cocoa."
    ]
  },
  {
    id: "wc52",
    name: "Lasagna",
    cuisine: "Italian",
    mood: "Hearty",
    allergens: ["gluten", "dairy", "eggs"],
    price: "$$",
    ingredients: [
      { name: "lasagna noodles", quantity: { amount: 12, unit: "pieces", ingredient: "lasagna noodles" } },
      { name: "ground beef", quantity: { amount: 500, unit: "g", ingredient: "ground beef" } },
      { name: "ricotta", quantity: { amount: 400, unit: "g", ingredient: "ricotta" } },
      { name: "mozzarella", quantity: { amount: 300, unit: "g", ingredient: "mozzarella" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } },
      { name: "tomato sauce", quantity: { amount: 600, unit: "ml", ingredient: "tomato sauce" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "basil", quantity: { amount: 20, unit: "g", ingredient: "basil" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } }
    ],
    time: 90,
    steps: [
      "Brown beef with garlic and add tomato sauce.",
      "Mix ricotta with eggs and parmesan.",
      "Layer noodles, meat sauce, ricotta, and mozzarella.",
      "Repeat layers and top with remaining cheese.",
      "Bake at 180°C for 45 minutes until bubbly."
    ]
  },
  {
    id: "wc53",
    name: "Focaccia bread with cherry tomatoes",
    cuisine: "Italian",
    mood: "Classic",
    allergens: ["gluten"],
    price: "$",
    ingredients: [
      { name: "bread flour", quantity: { amount: 500, unit: "g", ingredient: "bread flour" } },
      { name: "olive oil", quantity: { amount: 100, unit: "ml", ingredient: "olive oil" } },
      { name: "active dry yeast", quantity: { amount: 7, unit: "g", ingredient: "active dry yeast" } },
      { name: "warm water", quantity: { amount: 400, unit: "ml", ingredient: "warm water" } },
      { name: "rosemary", quantity: { amount: 20, unit: "g", ingredient: "rosemary" } },
      { name: "sea salt", quantity: { amount: 2, unit: "tsp", ingredient: "sea salt" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "cherry tomatoes", quantity: { amount: 200, unit: "g", ingredient: "cherry tomatoes" } }
    ],
    time: 180,
    steps: [
      "Mix flour, yeast, water, and olive oil to form dough.",
      "Knead for 10 minutes, let rise for 1 hour.",
      "Press dough into oiled baking sheet.",
      "Dimple surface and add rosemary, garlic, tomatoes.",
      "Drizzle with olive oil and bake at 200°C for 25 minutes."
    ]
  },
  {
    id: "wc54",
    name: "Strawberry & Lemon Gelato",
    cuisine: "Italian",
    mood: "Indulgent",
    allergens: ["dairy", "eggs"],
    price: "$$",
    ingredients: [
      { name: "whole milk", quantity: { amount: 500, unit: "ml", ingredient: "whole milk" } },
      { name: "heavy cream", quantity: { amount: 300, unit: "ml", ingredient: "heavy cream" } },
      { name: "egg yolks", quantity: { amount: 6, unit: "eggs", ingredient: "egg yolks" } },
      { name: "sugar", quantity: { amount: 150, unit: "g", ingredient: "sugar" } },
      { name: "vanilla bean", quantity: { amount: 1, unit: "pieces", ingredient: "vanilla bean" } },
      { name: "strawberries", quantity: { amount: 300, unit: "g", ingredient: "strawberries" } },
      { name: "lemon zest", quantity: { amount: 1, unit: "tsp", ingredient: "lemon zest" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } }
    ],
    time: 120,
    steps: [
      "Heat milk and cream with vanilla bean.",
      "Whisk egg yolks with sugar until pale.",
      "Temper eggs with hot milk mixture.",
      "Cook until thickened, strain and chill.",
      "Churn in ice cream maker, add strawberries."
    ]
  },
  {
    id: "wc55",
    name: "Butter Chicken",
    cuisine: "Indian",
    mood: "Comfort",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "chicken thighs", quantity: { amount: 600, unit: "g", ingredient: "chicken thighs" } },
      { name: "yogurt", quantity: { amount: 200, unit: "ml", ingredient: "yogurt" } },
      { name: "garam masala", quantity: { amount: 2, unit: "tsp", ingredient: "garam masala" } },
      { name: "tomato puree", quantity: { amount: 200, unit: "ml", ingredient: "tomato puree" } },
      { name: "heavy cream", quantity: { amount: 200, unit: "ml", ingredient: "heavy cream" } },
      { name: "butter", quantity: { amount: 60, unit: "g", ingredient: "butter" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "ginger", quantity: { amount: 20, unit: "g", ingredient: "ginger" } },
      { name: "kasoori methi", quantity: { amount: 1, unit: "tsp", ingredient: "kasoori methi" } }
    ],
    time: 60,
    steps: [
      "Marinate chicken in yogurt and spices for 2 hours.",
      "Grill chicken until charred and cooked through.",
      "Sauté garlic and ginger in butter.",
      "Add tomato puree and simmer for 10 minutes.",
      "Add cream, chicken, and kasoori methi, simmer for 15 minutes."
    ]
  },
  {
    id: "wc56",
    name: "Biryani",
    cuisine: "Indian",
    mood: "Celebration",
    allergens: ["dairy"],
    price: "$$$",
    ingredients: [
      { name: "basmati rice", quantity: { amount: 400, unit: "g", ingredient: "basmati rice" } },
      { name: "lamb", quantity: { amount: 500, unit: "g", ingredient: "lamb" } },
      { name: "onion", quantity: { amount: 2, unit: "pieces", ingredient: "onion" } },
      { name: "saffron", quantity: { amount: 1, unit: "tsp", ingredient: "saffron" } },
      { name: "ghee", quantity: { amount: 60, unit: "ml", ingredient: "ghee" } },
      { name: "cardamom", quantity: { amount: 6, unit: "pieces", ingredient: "cardamom" } },
      { name: "cinnamon", quantity: { amount: 2, unit: "pieces", ingredient: "cinnamon" } },
      { name: "bay leaves", quantity: { amount: 2, unit: "pieces", ingredient: "bay leaves" } },
      { name: "mint", quantity: { amount: 30, unit: "g", ingredient: "mint" } },
      { name: "coriander", quantity: { amount: 30, unit: "g", ingredient: "coriander" } }
    ],
    time: 90,
    steps: [
      "Marinate lamb with spices and yogurt for 2 hours.",
      "Cook lamb until tender, set aside.",
      "Parboil rice with whole spices.",
      "Layer rice and meat in heavy pot.",
      "Steam on low heat for 30 minutes, garnish with herbs."
    ]
  },
  {
    id: "wc57",
    name: "Samosa",
    cuisine: "Indian",
    mood: "Party",
    allergens: ["gluten"],
    price: "$",
    ingredients: [
      { name: "all-purpose flour", quantity: { amount: 300, unit: "g", ingredient: "all-purpose flour" } },
      { name: "potatoes", quantity: { amount: 400, unit: "g", ingredient: "potatoes" } },
      { name: "peas", quantity: { amount: 100, unit: "g", ingredient: "peas" } },
      { name: "cumin seeds", quantity: { amount: 1, unit: "tsp", ingredient: "cumin seeds" } },
      { name: "coriander powder", quantity: { amount: 2, unit: "tsp", ingredient: "coriander powder" } },
      { name: "turmeric", quantity: { amount: 1, unit: "tsp", ingredient: "turmeric" } },
      { name: "ginger", quantity: { amount: 20, unit: "g", ingredient: "ginger" } },
      { name: "vegetable oil", quantity: { amount: 100, unit: "ml", ingredient: "vegetable oil" } },
      { name: "mint chutney", quantity: { amount: 100, unit: "ml", ingredient: "mint chutney" } }
    ],
    time: 75,
    steps: [
      "Make dough with flour, oil, and water.",
      "Boil and mash potatoes with peas and spices.",
      "Roll dough and cut into triangles.",
      "Fill with potato mixture and seal edges.",
      "Deep fry until golden brown, serve with chutney."
    ]
  },
  {
    id: "wc58",
    name: "Dal Makhani",
    cuisine: "Indian",
    mood: "Comfort",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "black lentils", quantity: { amount: 200, unit: "g", ingredient: "black lentils" } },
      { name: "kidney beans", quantity: { amount: 100, unit: "g", ingredient: "kidney beans" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "tomatoes", quantity: { amount: 200, unit: "g", ingredient: "tomatoes" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "ginger", quantity: { amount: 30, unit: "g", ingredient: "ginger" } },
      { name: "butter", quantity: { amount: 50, unit: "g", ingredient: "butter" } },
      { name: "cream", quantity: { amount: 100, unit: "ml", ingredient: "cream" } },
      { name: "garam masala", quantity: { amount: 2, unit: "tsp", ingredient: "garam masala" } }
    ],
    time: 120,
    steps: [
      "Soak lentils and beans overnight.",
      "Pressure cook lentils and beans until soft.",
      "Sauté onion, garlic, and ginger in butter.",
      "Add tomatoes and spices, cook until thick.",
      "Add lentils, cream, and simmer for 30 minutes."
    ]
  },
  {
    id: "wc59",
    name: "Naan Bread",
    cuisine: "Indian",
    mood: "Classic",
    allergens: ["gluten", "dairy"],
    price: "$",
    ingredients: [
      { name: "all-purpose flour", quantity: { amount: 400, unit: "g", ingredient: "all-purpose flour" } },
      { name: "active dry yeast", quantity: { amount: 7, unit: "g", ingredient: "active dry yeast" } },
      { name: "warm water", quantity: { amount: 200, unit: "ml", ingredient: "warm water" } },
      { name: "yogurt", quantity: { amount: 100, unit: "ml", ingredient: "yogurt" } },
      { name: "ghee", quantity: { amount: 30, unit: "ml", ingredient: "ghee" } },
      { name: "sugar", quantity: { amount: 15, unit: "g", ingredient: "sugar" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "nigella seeds", quantity: { amount: 2, unit: "tsp", ingredient: "nigella seeds" } }
    ],
    time: 120,
    steps: [
      "Mix flour, yeast, sugar, and warm water.",
      "Add yogurt and knead to smooth dough.",
      "Let rise for 1 hour until doubled.",
      "Divide into balls and roll into ovals.",
      "Cook on hot griddle until puffed and charred."
    ]
  },
  {
    id: "wc60",
    name: "Tandoori Chicken",
    cuisine: "Indian",
    mood: "Spicy",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "chicken", quantity: { amount: 800, unit: "g", ingredient: "chicken" } },
      { name: "yogurt", quantity: { amount: 300, unit: "ml", ingredient: "yogurt" } },
      { name: "lemon juice", quantity: { amount: 60, unit: "ml", ingredient: "lemon juice" } },
      { name: "garlic", quantity: { amount: 8, unit: "cloves", ingredient: "garlic" } },
      { name: "ginger", quantity: { amount: 40, unit: "g", ingredient: "ginger" } },
      { name: "paprika", quantity: { amount: 2, unit: "tsp", ingredient: "paprika" } },
      { name: "cayenne pepper", quantity: { amount: 1, unit: "tsp", ingredient: "cayenne pepper" } },
      { name: "garam masala", quantity: { amount: 2, unit: "tsp", ingredient: "garam masala" } },
      { name: "mustard oil", quantity: { amount: 30, unit: "ml", ingredient: "mustard oil" } }
    ],
    time: 90,
    steps: [
      "Mix yogurt with spices, garlic, and ginger.",
      "Marinate chicken in mixture for 4 hours.",
      "Preheat oven to 220°C or prepare grill.",
      "Cook chicken for 25-30 minutes until charred.",
      "Serve with mint chutney and onion salad."
    ]
  },
  {
    id: "wc61",
    name: "Palak Paneer",
    cuisine: "Indian",
    mood: "Healthy",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "spinach", quantity: { amount: 500, unit: "g", ingredient: "spinach" } },
      { name: "paneer", quantity: { amount: 200, unit: "g", ingredient: "paneer" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "tomatoes", quantity: { amount: 2, unit: "pieces", ingredient: "tomatoes" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "ginger", quantity: { amount: 20, unit: "g", ingredient: "ginger" } },
      { name: "cumin", quantity: { amount: 1, unit: "tsp", ingredient: "cumin" } },
      { name: "garam masala", quantity: { amount: 1, unit: "tsp", ingredient: "garam masala" } },
      { name: "cream", quantity: { amount: 100, unit: "ml", ingredient: "cream" } }
    ],
    time: 45,
    steps: [
      "Blanch spinach and blend to smooth paste.",
      "Sauté onion, garlic, and ginger until soft.",
      "Add tomatoes and spices, cook until thick.",
      "Add spinach paste and simmer for 10 minutes.",
      "Add paneer cubes and cream, cook for 5 minutes."
    ]
  },
  {
    id: "wc62",
    name: "Gulab Jamun",
    cuisine: "Indian",
    mood: "Indulgent",
    allergens: ["dairy", "gluten"],
    price: "$$",
    ingredients: [
      { name: "milk powder", quantity: { amount: 200, unit: "g", ingredient: "milk powder" } },
      { name: "all-purpose flour", quantity: { amount: 50, unit: "g", ingredient: "all-purpose flour" } },
      { name: "baking powder", quantity: { amount: 1, unit: "tsp", ingredient: "baking powder" } },
      { name: "ghee", quantity: { amount: 30, unit: "ml", ingredient: "ghee" } },
      { name: "milk", quantity: { amount: 100, unit: "ml", ingredient: "milk" } },
      { name: "sugar", quantity: { amount: 300, unit: "g", ingredient: "sugar" } },
      { name: "water", quantity: { amount: 300, unit: "ml", ingredient: "water" } },
      { name: "cardamom", quantity: { amount: 4, unit: "pieces", ingredient: "cardamom" } },
      { name: "saffron", quantity: { amount: 1, unit: "tsp", ingredient: "saffron" } }
    ],
    time: 60,
    steps: [
      "Mix milk powder, flour, and baking powder.",
      "Add ghee and milk to form soft dough.",
      "Shape into small balls and deep fry until golden.",
      "Make sugar syrup with cardamom and saffron.",
      "Soak fried balls in warm syrup for 2 hours."
    ]
  },
  {
    id: "wc63",
    name: "Masala Dosa",
    cuisine: "Indian",
    mood: "Breakfast",
    allergens: ["dairy"],
    price: "$$",
    ingredients: [
      { name: "rice", quantity: { amount: 300, unit: "g", ingredient: "rice" } },
      { name: "urad dal", quantity: { amount: 100, unit: "g", ingredient: "urad dal" } },
      { name: "potatoes", quantity: { amount: 400, unit: "g", ingredient: "potatoes" } },
      { name: "onion", quantity: { amount: 2, unit: "pieces", ingredient: "onion" } },
      { name: "mustard seeds", quantity: { amount: 1, unit: "tsp", ingredient: "mustard seeds" } },
      { name: "curry leaves", quantity: { amount: 20, unit: "g", ingredient: "curry leaves" } },
      { name: "turmeric", quantity: { amount: 1, unit: "tsp", ingredient: "turmeric" } },
      { name: "coconut chutney", quantity: { amount: 200, unit: "g", ingredient: "coconut chutney" } },
      { name: "sambar", quantity: { amount: 300, unit: "ml", ingredient: "sambar" } }
    ],
    time: 180,
    steps: [
      "Soak rice and dal overnight, grind to smooth batter.",
      "Ferment batter for 8-12 hours.",
      "Make potato filling with onions and spices.",
      "Spread batter on hot griddle to make thin crepe.",
      "Fill with potato mixture, fold, serve with chutney."
    ]
  },
  {
    id: "wc64",
    name: "Rogan Josh",
    cuisine: "Indian",
    mood: "Hearty",
    allergens: ["dairy"],
    price: "$$$",
    ingredients: [
      { name: "lamb shoulder", quantity: { amount: 800, unit: "g", ingredient: "lamb shoulder" } },
      { name: "onion", quantity: { amount: 2, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 8, unit: "cloves", ingredient: "garlic" } },
      { name: "ginger", quantity: { amount: 40, unit: "g", ingredient: "ginger" } },
      { name: "kashmiri red chili", quantity: { amount: 2, unit: "tsp", ingredient: "kashmiri red chili" } },
      { name: "fennel powder", quantity: { amount: 2, unit: "tsp", ingredient: "fennel powder" } },
      { name: "cardamom", quantity: { amount: 6, unit: "pieces", ingredient: "cardamom" } },
      { name: "yogurt", quantity: { amount: 200, unit: "ml", ingredient: "yogurt" } },
      { name: "ghee", quantity: { amount: 60, unit: "ml", ingredient: "ghee" } }
    ],
    time: 120,
    steps: [
      "Brown lamb pieces in ghee until sealed.",
      "Sauté onions, garlic, and ginger until golden.",
      "Add spices and cook until fragrant.",
      "Add lamb, yogurt, and water, simmer for 1 hour.",
      "Cook until meat is tender and sauce is thick."
    ]
  },
  {
    id: "wc65",
    name: "Souvlaki",
    cuisine: "Greek",
    mood: "Party",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "pork shoulder", quantity: { amount: 600, unit: "g", ingredient: "pork shoulder" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "lemon juice", quantity: { amount: 60, unit: "ml", ingredient: "lemon juice" } },
      { name: "oregano", quantity: { amount: 2, unit: "tsp", ingredient: "oregano" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "pita bread", quantity: { amount: 6, unit: "pieces", ingredient: "pita bread" } },
      { name: "tomato", quantity: { amount: 2, unit: "pieces", ingredient: "tomato" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "tzatziki", quantity: { amount: 200, unit: "ml", ingredient: "tzatziki" } }
    ],
    time: 45,
    steps: [
      "Marinate pork in olive oil, lemon, oregano, and garlic for 2 hours.",
      "Thread meat onto skewers and grill for 8-10 minutes.",
      "Warm pita bread on grill.",
      "Chop tomatoes and onions.",
      "Serve souvlaki in pita with vegetables and tzatziki."
    ]
  },
  {
    id: "wc66",
    name: "Greek Salad",
    cuisine: "Greek",
    mood: "Healthy",
    allergens: ["dairy"],
    price: "$",
    ingredients: [
      { name: "cucumber", quantity: { amount: 2, unit: "pieces", ingredient: "cucumber" } },
      { name: "tomatoes", quantity: { amount: 4, unit: "pieces", ingredient: "tomatoes" } },
      { name: "red onion", quantity: { amount: 1, unit: "pieces", ingredient: "red onion" } },
      { name: "feta cheese", quantity: { amount: 200, unit: "g", ingredient: "feta cheese" } },
      { name: "kalamata olives", quantity: { amount: 150, unit: "g", ingredient: "kalamata olives" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "red wine vinegar", quantity: { amount: 30, unit: "ml", ingredient: "red wine vinegar" } },
      { name: "oregano", quantity: { amount: 2, unit: "tsp", ingredient: "oregano" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } }
    ],
    time: 15,
    steps: [
      "Chop cucumber, tomatoes, and red onion into chunks.",
      "Crumble feta cheese over vegetables.",
      "Add kalamata olives.",
      "Make dressing with olive oil, vinegar, oregano, and salt.",
      "Toss salad with dressing and serve immediately."
    ]
  },
  {
    id: "wc67",
    name: "Spanakopita",
    cuisine: "Greek",
    mood: "Classic",
    allergens: ["gluten", "dairy", "eggs"],
    price: "$$",
    ingredients: [
      { name: "phyllo dough", quantity: { amount: 400, unit: "g", ingredient: "phyllo dough" } },
      { name: "spinach", quantity: { amount: 800, unit: "g", ingredient: "spinach" } },
      { name: "feta cheese", quantity: { amount: 300, unit: "g", ingredient: "feta cheese" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "dill", quantity: { amount: 30, unit: "g", ingredient: "dill" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "butter", quantity: { amount: 100, unit: "g", ingredient: "butter" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "nutmeg", quantity: { amount: 1, unit: "tsp", ingredient: "nutmeg" } }
    ],
    time: 90,
    steps: [
      "Sauté onion and wilt spinach, drain excess liquid.",
      "Mix spinach with crumbled feta, dill, eggs, and nutmeg.",
      "Layer phyllo sheets, brushing each with butter and oil.",
      "Add spinach mixture and fold into triangles.",
      "Bake at 180°C for 30 minutes until golden brown."
    ]
  },
  {
    id: "wc68",
    name: "Pastitsio",
    cuisine: "Greek",
    mood: "Hearty",
    allergens: ["gluten", "dairy", "eggs"],
    price: "$$$",
    ingredients: [
      { name: "penne pasta", quantity: { amount: 400, unit: "g", ingredient: "penne pasta" } },
      { name: "ground beef", quantity: { amount: 600, unit: "g", ingredient: "ground beef" } },
      { name: "onion", quantity: { amount: 2, unit: "pieces", ingredient: "onion" } },
      { name: "tomato sauce", quantity: { amount: 400, unit: "ml", ingredient: "tomato sauce" } },
      { name: "cinnamon", quantity: { amount: 1, unit: "tsp", ingredient: "cinnamon" } },
      { name: "nutmeg", quantity: { amount: 1, unit: "tsp", ingredient: "nutmeg" } },
      { name: "butter", quantity: { amount: 80, unit: "g", ingredient: "butter" } },
      { name: "flour", quantity: { amount: 60, unit: "g", ingredient: "flour" } },
      { name: "milk", quantity: { amount: 600, unit: "ml", ingredient: "milk" } },
      { name: "eggs", quantity: { amount: 3, unit: "eggs", ingredient: "eggs" } }
    ],
    time: 120,
    steps: [
      "Cook pasta and set aside.",
      "Brown beef with onions and add tomato sauce with spices.",
      "Make béchamel sauce with butter, flour, milk, and eggs.",
      "Layer pasta, meat sauce, and béchamel in baking dish.",
      "Bake at 180°C for 45 minutes until golden and bubbly."
    ]
  },
  {
    id: "wc69",
    name: "Dolmades",
    cuisine: "Greek",
    mood: "Adventurous",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "grape leaves", quantity: { amount: 50, unit: "pieces", ingredient: "grape leaves" } },
      { name: "rice", quantity: { amount: 200, unit: "g", ingredient: "rice" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "dill", quantity: { amount: 30, unit: "g", ingredient: "dill" } },
      { name: "mint", quantity: { amount: 20, unit: "g", ingredient: "mint" } },
      { name: "lemon juice", quantity: { amount: 60, unit: "ml", ingredient: "lemon juice" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "vegetable stock", quantity: { amount: 500, unit: "ml", ingredient: "vegetable stock" } },
      { name: "pine nuts", quantity: { amount: 50, unit: "g", ingredient: "pine nuts" } }
    ],
    time: 90,
    steps: [
      "Rinse grape leaves and blanch for 2 minutes.",
      "Cook rice with onion, herbs, and pine nuts.",
      "Place rice mixture on grape leaves and roll tightly.",
      "Layer dolmades in pot with lemon juice and stock.",
      "Simmer for 45 minutes until rice is tender."
    ]
  },
  {
    id: "wc70",
    name: "Baklava",
    cuisine: "Greek",
    mood: "Indulgent",
    allergens: ["gluten", "nuts"],
    price: "$$$",
    ingredients: [
      { name: "phyllo dough", quantity: { amount: 400, unit: "g", ingredient: "phyllo dough" } },
      { name: "pistachios", quantity: { amount: 300, unit: "g", ingredient: "pistachios" } },
      { name: "walnuts", quantity: { amount: 200, unit: "g", ingredient: "walnuts" } },
      { name: "butter", quantity: { amount: 200, unit: "g", ingredient: "butter" } },
      { name: "sugar", quantity: { amount: 400, unit: "g", ingredient: "sugar" } },
      { name: "honey", quantity: { amount: 200, unit: "ml", ingredient: "honey" } },
      { name: "cinnamon", quantity: { amount: 2, unit: "tsp", ingredient: "cinnamon" } },
      { name: "cloves", quantity: { amount: 1, unit: "tsp", ingredient: "cloves" } },
      { name: "lemon juice", quantity: { amount: 30, unit: "ml", ingredient: "lemon juice" } }
    ],
    time: 120,
    steps: [
      "Chop nuts and mix with cinnamon and cloves.",
      "Layer phyllo sheets, brushing each with melted butter.",
      "Add nut mixture every 4-5 layers.",
      "Cut into diamonds and bake at 160°C for 50 minutes.",
      "Pour hot syrup over cooled baklava and let soak."
    ]
  },
  {
    id: "wc71",
    name: "Avgolemono Soup",
    cuisine: "Greek",
    mood: "Comfort",
    allergens: ["eggs"],
    price: "$$",
    ingredients: [
      { name: "chicken", quantity: { amount: 500, unit: "g", ingredient: "chicken" } },
      { name: "rice", quantity: { amount: 100, unit: "g", ingredient: "rice" } },
      { name: "chicken stock", quantity: { amount: 1000, unit: "ml", ingredient: "chicken stock" } },
      { name: "eggs", quantity: { amount: 3, unit: "eggs", ingredient: "eggs" } },
      { name: "lemon juice", quantity: { amount: 90, unit: "ml", ingredient: "lemon juice" } },
      { name: "dill", quantity: { amount: 20, unit: "g", ingredient: "dill" } },
      { name: "carrot", quantity: { amount: 2, unit: "pieces", ingredient: "carrot" } },
      { name: "celery", quantity: { amount: 2, unit: "pieces", ingredient: "celery" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } }
    ],
    time: 60,
    steps: [
      "Simmer chicken with vegetables in stock for 30 minutes.",
      "Remove chicken and shred meat.",
      "Add rice to stock and cook for 15 minutes.",
      "Whisk eggs with lemon juice and temper with hot stock.",
      "Add egg mixture back to soup with chicken and dill."
    ]
  },
  {
    id: "wc72",
    name: "Saganaki",
    cuisine: "Greek",
    mood: "Party",
    allergens: ["dairy", "gluten"],
    price: "$$",
    ingredients: [
      { name: "kefalograviera cheese", quantity: { amount: 300, unit: "g", ingredient: "kefalograviera cheese" } },
      { name: "flour", quantity: { amount: 50, unit: "g", ingredient: "flour" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "lemon", quantity: { amount: 2, unit: "pieces", ingredient: "lemon" } },
      { name: "oregano", quantity: { amount: 1, unit: "tsp", ingredient: "oregano" } },
      { name: "bread", quantity: { amount: 4, unit: "slices", ingredient: "bread" } },
      { name: "brandy", quantity: { amount: 30, unit: "ml", ingredient: "brandy" } },
      { name: "black pepper", quantity: { amount: 1, unit: "tsp", ingredient: "black pepper" } }
    ],
    time: 20,
    steps: [
      "Cut cheese into thick slices and dust with flour.",
      "Heat olive oil in skillet until very hot.",
      "Fry cheese for 2-3 minutes until golden and crispy.",
      "Add brandy and flambé briefly.",
      "Serve with lemon wedges, oregano, and bread."
    ]
  },
  {
    id: "wc73",
    name: "Galaktoboureko",
    cuisine: "Greek",
    mood: "Indulgent",
    allergens: ["gluten", "dairy", "eggs"],
    price: "$$$",
    ingredients: [
      { name: "phyllo dough", quantity: { amount: 400, unit: "g", ingredient: "phyllo dough" } },
      { name: "milk", quantity: { amount: 1000, unit: "ml", ingredient: "milk" } },
      { name: "semolina", quantity: { amount: 150, unit: "g", ingredient: "semolina" } },
      { name: "sugar", quantity: { amount: 200, unit: "g", ingredient: "sugar" } },
      { name: "eggs", quantity: { amount: 4, unit: "eggs", ingredient: "eggs" } },
      { name: "butter", quantity: { amount: 150, unit: "g", ingredient: "butter" } },
      { name: "vanilla extract", quantity: { amount: 2, unit: "tsp", ingredient: "vanilla extract" } },
      { name: "honey", quantity: { amount: 100, unit: "ml", ingredient: "honey" } },
      { name: "cinnamon", quantity: { amount: 1, unit: "tsp", ingredient: "cinnamon" } }
    ],
    time: 90,
    steps: [
      "Heat milk with sugar and vanilla until simmering.",
      "Whisk in semolina and cook until thickened.",
      "Temper eggs into hot mixture and let cool.",
      "Layer phyllo sheets with butter and custard.",
      "Bake at 180°C for 40 minutes, drizzle with honey syrup."
    ]
  },
  {
    id: "wc74",
    name: "Gemista",
    cuisine: "Greek",
    mood: "Healthy",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "tomatoes", quantity: { amount: 6, unit: "pieces", ingredient: "tomatoes" } },
      { name: "bell peppers", quantity: { amount: 4, unit: "pieces", ingredient: "bell peppers" } },
      { name: "rice", quantity: { amount: 200, unit: "g", ingredient: "rice" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "mint", quantity: { amount: 20, unit: "g", ingredient: "mint" } },
      { name: "parsley", quantity: { amount: 30, unit: "g", ingredient: "parsley" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "tomato paste", quantity: { amount: 30, unit: "g", ingredient: "tomato paste" } }
    ],
    time: 75,
    steps: [
      "Hollow out tomatoes and peppers, reserve pulp.",
      "Sauté onion, garlic, and rice with tomato pulp.",
      "Add herbs and seasonings to rice mixture.",
      "Stuff vegetables with rice mixture.",
      "Bake at 180°C for 45 minutes until vegetables are tender."
    ]
  },
  {
    id: "wc75",
    name: "Enchiladas",
    cuisine: "Mexican",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "corn tortillas", quantity: { amount: 12, unit: "pieces", ingredient: "corn tortillas" } },
      { name: "chicken", quantity: { amount: 500, unit: "g", ingredient: "chicken" } },
      { name: "enchilada sauce", quantity: { amount: 400, unit: "ml", ingredient: "enchilada sauce" } },
      { name: "cheddar cheese", quantity: { amount: 200, unit: "g", ingredient: "cheddar cheese" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "sour cream", quantity: { amount: 150, unit: "ml", ingredient: "sour cream" } },
      { name: "black olives", quantity: { amount: 100, unit: "g", ingredient: "black olives" } },
      { name: "avocado", quantity: { amount: 1, unit: "pieces", ingredient: "avocado" } },
      { name: "cilantro", quantity: { amount: 20, unit: "g", ingredient: "cilantro" } }
    ],
    time: 60,
    steps: [
      "Shred cooked chicken and mix with onion.",
      "Dip tortillas in enchilada sauce to soften.",
      "Fill with chicken and cheese, roll up.",
      "Place in baking dish, cover with remaining sauce and cheese.",
      "Bake at 180°C for 20 minutes, garnish with toppings."
    ]
  },
  {
    id: "wc76",
    name: "Guacamole",
    cuisine: "Mexican",
    mood: "Party",
    allergens: [],
    price: "$",
    ingredients: [
      { name: "avocados", quantity: { amount: 4, unit: "pieces", ingredient: "avocados" } },
      { name: "lime juice", quantity: { amount: 60, unit: "ml", ingredient: "lime juice" } },
      { name: "tomato", quantity: { amount: 2, unit: "pieces", ingredient: "tomato" } },
      { name: "red onion", quantity: { amount: 1, unit: "pieces", ingredient: "red onion" } },
      { name: "jalapeño", quantity: { amount: 1, unit: "pieces", ingredient: "jalapeño" } },
      { name: "cilantro", quantity: { amount: 30, unit: "g", ingredient: "cilantro" } },
      { name: "garlic", quantity: { amount: 2, unit: "cloves", ingredient: "garlic" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "tortilla chips", quantity: { amount: 200, unit: "g", ingredient: "tortilla chips" } }
    ],
    time: 15,
    steps: [
      "Mash avocados in a bowl until smooth but chunky.",
      "Finely dice tomato, onion, jalapeño, and cilantro.",
      "Add lime juice, garlic, and salt to avocados.",
      "Fold in diced vegetables gently.",
      "Serve immediately with tortilla chips."
    ]
  },
  {
    id: "wc77",
    name: "Churros",
    cuisine: "Mexican",
    mood: "Indulgent",
    allergens: ["gluten", "eggs"],
    price: "$$",
    ingredients: [
      { name: "all-purpose flour", quantity: { amount: 200, unit: "g", ingredient: "all-purpose flour" } },
      { name: "water", quantity: { amount: 250, unit: "ml", ingredient: "water" } },
      { name: "butter", quantity: { amount: 60, unit: "g", ingredient: "butter" } },
      { name: "sugar", quantity: { amount: 30, unit: "g", ingredient: "sugar" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "vanilla extract", quantity: { amount: 1, unit: "tsp", ingredient: "vanilla extract" } },
      { name: "cinnamon sugar", quantity: { amount: 100, unit: "g", ingredient: "cinnamon sugar" } },
      { name: "vegetable oil", quantity: { amount: 500, unit: "ml", ingredient: "vegetable oil" } }
    ],
    time: 45,
    steps: [
      "Bring water, butter, sugar, and salt to boil.",
      "Add flour and stir until dough forms.",
      "Beat in eggs and vanilla until smooth.",
      "Pipe dough into hot oil in churro shapes.",
      "Fry until golden, roll in cinnamon sugar."
    ]
  },
  {
    id: "wc78",
    name: "Pozole",
    cuisine: "Mexican",
    mood: "Hearty",
    allergens: [],
    price: "$$",
    ingredients: [
      { name: "pork shoulder", quantity: { amount: 800, unit: "g", ingredient: "pork shoulder" } },
      { name: "hominy", quantity: { amount: 400, unit: "g", ingredient: "hominy" } },
      { name: "chicken stock", quantity: { amount: 1500, unit: "ml", ingredient: "chicken stock" } },
      { name: "onion", quantity: { amount: 2, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "dried chilies", quantity: { amount: 4, unit: "pieces", ingredient: "dried chilies" } },
      { name: "oregano", quantity: { amount: 2, unit: "tsp", ingredient: "oregano" } },
      { name: "lime", quantity: { amount: 4, unit: "pieces", ingredient: "lime" } },
      { name: "radishes", quantity: { amount: 100, unit: "g", ingredient: "radishes" } },
      { name: "cabbage", quantity: { amount: 200, unit: "g", ingredient: "cabbage" } }
    ],
    time: 180,
    steps: [
      "Simmer pork with onion and garlic for 2 hours.",
      "Add hominy and continue cooking for 30 minutes.",
      "Toast and rehydrate dried chilies, blend to paste.",
      "Add chili paste and oregano to soup.",
      "Serve with lime wedges, radishes, and cabbage."
    ]
  },
  {
    id: "wc79",
    name: "Quesadillas",
    cuisine: "Mexican",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$",
    ingredients: [
      { name: "flour tortillas", quantity: { amount: 8, unit: "pieces", ingredient: "flour tortillas" } },
      { name: "cheddar cheese", quantity: { amount: 300, unit: "g", ingredient: "cheddar cheese" } },
      { name: "monterey jack", quantity: { amount: 200, unit: "g", ingredient: "monterey jack" } },
      { name: "chicken", quantity: { amount: 300, unit: "g", ingredient: "chicken" } },
      { name: "bell peppers", quantity: { amount: 2, unit: "pieces", ingredient: "bell peppers" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "salsa", quantity: { amount: 200, unit: "ml", ingredient: "salsa" } },
      { name: "sour cream", quantity: { amount: 150, unit: "ml", ingredient: "sour cream" } },
      { name: "vegetable oil", quantity: { amount: 30, unit: "ml", ingredient: "vegetable oil" } }
    ],
    time: 25,
    steps: [
      "Sauté chicken with peppers and onion until cooked.",
      "Place cheese and chicken mixture on half of tortilla.",
      "Fold tortilla over and press gently.",
      "Cook in hot skillet until cheese melts and tortilla is golden.",
      "Cut into wedges and serve with salsa and sour cream."
    ]
  },
  {
    id: "wc80",
    name: "Chiles Rellenos",
    cuisine: "Mexican",
    mood: "Adventurous",
    allergens: ["gluten", "eggs", "dairy"],
    price: "$$",
    ingredients: [
      { name: "poblano peppers", quantity: { amount: 6, unit: "pieces", ingredient: "poblano peppers" } },
      { name: "queso fresco", quantity: { amount: 300, unit: "g", ingredient: "queso fresco" } },
      { name: "eggs", quantity: { amount: 4, unit: "eggs", ingredient: "eggs" } },
      { name: "flour", quantity: { amount: 100, unit: "g", ingredient: "flour" } },
      { name: "tomatoes", quantity: { amount: 400, unit: "g", ingredient: "tomatoes" } },
      { name: "onion", quantity: { amount: 1, unit: "pieces", ingredient: "onion" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "vegetable oil", quantity: { amount: 200, unit: "ml", ingredient: "vegetable oil" } },
      { name: "rice", quantity: { amount: 200, unit: "g", ingredient: "rice" } }
    ],
    time: 75,
    steps: [
      "Roast poblano peppers until charred, peel and slit.",
      "Stuff peppers with queso fresco and secure with toothpicks.",
      "Separate eggs and beat whites to stiff peaks, fold in yolks.",
      "Dust peppers with flour, dip in egg batter, and fry.",
      "Serve with tomato sauce and rice."
    ]
  },
  {
    id: "wc81",
    name: "Horchata",
    cuisine: "Mexican",
    mood: "Refreshment",
    allergens: [],
    price: "$",
    ingredients: [
      { name: "white rice", quantity: { amount: 200, unit: "g", ingredient: "white rice" } },
      { name: "almonds", quantity: { amount: 100, unit: "g", ingredient: "almonds" } },
      { name: "cinnamon sticks", quantity: { amount: 2, unit: "pieces", ingredient: "cinnamon sticks" } },
      { name: "vanilla extract", quantity: { amount: 2, unit: "tsp", ingredient: "vanilla extract" } },
      { name: "sugar", quantity: { amount: 150, unit: "g", ingredient: "sugar" } },
      { name: "water", quantity: { amount: 1000, unit: "ml", ingredient: "water" } },
      { name: "milk", quantity: { amount: 500, unit: "ml", ingredient: "milk" } },
      { name: "ice cubes", quantity: { amount: 20, unit: "pieces", ingredient: "ice cubes" } }
    ],
    time: 480,
    steps: [
      "Soak rice, almonds, and cinnamon in water for 8 hours.",
      "Blend mixture until smooth and strain through cheesecloth.",
      "Add sugar, vanilla, and milk to strained liquid.",
      "Chill in refrigerator for 2 hours.",
      "Serve over ice with a sprinkle of cinnamon."
    ]
  },
  {
    id: "wc82",
    name: "Tamales",
    cuisine: "Mexican",
    mood: "Celebration",
    allergens: ["gluten"],
    price: "$$",
    ingredients: [
      { name: "masa harina", quantity: { amount: 400, unit: "g", ingredient: "masa harina" } },
      { name: "corn husks", quantity: { amount: 20, unit: "pieces", ingredient: "corn husks" } },
      { name: "pork shoulder", quantity: { amount: 500, unit: "g", ingredient: "pork shoulder" } },
      { name: "chili powder", quantity: { amount: 2, unit: "tsp", ingredient: "chili powder" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "cumin", quantity: { amount: 1, unit: "tsp", ingredient: "cumin" } },
      { name: "lard", quantity: { amount: 100, unit: "g", ingredient: "lard" } },
      { name: "chicken stock", quantity: { amount: 300, unit: "ml", ingredient: "chicken stock" } },
      { name: "salsa verde", quantity: { amount: 200, unit: "ml", ingredient: "salsa verde" } }
    ],
    time: 240,
    steps: [
      "Soak corn husks in warm water for 1 hour.",
      "Cook pork with spices until tender and shred.",
      "Mix masa with lard and stock to form dough.",
      "Spread masa on husks, add pork filling, and wrap.",
      "Steam tamales for 1 hour until masa is firm."
    ]
  },
  {
    id: "wc83",
    name: "Flan",
    cuisine: "Mexican",
    mood: "Indulgent",
    allergens: ["dairy", "eggs"],
    price: "$$",
    ingredients: [
      { name: "sugar", quantity: { amount: 200, unit: "g", ingredient: "sugar" } },
      { name: "eggs", quantity: { amount: 6, unit: "eggs", ingredient: "eggs" } },
      { name: "condensed milk", quantity: { amount: 400, unit: "ml", ingredient: "condensed milk" } },
      { name: "evaporated milk", quantity: { amount: 400, unit: "ml", ingredient: "evaporated milk" } },
      { name: "vanilla extract", quantity: { amount: 2, unit: "tsp", ingredient: "vanilla extract" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "water", quantity: { amount: 60, unit: "ml", ingredient: "water" } }
    ],
    time: 120,
    steps: [
      "Caramelize sugar in ramekins until golden brown.",
      "Whisk eggs, milks, vanilla, and salt until smooth.",
      "Pour custard mixture over caramel.",
      "Bake in water bath at 160°C for 45 minutes.",
      "Chill for 4 hours, invert to serve."
    ]
  },
  {
    id: "wc84",
    name: "Ceviche",
    cuisine: "Mexican",
    mood: "Healthy",
    allergens: ["fish"],
    price: "$$$",
    ingredients: [
      { name: "fresh fish", quantity: { amount: 500, unit: "g", ingredient: "fresh fish" } },
      { name: "lime juice", quantity: { amount: 200, unit: "ml", ingredient: "lime juice" } },
      { name: "lemon juice", quantity: { amount: 100, unit: "ml", ingredient: "lemon juice" } },
      { name: "red onion", quantity: { amount: 1, unit: "pieces", ingredient: "red onion" } },
      { name: "tomatoes", quantity: { amount: 2, unit: "pieces", ingredient: "tomatoes" } },
      { name: "jalapeño", quantity: { amount: 1, unit: "pieces", ingredient: "jalapeño" } },
      { name: "cilantro", quantity: { amount: 30, unit: "g", ingredient: "cilantro" } },
      { name: "avocado", quantity: { amount: 1, unit: "pieces", ingredient: "avocado" } },
      { name: "tortilla chips", quantity: { amount: 150, unit: "g", ingredient: "tortilla chips" } }
    ],
    time: 30,
    steps: [
      "Cut fish into small cubes and place in glass bowl.",
      "Cover fish with lime and lemon juice, marinate for 20 minutes.",
      "Dice onion, tomatoes, jalapeño, and cilantro.",
      "Drain excess citrus juice and mix with vegetables.",
      "Serve with avocado and tortilla chips."
    ]
  },
  {
    id: "wc85",
    name: "Fettuccine Alfredo",
    cuisine: "Italian",
    mood: "Indulgent",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "fettuccine", quantity: { amount: 400, unit: "g", ingredient: "fettuccine" } },
      { name: "butter", quantity: { amount: 100, unit: "g", ingredient: "butter" } },
      { name: "heavy cream", quantity: { amount: 300, unit: "ml", ingredient: "heavy cream" } },
      { name: "parmesan", quantity: { amount: 150, unit: "g", ingredient: "parmesan" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "black pepper", quantity: { amount: 2, unit: "tsp", ingredient: "black pepper" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "parsley", quantity: { amount: 20, unit: "g", ingredient: "parsley" } },
      { name: "nutmeg", quantity: { amount: 1, unit: "tsp", ingredient: "nutmeg" } }
    ],
    time: 25,
    steps: [
      "Cook fettuccine in salted water until al dente.",
      "Melt butter in large pan and sauté garlic.",
      "Add cream and simmer until slightly thickened.",
      "Add parmesan and stir until melted and smooth.",
      "Toss with pasta, season with pepper and nutmeg, garnish with parsley."
    ]
  },
  {
    id: "wc86",
    name: "Pasta Primavera",
    cuisine: "Italian",
    mood: "Healthy",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "penne", quantity: { amount: 400, unit: "g", ingredient: "penne" } },
      { name: "broccoli", quantity: { amount: 200, unit: "g", ingredient: "broccoli" } },
      { name: "carrots", quantity: { amount: 2, unit: "pieces", ingredient: "carrots" } },
      { name: "bell peppers", quantity: { amount: 2, unit: "pieces", ingredient: "bell peppers" } },
      { name: "zucchini", quantity: { amount: 2, unit: "pieces", ingredient: "zucchini" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } },
      { name: "basil", quantity: { amount: 30, unit: "g", ingredient: "basil" } }
    ],
    time: 30,
    steps: [
      "Cook penne in salted water until al dente.",
      "Sauté garlic in olive oil until fragrant.",
      "Add vegetables and cook until crisp-tender.",
      "Add cooked pasta and toss with olive oil.",
      "Garnish with parmesan and fresh basil."
    ]
  },
  {
    id: "wc87",
    name: "Pasta Puttanesca",
    cuisine: "Italian",
    mood: "Spicy",
    allergens: ["gluten", "fish"],
    price: "$$",
    ingredients: [
      { name: "spaghetti", quantity: { amount: 400, unit: "g", ingredient: "spaghetti" } },
      { name: "tomatoes", quantity: { amount: 400, unit: "g", ingredient: "tomatoes" } },
      { name: "anchovies", quantity: { amount: 50, unit: "g", ingredient: "anchovies" } },
      { name: "capers", quantity: { amount: 30, unit: "g", ingredient: "capers" } },
      { name: "kalamata olives", quantity: { amount: 100, unit: "g", ingredient: "kalamata olives" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "red chili flakes", quantity: { amount: 2, unit: "tsp", ingredient: "red chili flakes" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "parsley", quantity: { amount: 20, unit: "g", ingredient: "parsley" } }
    ],
    time: 25,
    steps: [
      "Cook spaghetti in salted water until al dente.",
      "Sauté garlic and anchovies in olive oil until anchovies dissolve.",
      "Add tomatoes, capers, olives, and chili flakes.",
      "Simmer sauce for 10 minutes until thickened.",
      "Toss with pasta and garnish with parsley."
    ]
  },
  {
    id: "wc88",
    name: "Mac and Cheese",
    cuisine: "American",
    mood: "Comfort",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "macaroni", quantity: { amount: 400, unit: "g", ingredient: "macaroni" } },
      { name: "cheddar cheese", quantity: { amount: 300, unit: "g", ingredient: "cheddar cheese" } },
      { name: "milk", quantity: { amount: 500, unit: "ml", ingredient: "milk" } },
      { name: "butter", quantity: { amount: 60, unit: "g", ingredient: "butter" } },
      { name: "flour", quantity: { amount: 60, unit: "g", ingredient: "flour" } },
      { name: "breadcrumbs", quantity: { amount: 100, unit: "g", ingredient: "breadcrumbs" } },
      { name: "mustard", quantity: { amount: 1, unit: "tsp", ingredient: "mustard" } },
      { name: "paprika", quantity: { amount: 1, unit: "tsp", ingredient: "paprika" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } }
    ],
    time: 35,
    steps: [
      "Cook macaroni in salted water until al dente.",
      "Make roux with butter and flour, add milk gradually.",
      "Add cheese and stir until melted and smooth.",
      "Mix with pasta and transfer to baking dish.",
      "Top with breadcrumbs and bake at 180°C for 15 minutes."
    ]
  },
  {
    id: "wc89",
    name: "Pad Thai",
    cuisine: "Thai",
    mood: "Adventurous",
    allergens: ["gluten", "peanuts", "eggs"],
    price: "$$",
    ingredients: [
      { name: "rice noodles", quantity: { amount: 300, unit: "g", ingredient: "rice noodles" } },
      { name: "shrimp", quantity: { amount: 200, unit: "g", ingredient: "shrimp" } },
      { name: "eggs", quantity: { amount: 2, unit: "eggs", ingredient: "eggs" } },
      { name: "tofu", quantity: { amount: 150, unit: "g", ingredient: "tofu" } },
      { name: "bean sprouts", quantity: { amount: 100, unit: "g", ingredient: "bean sprouts" } },
      { name: "peanuts", quantity: { amount: 50, unit: "g", ingredient: "peanuts" } },
      { name: "tamarind paste", quantity: { amount: 30, unit: "g", ingredient: "tamarind paste" } },
      { name: "fish sauce", quantity: { amount: 30, unit: "ml", ingredient: "fish sauce" } },
      { name: "palm sugar", quantity: { amount: 30, unit: "g", ingredient: "palm sugar" } }
    ],
    time: 30,
    steps: [
      "Soak rice noodles in warm water for 30 minutes.",
      "Stir-fry shrimp and tofu until cooked.",
      "Push ingredients aside and scramble eggs.",
      "Add noodles, tamarind, fish sauce, and sugar.",
      "Toss with bean sprouts and peanuts, serve hot."
    ]
  },
  {
    id: "wc90",
    name: "Pasta Carbonara",
    cuisine: "Italian",
    mood: "Classic",
    allergens: ["gluten", "eggs", "dairy"],
    price: "$$",
    ingredients: [
      { name: "spaghetti", quantity: { amount: 400, unit: "g", ingredient: "spaghetti" } },
      { name: "pancetta", quantity: { amount: 200, unit: "g", ingredient: "pancetta" } },
      { name: "eggs", quantity: { amount: 4, unit: "eggs", ingredient: "eggs" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } },
      { name: "pecorino", quantity: { amount: 100, unit: "g", ingredient: "pecorino" } },
      { name: "black pepper", quantity: { amount: 2, unit: "tsp", ingredient: "black pepper" } },
      { name: "garlic", quantity: { amount: 2, unit: "cloves", ingredient: "garlic" } },
      { name: "olive oil", quantity: { amount: 30, unit: "ml", ingredient: "olive oil" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } }
    ],
    time: 25,
    steps: [
      "Cook spaghetti in salted water until al dente.",
      "Fry pancetta until crispy, add garlic.",
      "Whisk eggs with grated cheeses and pepper.",
      "Add hot pasta to pancetta, remove from heat.",
      "Quickly toss with egg mixture to create creamy sauce."
    ]
  },
  {
    id: "wc91",
    name: "Pasta Arrabbiata",
    cuisine: "Italian",
    mood: "Spicy",
    allergens: ["gluten"],
    price: "$$",
    ingredients: [
      { name: "penne", quantity: { amount: 400, unit: "g", ingredient: "penne" } },
      { name: "tomatoes", quantity: { amount: 400, unit: "g", ingredient: "tomatoes" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "red chili peppers", quantity: { amount: 3, unit: "pieces", ingredient: "red chili peppers" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "parsley", quantity: { amount: 20, unit: "g", ingredient: "parsley" } },
      { name: "basil", quantity: { amount: 20, unit: "g", ingredient: "basil" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } }
    ],
    time: 25,
    steps: [
      "Cook penne in salted water until al dente.",
      "Sauté garlic and chili peppers in olive oil.",
      "Add tomatoes and simmer for 15 minutes.",
      "Season with salt and add herbs.",
      "Toss with pasta and serve with parmesan."
    ]
  },
  {
    id: "wc92",
    name: "Pasta alla Norma",
    cuisine: "Italian",
    mood: "Classic",
    allergens: ["gluten", "dairy"],
    price: "$$",
    ingredients: [
      { name: "rigatoni", quantity: { amount: 400, unit: "g", ingredient: "rigatoni" } },
      { name: "eggplant", quantity: { amount: 2, unit: "pieces", ingredient: "eggplant" } },
      { name: "tomatoes", quantity: { amount: 400, unit: "g", ingredient: "tomatoes" } },
      { name: "ricotta salata", quantity: { amount: 100, unit: "g", ingredient: "ricotta salata" } },
      { name: "basil", quantity: { amount: 30, unit: "g", ingredient: "basil" } },
      { name: "garlic", quantity: { amount: 4, unit: "cloves", ingredient: "garlic" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "black pepper", quantity: { amount: 1, unit: "tsp", ingredient: "black pepper" } }
    ],
    time: 35,
    steps: [
      "Salt eggplant slices and let drain for 30 minutes.",
      "Fry eggplant in olive oil until golden and crispy.",
      "Sauté garlic and add tomatoes, simmer for 15 minutes.",
      "Cook rigatoni in salted water until al dente.",
      "Toss pasta with sauce, eggplant, and grated ricotta salata."
    ]
  },
  {
    id: "wc93",
    name: "Pasta with Pesto",
    cuisine: "Italian",
    mood: "Fresh",
    allergens: ["gluten", "nuts"],
    price: "$$",
    ingredients: [
      { name: "linguine", quantity: { amount: 400, unit: "g", ingredient: "linguine" } },
      { name: "basil", quantity: { amount: 100, unit: "g", ingredient: "basil" } },
      { name: "pine nuts", quantity: { amount: 50, unit: "g", ingredient: "pine nuts" } },
      { name: "parmesan", quantity: { amount: 100, unit: "g", ingredient: "parmesan" } },
      { name: "garlic", quantity: { amount: 3, unit: "cloves", ingredient: "garlic" } },
      { name: "olive oil", quantity: { amount: 120, unit: "ml", ingredient: "olive oil" } },
      { name: "lemon juice", quantity: { amount: 15, unit: "ml", ingredient: "lemon juice" } },
      { name: "salt", quantity: { amount: 1, unit: "tsp", ingredient: "salt" } },
      { name: "black pepper", quantity: { amount: 1, unit: "tsp", ingredient: "black pepper" } }
    ],
    time: 20,
    steps: [
      "Toast pine nuts in dry pan until golden.",
      "Blend basil, pine nuts, garlic, and parmesan.",
      "Gradually add olive oil while blending to smooth paste.",
      "Cook linguine in salted water until al dente.",
      "Toss pasta with pesto, lemon juice, and seasonings."
    ]
  },
  {
    id: "wc94",
    name: "Pasta with Clams",
    cuisine: "Italian",
    mood: "Seafood",
    allergens: ["gluten", "shellfish"],
    price: "$$$",
    ingredients: [
      { name: "linguine", quantity: { amount: 400, unit: "g", ingredient: "linguine" } },
      { name: "clams", quantity: { amount: 500, unit: "g", ingredient: "clams" } },
      { name: "garlic", quantity: { amount: 6, unit: "cloves", ingredient: "garlic" } },
      { name: "white wine", quantity: { amount: 200, unit: "ml", ingredient: "white wine" } },
      { name: "olive oil", quantity: { amount: 60, unit: "ml", ingredient: "olive oil" } },
      { name: "parsley", quantity: { amount: 30, unit: "g", ingredient: "parsley" } },
      { name: "red chili flakes", quantity: { amount: 1, unit: "tsp", ingredient: "red chili flakes" } },
      { name: "lemon", quantity: { amount: 1, unit: "pieces", ingredient: "lemon" } },
      { name: "butter", quantity: { amount: 30, unit: "g", ingredient: "butter" } }
    ],
    time: 30,
    steps: [
      "Scrub clams and discard any that don't close.",
      "Sauté garlic and chili in olive oil.",
      "Add clams and white wine, cover and steam until open.",
      "Cook linguine in salted water until al dente.",
      "Toss pasta with clam sauce, parsley, and lemon juice."
    ]
  }
]; 