import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import { Favorite, FavoriteBorder, Share, Delete } from '@mui/icons-material';

function Navbar() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' , ml: '15px' }}>

        <IconButton color="inherit" aria-label="Share">
          <Share />
        </IconButton>
        <IconButton color="inherit" onClick={handleLikeClick}>
        {isLiked ? (
          <Favorite />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>
        <IconButton color="inherit" aria-label="Delete">
          <Delete />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
