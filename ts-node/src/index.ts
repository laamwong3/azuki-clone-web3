import client from "https";
import * as fs from "fs";
import nodeFetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

//fetch azuki metadata
//download 100 images for project

interface Metadata {
  name: string;
  image: string;
  description: string;
  attributes: Attribute[];
}

interface Attribute {
  trait_type: string;
  value: string;
}

const contractAddress = "0xED5AF388653567Af2F388E6224dC7C4b3241C544"; //Azuki

const frontendPath = "../../constants/azuki/images";
const backendDataPath = "./data";
const backendImagePath = "./images";

const fetchMetadata = async () => {
  const url = `https://deep-index.moralis.io/api/v2/nft/${contractAddress}?chain=eth&format=decimal&limit=50`;
  nodeFetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-Key": process.env.X_API_KEY ?? "",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      fs.writeFileSync(
        `${backendDataPath}/rawData.json`,
        JSON.stringify(data, null, 2)
      );
    })
    .catch((e) => console.log(e));
};

const retrieveTokenUri = async () => {
  const rawMetadata = await import("./data/rawData.json");
  let tempObj = {} as { data: string[] };
  tempObj.data = [];

  rawMetadata.result.map((data) => {
    tempObj.data.push(JSON.parse(data.metadata));
    // tempArr.push(JSON.parse(data.metadata));
  });
  fs.writeFileSync(
    `${backendDataPath}/tokenUri.json`,
    JSON.stringify(tempObj, null, 2)
  );
};

const downloadImages = async () => {
  const tokenUri = await import("./data/tokenUri.json");
  let metadata: Metadata[] = [];

  await Promise.all(
    tokenUri.data.map((data, index) => {
      client.get(data.image, (res) => {
        res.pipe(
          fs.createWriteStream(`${frontendPath}/azuki-${index + 1}.png`)
        );
      });
      metadata.push({
        name: `Azuki #${index + 1}`,
        description: "Created by Azuki team",
        image: `azuki-${index + 1}.png`,
        attributes: data.attributes,
      });
    })
  ).then(() => {
    fs.writeFileSync(
      `${frontendPath}/metadata.json`,
      JSON.stringify(metadata, null, 2)
    );
  });
};

const clean = async () => {
  new Promise(() => {
    if (fs.existsSync(backendImagePath)) {
      fs.rm(backendImagePath, { recursive: true, force: true }, (err) => {
        if (err) {
          console.log(err);
        } else {
          fs.mkdirSync(backendImagePath);
        }
      });
    }
  });

  // if (fs.existsSync(backendDataPath)) {
  //   fs.rm(backendDataPath, { recursive: true, force: true }, (err) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       fs.mkdirSync(backendDataPath);
  //     }
  //   });
  // }
};

(async () => {
  fetchMetadata().then(() => retrieveTokenUri().then(() => downloadImages()));

  // retrieveTokenUri();
  // await downloadImages();
})().catch((e) => console.log(e));
