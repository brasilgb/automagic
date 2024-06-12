import { Card, CardBody } from "@/Components/Card"
import { HeaderContent, TitleTop } from "@/Components/PageTop"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { GiReceiveMoney } from "react-icons/gi"
import Faturamento from "./Faturamento"
import { AnaliseButton } from "@/Components/Buttons"
import Associacao from "./Associacao"
import DatePickerMagic from "@/Components/DatePicker"
import { IoSearch } from "react-icons/io5"
import { useAuthContext } from "@/Contexts"

const Sales = ({ sales, association }: any) => {
  const [alteredSales, setAlteredSales] = useState('faturamento');

  const dateAssoc = association?.data;
  const dateSales = sales?.data;

  return (
    <AuthenticatedLayout>
      <Head title="Vendas" />
      <Card>
        <HeaderContent>
          <div className="flex flex-col w-full">
            <div className="flex md:flex-row flex-col gap-2 items-center justify-auto p-1 bg-automa-green-primary rounded-md shadow-md border border-automa-green-secundary w-full">
              <DatePickerMagic />
            </div>
            <div className="flex md:items-center items-start justify-start md:flex-1 p-2 md:gap-6 gap-2 w-full overflow-x-auto bg-gray-100 mt-2 rounded-md shadow">
              <AnaliseButton label="Faturamento" onclick={() => setAlteredSales('faturamento')} active={alteredSales === 'faturamento' ? true : false} />
              <AnaliseButton label="Associação" onclick={() => setAlteredSales('associacao')} active={alteredSales === 'associacao' ? true : false} />
            </div>
          </div>

        </HeaderContent>
        <CardBody className="rounded-md p-1">
          {alteredSales === 'faturamento' &&
            <Faturamento data={dateSales} />
          }
          {alteredSales === 'associacao' &&
            <Associacao data={dateAssoc} />
          }
        </CardBody>
      </Card>
    </AuthenticatedLayout>
  )
}

export default Sales