import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Toolbar, Box, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ p: -1 }}>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={5}
          >
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
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </div>
  );
};

export default Navbar;
