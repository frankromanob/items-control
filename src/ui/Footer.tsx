import { Box, Divider, Grid, Link } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';


export const FooterPage = () => {

    const redes = [
        { name: "X", link: "https://twitter.com/romanobfrank", icon: <TwitterIcon /> },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/francisco-romano-batista/", icon: <LinkedInIcon /> },
        { name: "GitHub", link: "https://github.com/frankromanob", icon: <GitHubIcon /> },
        { name: "Mail", link: "mailto:romano.fr@gmail.com", icon: <MailIcon/> },
    ]

    return (
        < >
            <Divider light />
            <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                <Grid container justifyContent='end' display='flex' flexDirection='row' marginInlineEnd='50px' >
                    {redes.map(({ name, link, icon }) => (
                        <Grid item key={link} margin='5px'>
                            <Link href={link} target="_blank">
                                {icon}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default FooterPage