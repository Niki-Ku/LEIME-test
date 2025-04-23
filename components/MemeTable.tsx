"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Button } from "@heroui/button";
import { useCallback } from "react";

import { IMeme } from "@/types";

const MemeTable = ({
  memes,
  columns,
  onEditPress,
}: {
  memes: IMeme[];
  columns: { key: string; label: string }[];
  onEditPress: (id: number) => void;
}) => {
  const renderCell = useCallback((meme: IMeme, columns: React.Key) => {
    const cellValue = meme[columns as keyof IMeme];

    switch (columns) {
      case "actions":
        return <Button onPress={() => onEditPress(meme.id)}>Edit</Button>;
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with dynamic content" className="my-6">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={memes}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MemeTable;
