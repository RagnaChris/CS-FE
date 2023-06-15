import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";
import { IconMapPin } from "@tabler/icons-react";

export default function ProjectsTable() {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>#</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Project ID</TableHeaderCell>
            <TableHeaderCell>Date Submitted</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Financing</TableHeaderCell>
            <TableHeaderCell>Carbon Credits</TableHeaderCell>
            <TableHeaderCell>Date Closed</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from(Array(10).keys()).map((idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Text>1</Text>
              </TableCell>
              <TableCell>
                <Text className={"flex flex-col"}>
                  <span>Green Valley</span>
                  <span>Solar Farm</span>
                </Text>
              </TableCell>
              <TableCell>
                <Text>East Asia</Text>
              </TableCell>
              <TableCell>
                <Text>123456789</Text>
              </TableCell>
              <TableCell>
                <Text>10/02/2023</Text>
              </TableCell>
              <TableCell>
                <Text className={"flex flex-col items-center gap-1"}>
                  <IconMapPin
                    className={`h-5 w-5 rounded-full bg-emerald-500 p-1 text-black`}
                  />
                  <span className={"text-sm"}>Completed</span>
                </Text>
              </TableCell>
              <TableCell>
                <Text>$2,500,000</Text>
              </TableCell>
              <TableCell>
                <Text>656,167</Text>
              </TableCell>
              <TableCell>
                <Text>10/02/2023</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
