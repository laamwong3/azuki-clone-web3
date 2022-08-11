import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cardImage from "../public/Azuki-NFTs.png";
import Image from "next/image";
import { contractAddress } from "../constants/azuki/contract";
import { useNFTCollection, useNFTs } from "@thirdweb-dev/react";
import { Stack } from "@mui/material";

const cardSize = 500;

export default function MintingCard() {
  // const nftCollection = useNFTCollection(contractAddress);
  // const { data: nfts } = useNFTs(nftCollection);

  // console.log(nfts);

  return (
    <Card sx={{ width: cardSize }}>
      <Image src={cardImage} width={cardSize} height={cardSize / 1.5} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          Mint NFTs
        </Typography>
      </CardContent>

      <Stack direction={"row"} justifyContent="center">
        <Button size="large" sx={{ paddingBotton: 30 }}>
          MINT
        </Button>
      </Stack>
    </Card>
  );
}
