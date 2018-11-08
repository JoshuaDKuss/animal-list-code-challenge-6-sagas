# React Redux with Sagas

For this weekend challenge, you'll be building a portfolio site to showcase your work. 

## Setup

1. Create a database table named `zoo_animals`
1. Run the following SQL using the `zoo_animals` database:

```SQL
CREATE TABLE "class" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "species" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "class_id" INT REFERENCES "class"
);

INSERT INTO "class" ("name") 
VALUES ('Mammal'), ('Bird'), ('Fish'), ('Reptile'), ('Amphibian');

INSERT INTO "species" ("name", "class_id") 
VALUES ('Blue Spiny Lizard', 4), ('Murray River Turtle', 4), 
('Tomato Frog', 5), ('Wyoming Toad', 5), 
('Tiger Salamander', 5), ('Freshwater Catfish', 3), 
('Sarus Crane', 2), ('Great Horned Owl', 2), 
('Magpie Robin', 2), ('Toco Toucan', 2), 
('Northern Pintail Duck', 2), ('Blue-winged Teal', 2), 
('Toco Toucan', 2),('Dwarf Mongoose', 1), 
('Guinea Pig', 1), ('Red Kangaroo', 1), 
('Tammar Wallaby', 1), ('Koala', 1), 
('Dwarf Zebu', 1), ('Red Panda', 1),
('Moutain Goat', 1);
```

1. `npm install`
1. `npm run server`
1. `npm run client`

## Description

You have been provided with data for a small Zoo. Your web app should display all of the animal classes along with the total number of species in each class. 

> NOTE: You should only need to modify **two** files for this checkpoint.

- [ ] Write your SQL in the `routes/animal.router.js` file
- [ ] Add a Saga in the `index.js` file for making your `GET` request

## Output

When the Saga and router are working as expected, the page should display the following:

| Class | Number of Species |
|---|---|
| Mammal | 8 |
| Bird | 7 |
| Fish | 1 |
| Reptile | 3 |
| Amphibian | 3 |

<img src="" width="560">


## Stretch Goal

> NOTE: Please commit your code before moving on to the stretch goals.

- [ ] Allow the Zookeeper to add new species
- [ ] Sort the classes from greatest to least number of species