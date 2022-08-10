import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import imageUri from "../constants/azuki/tokenUri.json";

const Content = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    900: {
      items: 5,
    },
  };
  const items = imageUri.data.map((data) => {
    return <Image src={data.image} height={"550"} width="550" />;
  });
  return (
    <>
      <Stack direction={"column"} height={{ md: "100vh" }} width={"100vw"}>
        <Box>
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableButtonsControls
            disableDotsControls
            autoPlay
            infinite
            autoPlayInterval={2000}
            animationDuration={2000}
            mouseTracking
          />
        </Box>
        <Stack flex={1} direction={{ xs: "column", md: "row" }}>
          <Box sx={{ border: "2px solid black" }} flex={1}>
            <Typography variant="h3" fontWeight={"bold"} padding={2}>
              Welcome to Azuki
            </Typography>
            <Typography paragraph variant="h4" padding={2}>
              A collection of 50 avatars that give you membership access to The
              Garden. It starts with exclusive streetwear collabs, NFT drops,
              live events, and much more that will be revealed over time.
              Community ownership in Azuki allows for a new genre of media which
              the world has yet to explore. An Azuki is your identity in the
              metaverse — let's build together. The Garden is a corner of the
              internet where art, community, and culture fuse to create magic.
              The lines between the physical and digital worlds are blurring and
              the rules are being rewritten.
            </Typography>
          </Box>
          <Box sx={{ border: "2px solid black" }} flex={1}></Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Content;
