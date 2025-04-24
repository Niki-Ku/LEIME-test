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
        return (
          <Button
            color="secondary"
            size="sm"
            onPress={() => onEditPress(meme.id)}
          >
            Edit
          </Button>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with dynamic content"
      className="my-6 "
      classNames={{
        wrapper: "w-full md:w-auto p-0 sm:p-4 ",
      }}
      isVirtualized={memes.length > 100}
      maxTableHeight={500}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={memes}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell
                className={`px-[4px] sm:px-3 text-xs md:text-sm ${
                  columnKey === "imgUrl"
                    ? "max-w-[120px] xs:max-w-[170px] sm:max-w-[300px] md:max-w-[400px] xl:max-w-[1200px] overflow-hidden"
                    : ""
                }`}
              >
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default MemeTable;
