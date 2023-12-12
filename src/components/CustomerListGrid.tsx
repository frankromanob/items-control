'use client'

import { ICustomer } from "@/interfaces"
import { Grid, Link } from "@mui/material"
import { GridColDef, DataGrid } from "@mui/x-data-grid"

import NextLink from 'next/link';


const columns: GridColDef[] = [
    {
        field: 'id', headerName: 'ID', width: 100, headerAlign: 'center',
        renderCell: ({ row }) => {
            return (
                <NextLink href={`/admin/clientes/${row.id}`} passHref legacyBehavior>
                    <Link underline='always'>
                        {row.id}
                    </Link>
                </NextLink>
            )
        }
    },
    { field: 'email', headerName: 'Correo', width: 200 },
    { field: 'firstName', headerName: 'Nombre', width: 100 },
    { field: 'lastName', headerName: 'Apellido', width: 100 },
    { field: 'phone', headerName: 'Teléfono', width: 120, align: 'right', headerAlign: 'right' },
]


export const CustomerListGrid = ({ customers }: { customers: ICustomer[] }) => {

    const rows = customers!.map((customer) => ({
        id: customer._id,
        email: customer.email,
        firstName: customer.firstName,
        lastName: customer.lastName,
        phone: customer.phone,
    }))


    return (
        <Grid container className='fadeIn' >
            <Grid item lg={12} xs={12} sx={{ height: 620, width: '100%' }}>
                <DataGrid sx={{
                    boxShadow: 2,
                    border: 1,
                    borderColor: '#F5F256',
                    color: 'secondary.main',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
                    rows={rows}
                    columns={columns}
                    autoPageSize
                />
            </Grid>
        </Grid>
    )
}
