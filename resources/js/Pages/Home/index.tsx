import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { GiPayMoney } from "react-icons/gi";
import { Kpi } from "@/Components/Kpis";
import { MoneyptBR, ValuePercent } from "@/Components/Money";
import { AiOutlineDashboard, AiOutlineLineChart } from "react-icons/ai";
import { TbChartHistogram } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HeaderContent, TitleTop } from "@/Components/PageTop";
import { IoChatboxEllipses } from "react-icons/io5";


const Home = ({ goals, sales, associations }: any) => {
console.log(goals);

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <main className='animate__animated animate__fadeIn p-6'>
        <HeaderContent>
          <TitleTop>
            <AiOutlineDashboard size={30} />
            <span className="ml-2">Dashboard</span>
          </TitleTop>
          <TitleTop/>
        </HeaderContent>
        <div className="">
          {sales &&
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta Juros" value={MoneyptBR(goals?.metajuros)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
              <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(goals?.valormeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
              <Kpi icon={<GiPayMoney size="50" />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(goals?.faturamento)} bgcolor="bg-green-200" textcolor="text-green-700" />
              <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Representa" value={ValuePercent(goals?.faturamento/goals?.valormeta)} bgcolor="bg-green-200" textcolor="text-green-700" />
            </div>
          }
        </div>
      </main>
    </AuthenticatedLayout>
  )
}

export default Home