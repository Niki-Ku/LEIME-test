"use client"

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

import { title } from "@/components/primitives";
import { memes } from "@/config/memes";
import { columns } from "@/config/tableColumns";


export default function TablePage() {
  return (
    <div className="text-center">
      <h1 className={title()}>Table Page</h1>
      <Table aria-label="Example table with dynamic content" className="my-6">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={memes}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
