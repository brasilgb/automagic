import { Head, router, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { GiPayMoney } from "react-icons/gi";
import { Kpi } from "@/Components/Kpis";
import { MoneyptBR } from "@/Components/Money";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HeaderContent, TitleTop } from "@/Components/PageTop";
import { IoIosBusiness } from 'react-icons/io';
import Progress from '@/Components/Charts/Progress';
import CHFaturamento from "@/Components/Charts/CHFaturamento";
import DatePickerSingle from "@/Components/DatePicker/DatePickerSingle";


const Home = ({ goals, sales, associations, companies, totals, totalsday }: any) => {
  const { auth } = usePage().props as any;

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <main className='animate__animated animate__fadeIn'>
        <HeaderContent>
          <TitleTop>
            <AiOutlineDashboard size={30} />
            <span className="ml-2">Dashboard</span>
          </TitleTop>
          <TitleTop />
        </HeaderContent>
        <div className="">
          {auth?.user?.company_id !== null &&
            <>
              <div>
                <DatePickerSingle />
              </div>
              <div className="grid gap-6 md:grid-cols-5">
                <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(goals?.valormeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta Juros" value={MoneyptBR(goals?.metajuros)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                <Kpi icon={<GiPayMoney size="50" />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(totalsday?.valven)} bgcolor="bg-green-200" textcolor="text-green-700" />
                <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Val. Juros" value={MoneyptBR(totalsday?.valjur)} bgcolor="bg-green-200" textcolor="text-green-700" />
                <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Val. Ina." value={MoneyptBR(totalsday?.valina)} bgcolor="bg-green-200" textcolor="text-green-700" />

                {/* <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Representa" value={ValuePercent(totalsday?.permet)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Margem" value={ValuePercent(totalsday?.margem)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Per. Juros" value={ValuePercent(totalsday?.perjur)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Per. Ina." value={ValuePercent(totalsday?.perina)} bgcolor="bg-green-200" textcolor="text-green-700" /> */}
              </div>
              <div className="grid gap-6 md:grid-cols-4 grid-cols-2 mt-4">
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totalsday?.permet} colorBar="#FF5003" colorText="#FF5003" title='Meta' height={100} />
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totalsday?.margem} colorBar="#CA0156" colorText="#CA0156" title='Margem' height={100} />
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totalsday?.perjur} colorBar="#0F52BA" colorText="#0F52BA" title='Juros' height={100} />
                </div>
                <div className='bg-white p-4 shadow-md rounded-md'>
                  <Progress value={totalsday?.perina} colorBar="#FFAE08" colorText="#FFAE08" title='Inadimplência' height={100} />
                </div>
              </div>
              <div className="mt-4 p-2 flex flex-col bg-white rounded-md shadow-md my-4">
                <CHFaturamento data={totals} />
              </div>
            </>
          }
          {auth?.user?.company_id === null &&
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Kpi icon={<IoIosBusiness size="50" />} iconcolor="text-blue-700" title="Empresas ativas" value={companies} bgcolor="bg-blue-200" textcolor="text-blue-700" />
              {/* <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(goals?.valormeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
              <Kpi icon={<GiPayMoney size="50" />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(goals?.faturamento)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Representa" value={ValuePercent(goals?.faturamento/goals?.valormeta)} bgcolor="bg-green-200" textcolor="text-green-700" /> */}
            </div>
          }
        </div>
      </main>
    </AuthenticatedLayout>
  )
}

export default Home