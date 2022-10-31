import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../components/TableData.css"

function createData(
  id,
  symbol,
  name,
  image,
  price,
  rank,
  marketcap,
  price_24h_percentage_change,
  price_7d_percentage_change
) {
  return {
    id,
    symbol,
    name,
    image,
    price,
    rank,
    marketcap,
    price_24h_percentage_change,
    price_7d_percentage_change,
  };
}

// Raw data
const rows = [
  createData(
    "btc-bitcoin",
    "BTC",
    "Bitcoin",
    "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    8348.43,
    1,
    150175942288,
    0,
    3.07
  ),
  createData(
    "BTC/USDT",
    "Binance",
    "Binance",
    "https://images.unsplash.com/photo-1624438253998-7bb8eca8a3f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    8355.19,
    2,
    1.7,
    199252313.64
  ),
  createData(
    "coinbase-pro",
    "Coinbase Pro",
    "Coinbase Pro",
    "https://images.unsplash.com/photo-1625726123977-d4ce5ddd816a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "NAN",
    51,
    0.35,
    23,
    12
  ),
];

const TableData = () => {
  return (
    <>
      <div style={{ width: "100%", fontSize: "1.5em" }}>
        {/*  <TableContainer
          component={Paper}
          style={{ width: 1500, margin: "auto" }}
        >
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="a dense table"
            className="text-center sm:text-left"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Symbol</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Rank</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">Price Diffrence of 24H in %</TableCell>
                <TableCell align="right">
                  Price Diffrence of 7days in %
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.symbol}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">
                    <img src={row.image} style={{ height: "50px" }} />
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.rank}</TableCell>
                  <TableCell align="right">{row.marketcap}</TableCell>
                  <TableCell align="right">
                    {row.price_24h_percentage_change}%
                  </TableCell>
                  <TableCell align="right">
                    {row.price_7d_percentage_change}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}

        <div class="flex items-center justify-center">
          <div class="container">
            <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead class="text-white">
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-left">Email</th>
                  <th class="p-3 text-left" width="110px">
                    Actions
                  </th>
                </tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-left">Email</th>
                  <th class="p-3 text-left" width="110px">
                    Actions
                  </th>
                </tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-left">Email</th>
                  <th class="p-3 text-left" width="110px">
                    Actions
                  </th>
                </tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th class="p-3 text-left">Name</th>
                  <th class="p-3 text-left">Email</th>
                  <th class="p-3 text-left" width="110px">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="flex-1 sm:flex-none">
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    John Covv
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    contato@johncovv.com
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Delete
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    Michael Jackson
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    m_jackson@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Delete
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    Julia
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    julia@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Delete
                  </td>
                </tr>
                <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td class="border-grey-light border hover:bg-gray-100 p-3">
                    Martin Madrazo
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    martin.madrazo@mail.com
                  </td>
                  <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Delete
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
