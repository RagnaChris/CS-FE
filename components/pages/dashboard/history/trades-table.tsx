import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";

export default function TradesTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Symbol</TableHeaderCell>
          <TableHeaderCell>Time</TableHeaderCell>
          <TableHeaderCell>Order Type</TableHeaderCell>
          <TableHeaderCell>Side</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>AVG Price</TableHeaderCell>
          <TableHeaderCell>Executed</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Trigger Condition</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from(Array(25).keys()).map((idx) => (
          <TableRow key={idx}>
            <TableCell>
              <Text>CASAUSD</Text>
            </TableCell>
            <TableCell>
              <Text>10/02/2023 15:33:34</Text>
            </TableCell>
            <TableCell>
              <Text>Market</Text>
            </TableCell>
            <TableCell>
              <Text>Buy</Text>
            </TableCell>
            <TableCell>
              <Text>$458.91</Text>
            </TableCell>
            <TableCell>
              <Text>$458.91</Text>
            </TableCell>
            <TableCell>
              <Text>$458.91</Text>
            </TableCell>
            <TableCell>
              <Text>$458.91</Text>
            </TableCell>
            <TableCell>
              <Text>-</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
