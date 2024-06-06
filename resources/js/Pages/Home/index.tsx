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
import { useEffect } from 'react';
import { useAuthContext } from '@/Contexts';
import moment from 'moment';
import { IoSearch } from "react-icons/io5";


const Home = ({ goals, companies, sales, totalsday }: any) => {
  const { auth } = usePage().props as any;
  const { dataFiltro, executeFilter, setExecuteFilter } = useAuthContext();

  useEffect(() => {
    const getDataHome = () => {
      if (executeFilter) {
        router.get('/',
          { 'dt': moment(dataFiltro).format('YYYYMMDD') })
      }
      setExecuteFilter(false);
    };
    getDataHome();
  }, [dataFiltro, executeFilter]);

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <main className=''>
        <HeaderContent>
          <TitleTop>
            <AiOutlineDashboard size={30} />
            <span className="ml-2">Dashboard</span>
          </TitleTop>
          <TitleTop />
        </HeaderContent>
        {goals.length > 0 && companies.length > 0 && sales.length > 0 && totalsday.length > 0 &&
          <div className="">
            {auth?.user?.company_id !== null &&
              <>
                <div className="flex items-center justify-start">
                  <DatePickerSingle />
                </div>

                <div className="grid gap-4 md:grid-cols-5 mt-4">
                  <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta" value={MoneyptBR(goals?.valormeta)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                  <Kpi icon={<AiOutlineLineChart size="50" />} iconcolor="text-blue-700" title="Meta Juros" value={MoneyptBR(goals?.metajuros)} bgcolor="bg-blue-200" textcolor="text-blue-700" />
                  <Kpi icon={<GiPayMoney size="50" />} iconcolor="text-green-700" title="Faturamento" value={MoneyptBR(totalsday?.valven)} bgcolor="bg-green-200" textcolor="text-green-700" />
                  <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Val. Juros" value={MoneyptBR(totalsday?.valjur)} bgcolor="bg-green-200" textcolor="text-green-700" />
                  <Kpi icon={<FaMoneyBillTrendUp size="50" />} iconcolor="text-yellow-700" title="Val. Ina." value={MoneyptBR(totalsday?.valina)} bgcolor="bg-green-200" textcolor="text-green-700" />
                </div>

                <div className="grid gap-4 md:grid-cols-4 grid-cols-2 mt-4">
                  <div className='bg-white p-4 shadow-md rounded-md'>
                    <Progress value={totalsday ? totalsday?.permet : '0'} colorBar="#FF5003" colorText="#FF5003" title='Meta' height={100} />
                  </div>
                  <div className='bg-white p-4 shadow-md rounded-md'>
                    <Progress value={totalsday ? totalsday?.margem : '0'} colorBar="#CA0156" colorText="#CA0156" title='Margem' height={100} />
                  </div>
                  <div className='bg-white p-4 shadow-md rounded-md'>
                    <Progress value={totalsday ? totalsday?.perjur : '0'} colorBar="#0F52BA" colorText="#0F52BA" title='Juros' height={100} />
                  </div>
                  <div className='bg-white p-4 shadow-md rounded-md'>
                    <Progress value={totalsday ? totalsday?.perina : '0'} colorBar="#FFAE08" colorText="#FFAE08" title='Inadimplência' height={100} />
                  </div>
                </div>
                <div className="mt-4 p-2 flex flex-col bg-white rounded-md shadow-md my-4">
                  <CHFaturamento data={sales} />
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
        }
      </main>
    </AuthenticatedLayout>
  )
}

export default Home