import React, { useState } from "react";
import { useGetCharactersQuery } from "../state/api";
import { Box, Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useMediaQuery, CircularProgress } from "@mui/material";
import ImageContainer from "./ImageContainer";
import Navbar from "./NavBar";
const Characters = () => {
    // const { data, isLoading } = useGetCharactersQuery();
  const data = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      created: "2014-12-10T15:10:51.357000Z",
      edited: "2014-12-20T21:17:50.309000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      created: "2014-12-10T15:18:20.704000Z",
      edited: "2014-12-20T21:17:50.313000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      created: "2014-12-10T15:20:09.791000Z",
      edited: "2014-12-20T21:17:50.315000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
      created: "2014-12-10T15:52:14.024000Z",
      edited: "2014-12-20T21:17:50.317000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/6.jpg",
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
      created: "2014-12-10T15:53:41.121000Z",
      edited: "2014-12-20T21:17:50.319000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/7.jpg",
    },
    {
      name: "R5-D4",
      height: "97",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      created: "2014-12-10T15:57:50.959000Z",
      edited: "2014-12-20T21:17:50.321000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/8.jpg",
    },
    {
      name: "Biggs Darklighter",
      height: "183",
      mass: "84",
      hair_color: "black",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "24BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      created: "2014-12-10T15:59:50.509000Z",
      edited: "2014-12-20T21:17:50.323000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/9.jpg",
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/20/",
      created: "2014-12-10T16:16:29.192000Z",
      edited: "2014-12-20T21:17:50.325000Z",
      image: "https://starwars-visualguide.com/assets/img/characters/10.jpg",
    },
  ];
  console.log(data || !isLoading);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const Character = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, created, edited, image }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <Card
        sx={{
          backgroundImage: "none",
          borderRadius: "0.5rem",
          display:"grid",
          alignContent:"space-between"

        }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
          </Typography>
          <ImageContainer imageSrc={image} name={name} height={height} gender={gender} birth_year={birth_year}/>
        </CardContent>
        <CardActions>
          <Button variant="primary" size="small" onClick={() => setIsExpanded(!isExpanded)}>
            See Details
          </Button>
        </CardActions>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Box margin="0 0 1rem 1rem">
          <Typography variant="body2">Skin Color: {skin_color} </Typography>
          <Typography variant="body2">Weight: {mass} kg</Typography>
          <Typography variant="body2">Hair: {hair_color}</Typography>
          <Typography variant="body2">Eye Color: {eye_color}</Typography>
          </Box>
        </Collapse>
<Navbar/>
      </Card>
    );
  };
  return (
    <Box margin="1.5rem 2.5rem">
      {data || !isLoading ? (
        <Box
          marginTop="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{ "&>div": { gridColumn: isNonMobile ? undefined : "span 4" } }} //every child component after this element
        >
          {data.map(({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, created, edited, image }) => (
            <Character
              key={crypto.randomUUID()}
              homeworld={homeworld}
              name={name}
              height={height}
              mass={mass}
              birth_year={birth_year}
              hair_color={hair_color}
              skin_color={skin_color}
              eye_color={eye_color}
              gender={gender}
              created={created}
              edited={edited}
              image={image}
            />
          ))}
        </Box>
      ) : (
        <Box justifyContent="center" sx={{ display: "flex", margin: "0 0 0 0" }}>
          <CircularProgress sx={{ width: "12rem !important", height: "12rem !important" }}>
            {" "}
            <Typography sx={{ marginBottom: "1.5rem" }} variant="h5">
              {" "}
              TEST
            </Typography>
          </CircularProgress>
        </Box>
      )}
    </Box>
  );
};

export default Characters;
