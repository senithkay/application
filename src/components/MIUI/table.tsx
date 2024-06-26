import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {Badge, TableHead} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 100 },
    { id: 'notes', label: 'Additional Notes', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 50, align:'center' },
    { id: 'action', label: 'Action', minWidth: 50 },

];

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(name: string, date: string, notes:string, status: string, action:string) {
    return { name, date, notes, status, action };
}

const rows = [
    createData('Blue gem ', '2020-02-21', 'No additional Notes', 'pending', 'track'),
    createData('Red Gem', '2020-02-21', 'No additional Notes', 'confirmed', 'track'),
    createData('Sapha Gem', '2020-02-21', 'No additional Notes', 'cancelled', 'track'),
    createData('Metal Gem', '2020-02-21', 'No additional Notes', 'shipped', 'track'),

].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function CustomPaginationActionsTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer sx={{boxShadow:'none'}} component={Paper}>
            <Table  aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ top: 57, minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                    ).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell style={{ width: 100 }} align="left">
                                {row.name}
                            </TableCell>
                            <TableCell style={{ width: 100 }} align="left">
                                {row.date}
                            </TableCell>
                            <TableCell style={{ width: 170 }} align="left">
                                {row.notes}
                            </TableCell>
                            <TableCell style={{ width: 50 }} align="center">
                              <Status status={row.status}/>
                            </TableCell>
                            <TableCell style={{ width: 50 }} align="left">
                                <span className={'flex justify-center w-fit'}>
                                    <IconButton size="small" aria-label="show 4 new mails" color="inherit" >
                                       <LocationSearchingIcon/>
                                    </IconButton>
                                    {row.status!=='shipped'?<IconButton size="small" aria-label="show 4 new mails" color="inherit" >
                                        <CancelIcon/>
                                    </IconButton>
                                        :<></>}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                },
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
const statusColorMap:{[index: string]:any} = {
    'pending': 'bg-yellow-500',
    'shipped': 'bg-green-500',
    'cancelled': 'bg-red-500',
    'confirmed': 'bg-blue-500'
}

const Status = ({status}:{status:string})=>{
    return (
        <span className={`${statusColorMap[status]} w-fit h-fit text-white py-[5px] px-[10px] rounded-2xl`}>
            {status}
        </span>
    )
}
