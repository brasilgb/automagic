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
          <TitleTop>
            <GiReceiveMoney size={30} />
            <span className="ml-2">Vendas</span>
          </TitleTop>
          <TitleTop />
        </HeaderContent>
        <HeaderContent>
          <div className="flex items-center justify-between gap-6 w-full">
            <DatePickerMagic />
            <div className="flex items-center justify-center gap-6 flex-1">
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