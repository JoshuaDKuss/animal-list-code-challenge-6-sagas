# React Redux with Sagas

You have been provided with data for a small Zoo. Your web app should display all of the animal species along with the class for that species. Please read all instructions before you get started.

> NOTE: You should only need to modify **two** files for this checkpoint (`src/index.js` and `server/routers/zoo.router.js`).

## Setup

1. Create a database table named `zoo_animals`
1. Run the following SQL using the `zoo_animals` database:

    ```SQL
    CREATE TABLE "class" (
        "id" SERIAL PRIMARY KEY,
        "class_name" varchar(255) NOT NULL
    );

    CREATE TABLE "species" (
        "id" SERIAL PRIMARY KEY,
        "species_name" varchar(255) NOT NULL,
        "class_id" INT REFERENCES "class"
    );

    INSERT INTO "class" ("class_name") 
    VALUES ('Mammal'), ('Bird'), ('Fish'), ('Reptile'), ('Amphibian');

    INSERT INTO "species" ("species_name", "class_id") 
    VALUES ('Blue Spiny Lizard', 4), ('Murray River Turtle', 4), 
    ('Tomato Frog', 5), ('Wyoming Toad', 5), 
    ('Tiger Salamander', 5), ('Freshwater Catfish', 3), 
    ('Sarus Crane', 2), ('Great Horned Owl', 2), 
    ('Magpie Robin', 2), ('Toco Toucan', 2), 
    ('Northern Pintail Duck', 2), ('Blue-winged Teal', 2),
    ('Dwarf Mongoose', 1), ('Moutain Goat', 1),
    ('Guinea Pig', 1), ('Red Kangaroo', 1), 
    ('Tammar Wallaby', 1), ('Koala', 1), 
    ('Dwarf Zebu', 1), ('Red Panda', 1);
    ```

1. `npm install`
1. `npm run server`
1. `npm run client`

## Task List

- [ ] Write your SQL in the `routes/zoo.router.js` file.
- [ ] Add a Saga in the `index.js` file for making your `GET` request. It should listen for the action type of `GET_ZOO_ANIMALS`.

## Sample Output

When the Saga and router are working as expected, the page should display the following:

| Species | Class |
|---|---|
| Blue Spiny Lizard | Reptile |
| Murray River Turtle | Reptile |
| Tomato Frog | Amphibian |
| Wyoming Toad | Amphibian |
| Tiger Salamander | Amphibian |
| Freshwater Catfish | Fish |
| Sarus Crane | Bird |
| Great Horned Owl | Bird |
| Magpie Robin | Bird |
| Toco Toucan | Bird |
| Northern Pintail Duck | Bird |
| Blue-winged Teal | Bird |
| Dwarf Mongoose | Mammal |
| Moutain Goat | Mammal |
| ... | ... |

## Stretch Goal

> NOTE: Please commit your code before moving on to the stretch goals.

- [ ] Create a form that allows the Zookeeper to add a new animal
- [ ] Add ability to transfer an animal to a different zoo (remove them from the database)
- [ ] Create a form that allows the Zookeeper to add new class
