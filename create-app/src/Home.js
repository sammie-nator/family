import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/events"
          sx={{ marginTop: 20, background: "black" }}
          variant="contained"
        >
          <Typography variant="h1">View All EVENTS.....</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;