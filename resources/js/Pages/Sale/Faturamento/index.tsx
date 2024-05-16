import { MoneyptBR, ValuePercent } from "@/Components/Money"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import moment from "moment"
import React from 'react'
interface FaturamentoProps {
    data: any;
}
const Faturamento = ({data}: FaturamentoProps) => {
  return (
    <Table className="bg-blue-secundary rounded-t-md w-full">
    <TableHeader>
      <TableRow>
        <TableHead>#</TableHead>
        <TableHead>Data venda</TableHead>
        <TableHead>Venda</TableHead>
        <TableHead>Margem</TableHead>
        <TableHead>Representa</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((sale: any, idx: number) => (
        <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
          <TableCell>{sale.id}</TableCell>
          <TableCell>{moment(sale.dtvenda).format("DD/MM/YYYY")}</TableCell>
          <TableCell>{MoneyptBR(sale.valvenda)}</TableCell>
          <TableCell>{MoneyptBR(sale.margem)}</TableCell>
          <TableCell>{ValuePercent(sale.representa)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default Faturamento