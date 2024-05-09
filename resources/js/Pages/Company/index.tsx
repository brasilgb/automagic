import { AddButton, DeleteButton, EditButton } from "@/Components/Buttons"
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card"
import Filiais from "@/Components/Empresas/Filiais"
import FlashMessage from "@/Components/FlashMessage"
import InputSearch from "@/Components/InputSearch"
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop"
import Pagination from "@/Components/Pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { maskCnpj, maskInscEstadual } from "@/Utils/mask"
import { Head, usePage } from '@inertiajs/react'
import moment from "moment"
import React, { Fragment } from 'react'
import { IoPeopleSharp } from "react-icons/io5"

type Props = {}

const Company = ({ companies }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <main className='animate__animated animate__fadeIn p-6'>
                <Card>
                    <HeaderContent>
                        <TitleTop>
                            <IoPeopleSharp size={30} />
                            <span className="ml-2">Filiais</span>
                        </TitleTop>
                        <BreadCrumbTop links={[{ url: null, label: "Filiais" }]} />
                    </HeaderContent>
                    <CardContainer>
                        <CardHeader>
                            <CardHeaderContent>
                                <InputSearch
                                    placeholder={"Buscar por descrição ou cnpj"}
                                    url={"companies.index"}
                                />
                            </CardHeaderContent>
                            <CardHeaderContent>
                                <AddButton
                                    url={route('companies.create')}
                                    label={"Filial"}
                                />
                            </CardHeaderContent>
                        </CardHeader>
                        <FlashMessage message={'flash'} />
                        <CardBody>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Empresa Raiz</TableHead>
                                        <TableHead>Nº Filial</TableHead>
                                        <TableHead>Filial</TableHead>
                                        <TableHead>CNPJ</TableHead>
                                        <TableHead>Insc. estadual</TableHead>
                                        <TableHead>Telefone</TableHead>
                                        <TableHead>Cadastro</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {companies?.data.map((company: any) => (
                                        <Fragment key={company.id}>
                                            <TableRow>
                                                <TableCell className="w-8 text-base text-red-500 font-bold">{company.id}</TableCell>
                                                <TableCell className="w-60">
                                                    {company.corpreason}
                                                </TableCell>
                                                <TableCell className="w-20">
                                                    {company.subnumber}
                                                </TableCell>
                                                <TableCell className="w-40">
                                                    {company.subname}
                                                </TableCell>
                                                <TableCell>
                                                    {maskCnpj(company.cnpj)}
                                                </TableCell>
                                                <TableCell>
                                                    {maskInscEstadual(company.statereg)}
                                                </TableCell>
                                                <TableCell>
                                                    {company.telephone}
                                                </TableCell>
                                                <TableCell>
                                                    {moment(
                                                        company.created_at,
                                                    ).format("DD/MM/YYYY")}
                                                </TableCell>
                                                <TableCell className="flex items-center justify-end gap-2">
                                                    <EditButton
                                                        url={route(
                                                            "companies.edit",
                                                            company.id,
                                                        )}
                                                    />
                                                    <DeleteButton
                                                        url="companies.destroy"
                                                        param={company.id}
                                                        identify={`o company ${company.subname}`}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow className="">
                                                <TableCell colspan={11} className={`px-0 border-b-0`}>
                                                    <Filiais filiais={company.filial} />
                                                </TableCell>
                                            </TableRow>
                                        </Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardBody>
                        <CardFooter>
                            <Pagination data={companies} />
                        </CardFooter>
                    </CardContainer>
                </Card>
            </main>
        </AuthenticatedLayout >
    )
}

export default Company