import { Typography } from "@mui/material";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>
            {<Typography margin='20px' display='flex' justifyContent='center' variant='h2' color='primary'>...Cargando datos</Typography>}
        </>
  }