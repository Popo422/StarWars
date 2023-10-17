import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

function Navbar() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit" onClick={handleLikeClick}>
          {isLiked ? (
            <Favorite />
          ) : (
            <FavoriteBorder />
          )}
          Like
        </Button>
        <IconButton color="inherit" aria-label="Share">
          <Share />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
