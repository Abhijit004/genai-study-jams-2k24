import { Box, IconButton, Typography, Link } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GdscLogo from "../assets/gdscLogo.png";
import gdgdark from "../assets/gdgdark.png"
import codeIIEST_dark from "../assets/codeIIEST_dark.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
    return (
        <Box sx={{ color: "rgba(255, 255, 255, 0.48)" }}>
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: "hsl(0, 0.00%, 12%)",
                    gap: "1rem",
                    padding: "1rem",
                    alignItems: "center",
                    width: "100%",
                    flexWrap: "wrap",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        gap: "3rem",
                        justifyContent: "center",
                    }}
                >
                    <img src={codeIIEST_dark} style={{ width: "3.5rem" }} alt="codeiiest"/>
                    <img src={gdgdark} style={{ width: "4rem" }} alt="gdg"/>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "hsl(0, 0.00%, 12%)",
                    justifyContent: "center",
                    paddingTop: "1rem",
                }}
            >
                <Typography sx={{ textAlign: "center" }}>
                    Stay in the loop?
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: "0.3rem",
                    }}
                >
                    <IconButton
                        href="https://twitter.com/codeiiest"
                        aria-label="CodeIIEST on Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconhover"
                        sx={{
                            color: "#cdcdcd",
                            transition: "0.5s all",
                            "&:hover": {
                                color: "rgb(27, 171, 255)",
                            },
                        }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        href="https://github.com/CodeIIEST-dev"
                        aria-label="CodeIIEST Github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconhover"
                        sx={{
                            color: "#cdcdcd",
                            transition: "0.5s all",
                            "&:hover": {
                                color: "rgb(27, 171, 255)",
                            },
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        href="https://www.facebook.com/CodeIIEST"
                        aria-label="CodeIIEST on FaceBook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconhover"
                        sx={{
                            color: "#cdcdcd",
                            transition: "0.5s all",
                            "&:hover": {
                                color: "rgb(27, 171, 255)",
                            },
                        }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        href="mailto:codeiiest.iiest@gmail.com"
                        aria-label="CodeIIEST on email"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconhover"
                        sx={{
                            color: "#cdcdcd",
                            transition: "0.5s all",
                            "&:hover": {
                                color: "rgb(27, 171, 255)",
                            },
                        }}
                    >
                        <MailIcon />
                    </IconButton>
                    <IconButton
                        className="iconhover"
                        href="https://www.youtube.com/codeiiest"
                        aria-label="CodeIIEST on YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "#cdcdcd",
                            transition: "0.5s all",
                            "&:hover": {
                                color: "rgb(27, 171, 255)",
                            },
                        }}
                    >
                        <YouTubeIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "0.5rem",
                        paddingTop: "1rem",
                    }}
                >
                    <Typography
                        sx={{
                            color: "rgba(255, 255, 255, 0.48)",
                            fontFamily: "poppins",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        Made with{" "}
                        <FavoriteIcon
                            sx={{
                                color: "red",
                                position: "relative",
                                mx: "0.5rem",
                            }}
                        />{" "}
                        by{" "}
                        <Link
                            className="footerhover"
                            href="https://abhijit-karmakar.vercel.app/"
                            aria-label="Abhijit Karmakar's portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                textDecoration: "none",
                                fontFamily: "poppins",
                                color: "white",
                                px: "0.5rem",
                            }}
                        >
                            Abhijit Karmakar
                        </Link>{" "}
                        and{" "}
                        <Link
                            className="footerhover"
                            href="https://soumyajit-dev.vercel.app/"
                            aria-label="Soumyajit Karmakar's portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                textDecoration: "none",
                                fontFamily: "poppins",
                                color: "white",
                                px: "0.5rem",
                            }}
                        >
                            Soumyajit Karmakar
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
