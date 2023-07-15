import * as React from "react";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ChevronRight from '@mui/icons-material/ChevronRight';


export function Home() {
  const openInCurrentTab = (url) => {
    window.open(url, "_self", "noreferrer");
  };
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to leap into the future?
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 0 }}>
          <Typography variant="body1">
            Unlock the full potential of the blockchain revolution. Learn DFINITY provides an
            engaging and comprehensive platform for learning about the world's first scalable,
            public, and open blockchain: The Internet Computer. From the basics of the blockchain
            technology to building advanced DFINITY apps, this is your one-stop solution.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} style={{ paddingTop: 40 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Resources
          </Typography>
          <List>
            <ListItem disablePadding onClick={() => openInCurrentTab("https://www.youtube.com/DFINITY")}>
              <ListItemButton>
                <ListItemText primary="Educational videos" />
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => openInCurrentTab("https://www.womeninblockchaincanada.com/")}>
              <ListItemButton>
                <ListItemText primary="Quizzes" />
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => openInCurrentTab("https://www.womeninblockchaincanada.com/")}>
              <ListItemButton>
                <ListItemText primary="Earn NFT certificates" />
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => openInCurrentTab("https://dfinity.org/events-and-news/")}>
              <ListItemButton>
                <ListItemText primary="News" />
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => openInCurrentTab("https://dfinity.org/events-and-news/")}>
              <ListItemButton>
                <ListItemText primary="Events" />
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => openInCurrentTab("https://t.me/+HQTY4RWsbNcyOTM5")}>
              <ListItemButton>
                <ListItemText primary="Get in touch" />
                <IconButton edge="end">
                  <ChevronRight />
                </IconButton>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}