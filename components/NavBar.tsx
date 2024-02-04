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
        <Toolbar
          sx={{ display: "flex", flexGrow: 1, alignItems: "flex-start" }}
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Link href="/">
              <Image src="/full-logo.png" alt="logo" width={150} height={150} />
            </Link>
          </Box>
          <Stack direction="row" justifyContent="center" spacing={5} mt={3}>
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
