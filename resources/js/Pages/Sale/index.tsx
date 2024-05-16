import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/Table'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'

type Props = {}

const Sales = ({ sales }: any) => {
  console.log(sales);

  return (
    <AuthenticatedLayout>
      <Head title="Vendas" />

      <div className="py-12">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm rounded">
            <Table>
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
                {sales.map((sale: any, idx: number) => (
                  <TableRow>
                    <TableCell>{sale.id}</TableCell>
                    <TableCell>{moment(sale.dtvenda).format("DD/MM/YYYY")}</TableCell>
                    <TableCell>{sale.valvenda}</TableCell>
                    <TableCell>{sale.margem}</TableCell>
                    <TableCell>{sale.representa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Sales