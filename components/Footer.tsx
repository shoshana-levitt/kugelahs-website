import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button, AppBar, Toolbar, Box, Stack } from "@mui/material";
import { FOOTER_INFO } from "@/constants";

const Footer = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(255, 244, 214);", boxShadow: "none" }}
        sx={{ top: "auto", bottom: 0, p: 0.01 }}
      >
        <Toolbar>
          <Box sx={{ mx: "auto" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              {FOOTER_INFO.map((item) =>
                item.link ? (
                  <Button
                    size="small"
                    startIcon={<item.icon />}
                    href={item.link}
                    target="_blank"
                    disableRipple
                    sx={{
                      color: "black",
                      m: 1,
                      ":hover": {
                        backgroundColor: "transparent",
                        color: "grey",
                      },
                    }}
                    style={{ textTransform: "none" }}
                  >
                    {item.text}
                  </Button>
                ) : (
                  <Button
                    size="small"
                    startIcon={<item.icon />}
                    disableRipple
                    sx={{
                      color: "black",
                      m: 1,
                      ":hover": {
                        backgroundColor: "transparent",
                        cursor: "default",
                      },
                    }}
                    style={{ textTransform: "none" }}
                  >
                    {item.text}
                  </Button>
                )
              )}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </div>
  );
};

export default Footer;
