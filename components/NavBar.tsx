import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Box, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(248, 182, 226)", boxShadow: "none" }}
      >
        <Toolbar sx={{ p: 1 }}>
          <Box sx={{ display: "flexBetween", flexGrow: 1 }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Link href="/">
                <Image src="/logo.jpeg" alt="logo" width={75} height={75} />
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </div>
  );
};

export default Navbar;
