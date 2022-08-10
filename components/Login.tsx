import { Box, Button, Stack } from "@mui/material";
import { useMetamask } from "@thirdweb-dev/react";

const Login = () => {
  const connectWallet = useMetamask();

  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
      >
        <Button variant="contained" onClick={connectWallet}>
          Connect Wallect
        </Button>
      </Stack>
    </>
  );
};

export default Login;
