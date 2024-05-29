import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { GiPayMoney } from "react-icons/gi";
import { Kpi } from "@/Components/Kpis";
import { MoneyptBR, ValuePercent } from "@/Components/Money";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HeaderContent, TitleTop } from "@/Components/PageTop";
import { IoIosBusiness } from 'react-icons/io';
import Progress from '@/Components/Charts/Progress';


const Home = ({ goals, sales, associations, companies, totals }: any) => {
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
              <div className="grid gap-6 md:grid-cols-5">
                <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(goals?.valormeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta Juros" value={MoneyptBR(goals?.metajuros)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                <Kpi icon={<GiPayMoney size="50" />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(totals?.valven)} bgcolor="bg-green-200" textcolor="text-green-700" />
                <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Val. Juros" value={MoneyptBR(totals?.valjur)} bgcolor="bg-green-200" textcolor="text-green-700" />
                <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Val. Ina." value={MoneyptBR(totals?.valina)} bgcolor="bg-green-200" textcolor="text-green-700" />

                {/* <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Representa" value={ValuePercent(totals?.permet)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Margem" value={ValuePercent(totals?.margem)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Per. Juros" value={ValuePercent(totals?.perjur)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Per. Ina." value={ValuePercent(totals?.perina)} bgcolor="bg-green-200" textcolor="text-green-700" /> */}
              </div>
              <div className="grid gap-6 md:grid-cols-4 grid-cols-2 mt-8">
                <div>
                  <Progress value={totals?.permet} colorBar="#000" colorText="#000" title='Meta' height={100} />
                </div>
                <div>
                  <Progress value={totals?.margem} colorBar="#000" colorText="#000" title='Margem' height={100} />
                </div>
                <div>
                  <Progress value={totals?.perjur} colorBar="#000" colorText="#000" title='Juros' height={100} />
                </div>
                <div>
                  <Progress value={totals?.perina} colorBar="#000" colorText="#000" title='Inadimplência' height={100} />
                </div>
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