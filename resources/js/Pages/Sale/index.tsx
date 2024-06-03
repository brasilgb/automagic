import { Card, CardBody, CardFooter } from "@/Components/Card"
import { MoneyptBR, ValuePercent } from "@/Components/Money"
import { HeaderContent, TitleTop } from "@/Components/PageTop"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/Table'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react'
import moment from 'moment'
import React, { useState } from 'react'
import { GiReceiveMoney } from "react-icons/gi"
import Faturamento from "./Faturamento"
import { AnaliseButton } from "@/Components/Buttons"
import Associacao from "./Associacao"
import DatePickerMagic from "@/Components/DatePicker"
import { useAuthContext } from "@/Contexts"

const Sales = ({ sales, association }: any) => {
const [alteredSales, setAlteredSales] = useState('faturamento');
const { dataFiltro, dataInicial, dataFinal, selectedRange, setSelectedRange } = useAuthContext();
// console.log(association);
// console.log(dataFinal);

const dateAssoc = association.filter((fd:any) => (fd.dtvenda == parseInt(moment(dataInicial).format("YYYYMMDD")) && fd.dtvenda == parseInt(moment(dataFinal).format("YYYYMMDD")) ));
const dateSales = [];
console.log(dateAssoc);

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
          <div className="flex items-center justify-center gap-6 w-full">
            <DatePickerMagic />
            <AnaliseButton label="Faturamento" onclick={() => setAlteredSales('faturamento')} active={alteredSales === 'faturamento' ? true : false} />
            <AnaliseButton label="Associação" onclick={() => setAlteredSales('associacao')} active={alteredSales === 'associacao' ? true : false} />
          </div>
        </HeaderContent>
        <CardBody className="rounded-md p-1">
          {alteredSales === 'faturamento' &&
          <Faturamento data={sales} />
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