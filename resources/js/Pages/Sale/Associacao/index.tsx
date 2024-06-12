import { MoneyptBR, ValuePercent } from "@/Components/Money";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table";
import { useAuthContext } from "@/Contexts";
import { router } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect } from 'react'

interface AssociationProps {
  data: any;
}

const Association = ({ data }: AssociationProps) => {

  return (
    <Table className="bg-megb-blue-secundary rounded-t-md w-full">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Associação</TableHead>
          <TableHead>Desc. Associação</TableHead>
          <TableHead>Data venda</TableHead>
          <TableHead>Meta</TableHead>
          <TableHead>Venda</TableHead>
          <TableHead>Margem</TableHead>
          <TableHead>Representa</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((assoc: any, idx: number) => (
          <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
            <TableCell>{assoc.id}</TableCell>
            <TableCell>{assoc.assoc}</TableCell>
            <TableCell>{assoc.descassoc}</TableCell>
            <TableCell>{moment(assoc.dtvenda).format("DD/MM/YYYY")}</TableCell>
            <TableCell>{MoneyptBR(assoc.valmeta)}</TableCell>
            <TableCell>{MoneyptBR(assoc.valvenda)}</TableCell>
            <TableCell>{MoneyptBR(assoc.margem)}</TableCell>
            <TableCell>{ValuePercent(assoc.representa)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Association