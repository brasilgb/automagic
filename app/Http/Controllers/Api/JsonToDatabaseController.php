<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Association;
use App\Models\Goal;
use App\Models\Sale;
use App\Models\Company;
use App\Models\Total;
use Illuminate\Http\Request;

class JsonToDatabaseController extends Controller
{
    public function responseError($type)
    {
        return response()->json([
            "response" => [
                "message" => "CNPJ Inexistente na base de dados de filiais ($type)!",
            ],
        ], 201);
    }
    public function responseInsert($type)
    {
        return response()->json([
            "response" => [
                "message" => "Dados de $type cadastrados com sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }
    public function responseUpdate($type)
    {
        return response()->json([
            "response" => [
                "message" => "Dados de $type editados com sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }
    public function index(Request $request)
    {
        $req = $request->all();
        if ($req["type"] === "venda") {
            foreach ($req["dbdata"] as $dbdata) {
                $existcnpj = Company::where('cnpj', $dbdata["resumo_cnpj"])->exists();
                if (!$existcnpj) {
                    return $this->responseError('venda');
                } else {
                    $compid = Company::where('cnpj', $dbdata["resumo_cnpj"])->first()->id;
                    $existsale = Sale::where('dtvenda', $dbdata['resumo_datmvt'])->where('cnpj', $dbdata["resumo_cnpj"])->exists();
                    $dataven[] = [
                        "company_id" => $compid,
                        "cnpj" => $dbdata['resumo_cnpj'],
                        "filial" => $dbdata['resumo_codfil'],
                        "descfilial" => $dbdata['resumo_desfil'],
                        "dtvenda" => $dbdata['resumo_datmvt'],
                        "anomes" => substr($dbdata['resumo_datmvt'], 0, 6),
                        "valdevolucao" => $dbdata['resumo_valdev'],
                        "valvenda" => $dbdata['resumo_valven'],
                        "margem" => $dbdata['resumo_margem'],
                        "representa" => $dbdata['resumo_presen'],
                    ];
                }
                if (!$existsale) {
                    Sale::insert($dataven);
                    return $this->responseInsert('venda');
                } else {
                    Sale::where('cnpj', $dbdata['resumo_cnpj'])->update($dataven);
                    
                }
                return $this->responseUpdate('venda');
            }
        }

        if ($req["type"] === "assoc") {
            foreach ($req["dbdata"] as $dbdata) {
                $existcnpj = Company::where('cnpj', $dbdata["assoc_cnpj"])->exists();
                if (!$existcnpj) {
                    return $this->responseError('associação');
                } else {
                    $compid = Company::where('cnpj', $dbdata["assoc_cnpj"])->first()->id;
                    $existassoc = Association::where('dtvenda', $dbdata['assoc_datmvt'])->where('cnpj', $dbdata["assoc_cnpj"])->exists();
                    $datass[] = [
                        "company_id" => $compid,
                        "cnpj" => $dbdata['assoc_cnpj'],
                        "filial" => $dbdata['assoc_filial'],
                        "dtvenda" => $dbdata['assoc_datmvt'],
                        "assoc" => $dbdata['assoc_ass'],
                        "descassoc" => $dbdata['assoc_desass'],
                        "valdevolucao" => $dbdata['assoc_valdev'],
                        "valvenda" => $dbdata['assoc_valven'],
                        "margem" => $dbdata['assoc_margem'],
                        "representa" => $dbdata['assoc_repres'],
                    ];
                }
            }
            if (!$existassoc) {
                Association::insert($datass);
                return $this->responseInsert('associação');
            } else {
                Association::where('dtvenda', $dbdata['assoc_datmvt'])->where('cnpj', $dbdata['assoc_cnpj'])->update(
                    [
                        "dtvenda" => $dbdata['assoc_datmvt'],
                        "assoc" => $dbdata['assoc_ass'],
                        "descassoc" => $dbdata['assoc_desass'],
                        "valdevolucao" => $dbdata['assoc_valdev'],
                        "valvenda" => $dbdata['assoc_valven'],
                        "margem" => $dbdata['assoc_margem'],
                        "representa" => $dbdata['assoc_repres'],
                    ]
                );
                return $this->responseUpdate('associação');
            }
        }

        if ($req["type"] === "meta") {
            foreach ($req["dbdata"] as $dbdata) {
                $existcnpj = Company::where('cnpj', $dbdata["meta_cnpj"])->exists();
                if (!$existcnpj) {
                    return $this->responseError('meta');
                } else {
                    $compid = Company::where('cnpj', $dbdata["meta_cnpj"])->first()->id;
                    $sales = Sale::where('cnpj', $dbdata["meta_cnpj"])->get();
                    $sumsales = $sales->sum('valvenda');
                    $existmeta = Goal::where('anomes', $dbdata['meta_anomes'])->where('cnpj', $dbdata["meta_cnpj"])->exists();
                    $data[] = [
                        "company_id" => $compid,
                        "cnpj" => $dbdata['meta_cnpj'],
                        "filial" => $dbdata['meta_codfil'],
                        "anomes" => $dbdata['meta_anomes'],
                        "faturamento" => $sumsales,
                        "valormeta" => $dbdata['meta_valmeta'],
                        "metajuros" => $dbdata['meta_valjuros'],
                    ];
                }
            }
            if (!$existmeta) {
                Goal::insert($data);
                return $this->responseInsert('meta');
            } else {
                Goal::where('anomes', $dbdata['meta_anomes'])->where('cnpj', $dbdata['meta_cnpj'])->update(
                    [
                        "anomes" => $dbdata['meta_anomes'],
                        "faturamento" => $sumsales,
                        "valormeta" => $dbdata['meta_valmeta'],
                        "metajuros" => $dbdata['meta_valjuros'],
                    ]
                );
                return $this->responseUpdate('meta');
            }
        }

        if ($req["type"] === "total") {
            foreach ($req["dbdata"] as $dbdata) {
                $existcnpj = Company::where('cnpj', $dbdata["total_cnpj"])->exists();
                if (!$existcnpj) {
                    return $this->responseError('total');
                } else {
                    $compid = Company::where('cnpj', $dbdata["total_cnpj"])->first()->id;
                    $existsale = Total::where('datatu', $dbdata['total_datatu'])->where('cnpj', $dbdata["total_cnpj"])->exists();
                    $datatot[] = [
                        "company_id" => $compid,
                        "cnpj" => $dbdata['total_cnpj'],
                        "datatu" => $dbdata['total_datatu'],
                        "valdev" => $dbdata['total_valdev'],
                        "valven" => $dbdata['total_valven'],
                        "margem" => $dbdata['total_margem'],
                        "permet" => $dbdata['total_permet'],
                        "projec" => $dbdata['total_projec'],
                        "valjur" => $dbdata['total_valjur'],
                        "perjur" => $dbdata['total_perjur'],
                        "valina" => $dbdata['total_valina'],
                        "perina" => $dbdata['total_perina'],
                        "valest" => $dbdata['total_valest']
                    ];
                }
            }
            if (!$existsale) {
                Total::insert($datatot);
                return $this->responseInsert('total');
            } else {
                Total::where('datatu', $dbdata['total_datatu'])->where('cnpj', $dbdata['total_cnpj'])->update(
                    [
                        "datatu" => $dbdata['total_datatu'],
                        "valdev" => $dbdata['total_valdev'],
                        "valven" => $dbdata['total_valven'],
                        "margem" => $dbdata['total_margem'],
                        "permet" => $dbdata['total_permet'],
                        "projec" => $dbdata['total_projec'],
                        "valjur" => $dbdata['total_valjur'],
                        "perjur" => $dbdata['total_perjur'],
                        "valina" => $dbdata['total_valina'],
                        "perina" => $dbdata['total_perina'],
                        "valest" => $dbdata['total_valest']
                    ]
                );
                return $this->responseUpdate('total');
            }
        }
    }
}
