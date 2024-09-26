import * as React from 'react';
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#363636",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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


export const NormalTable = ({ tableHeader = [], tableData = [] }) => {
    return (
            <Table sx={{ width: "100%" , boxShadow: "0px 10px 20px 0px #00000040"}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {tableHeader.map((item, index) => {
                            return <StyledTableCell key={index} >{item?.label}</StyledTableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
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
                                    return <StyledTableCell key={key} style={{ border: "none" }}>
                                        <>{value}</>
                                    </StyledTableCell>;
                                })}
                        </StyledTableRow>
                    })}
                    {tableData.length === 0 && <StyledTableRow><StyledTableCell sx={{ border: "none" }}>No Items Found</StyledTableCell></StyledTableRow>}
                </TableBody>
            </Table>
    );
}