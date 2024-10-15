import * as React from 'react';
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Pagination, Paper, Stack, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { PageLoader } from 'components/loader/PageLoader';

const StyledTableCell = styled(TableCell)(({ theme, headerStyle }) => ({

    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#363636",
        color: theme.palette.common.white,
        border: 0,
        padding: "4px 12px",
        height: "35px",
        ...headerStyle
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height: "50px",
        padding: "8px 12px",
    },
}));

const StyledTableRow = styled(TableRow)(({ }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#1B1B1B",
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    '&:hover': {
        backgroundColor: '#2A2A2A',
    },
}));


export const NormalTable = ({ tableHeader = [], tableData = [], page = 1, totalData = 10, handleChange = () => { }, isLoading = false }) => {
    return (
        <TableContainer component={Paper} sx={{ width: "99%", boxShadow: "0px 10px 20px 0px #00000040", background: "#181818", margin: 'auto' }}>
            <Table sx={{ width: "100%" }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {tableHeader.map((item, index) => {
                            return <StyledTableCell key={index} style={item?.headerStyle}>{item?.label}</StyledTableCell>
                        })}
                    </TableRow>
                </TableHead>
                {isLoading && <TableBody>
                    <TableRow >
                        <TableCell colSpan={tableHeader.length} sx={{ textAlign: "center" }}>
                            <PageLoader />
                        </TableCell>
                    </TableRow>
                </TableBody>}
                {!isLoading && <TableBody>
                    {tableData?.length > 0 && tableData.map((data, index) => {
                        return <StyledTableRow key={index}>
                            {tableHeader?.length > 0 &&
                                tableHeader.map((headerItem, key) => {
                                    let value;
                                    if (headerItem?.type === "text") {
                                        value = data?.[headerItem?.name];
                                    }
                                    if (headerItem?.type === "function") {
                                        value = headerItem?.renderComponent(data);
                                    }
                                    if (headerItem?.type === "index") {
                                        value = index + 1;
                                    }
                                    return <StyledTableCell key={key} style={{ border: "none" }}>
                                        <>{value}</>
                                    </StyledTableCell>;
                                })}
                        </StyledTableRow>
                    })}
                    {tableData.length === 0 && <StyledTableRow><StyledTableCell sx={{ border: "none", textAlign: "center" }} colSpan={tableHeader?.length}>No Items Found</StyledTableCell></StyledTableRow>}
                </TableBody>}
            </Table>
            {!isLoading && totalData > 10 && <Stack spacing={2} pt={2} pb={2} >
                <Pagination sx={{ justifyContent: 'right', display: 'flex' }} count={Math.ceil(totalData / 10)} page={page} onChange={handleChange} variant="text" color="secondary" shape="rounded" />
            </Stack>}
        </TableContainer>
    );
}