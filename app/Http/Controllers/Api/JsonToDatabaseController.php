<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Association;
use App\Models\Goal;
use App\Models\Sale;
use App\Models\Company;
use Illuminate\Http\Request;

class JsonToDatabaseController extends Controller
{
    public function index(Request $request)
    {
        $req = $request->all();
        if ($req["type"] === "venda") {
            foreach ($req["dbdata"] as $dbdata) {
                $existcnpj = Company::where('cnpj', $dbdata["resumo_cnpj"])->exists();
                if (!$existcnpj) {

                    return response()->json([
                        "response" => [
                            "message" => "CNPJ Inexistente na base de dados de filiais (venda)!",
                        ],
                    ], 201);
                } else {
                    $compid = Company::where('cnpj', $dbdata["resumo_cnpj"])->first()->id;
                    $existsale = Sale::where('dtvenda', $dbdata['resumo_datmvt'])->where('cnpj', $dbdata["resumo_cnpj"])->exists();
                    $data[] = [
                        "company_id" => $compid,
                        "cnpj" => $dbdata['resumo_cnpj'],
                        "filial" => $dbdata['resumo_codfil'],
                        "descfilial" => $dbdata['resumo_desfil'],
                        "dtvenda" => $dbdata['resumo_datmvt'],
                        "valdevolucao" => $dbdata['resumo_valdev'],
                        "valvenda" => $dbdata['resumo_valven'],
                        "margem" => $dbdata['resumo_margem'],
                        "representa" => $dbdata['resumo_presen'],
                    ];
                }
                if (!$existsale) {
                    Sale::insert($data);
                } else {
                    Sale::where('dtvenda', $dbdata['resumo_datmvt'])->where('cnpj', $dbdata['resumo_cnpj'])->update(
                        [
                            "dtvenda" => $dbdata['resumo_datmvt'],
                            "valdevolucao" => $dbdata['resumo_valdev'],
                            "valvenda" => $dbdata['resumo_valven'],
                            "margem" => $dbdata['resumo_margem'],
                            "representa" => $dbdata['resumo_presen'],
                        ]
                    );
                }
            }
            return response()->json([
                "response" => [
                    "message" => "Vendas cadastradas com sucesso!",
                    "success" => true,
                    "status" => 201,
                ],
            ], 201);
        }

        if ($req["type"] === "assoc") {
            foreach ($req["dbdata"] as $dbdata) {
                $existcnpj = Company::where('cnpj', $dbdata["assoc_cnpj"])->exists();
                if (!$existcnpj) {
                    
                    return response()->json([
                        "response" => [
                            "message" => "CNPJ Inexistente na base de dados de filiais (associações)!",
                        ],
                    ], 201);
                } else {
                    $compid = Company::where('cnpj', $dbdata["assoc_cnpj"])->first()->id;
                    $existassoc = Association::where('dtvenda', $dbdata['assoc_datmvt'])->where('cnpj', $dbdata["assoc_cnpj"])->exists();
                    $data[] = [
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
                if (!$existassoc) {
                    Association::insert($data);
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
                }
            }
            return response()->json([
                "response" => [
                    "message" => "Associacoes cadastradas com sucesso!",
                    "success" => true,
                    "status" => 201,
                ],
            ], 201);
        }

        if ($req["type"] === "meta") {
            foreach ($req["dbdata"] as $dbdata) {

                $existcnpj = Company::where('cnpj', $dbdata["meta_cnpj"])->exists();
                if (!$existcnpj) {
                    
                    return response()->json([
                        "response" => [
                            "message" => "CNPJ Inexistente na base de dados de filiais (metas)!",
                        ],
                    ], 201);
                } else {
                    $compid = Company::where('cnpj', $dbdata["meta_cnpj"])->first()->id;
                    $sales = Sale::where('cnpj', $dbdata["meta_cnpj"])->get();
                    $sumsales = $sales->sum('valvenda');
                    $existmeta = Goal::where('anomes', $dbdata['meta_anomes'])->where('cnpj', $dbdata["meta_cnpj"])->exists();
                    $data[] = [
                        "company_id" => $compid,
                        "filial" => $dbdata['meta_codfil'],
                        "cnpj" => $dbdata['meta_cnpj'],
                        "anomes" => $dbdata['meta_anomes'],
                        "faturamento" => $sumsales,
                        "valormeta" => $dbdata['meta_valmeta'],
                        "metajuros" => $dbdata['meta_valjuros'],
                    ];
                }
                if (!$existmeta) {
                    Goal::insert($data);
                } else {
                    Goal::where('anomes', $dbdata['meta_anomes'])->where('cnpj', $dbdata['meta_cnpj'])->update(
                        [
                            "anomes" => $dbdata['meta_anomes'],
                            "faturamento" => $sumsales,
                            "valormeta" => $dbdata['meta_valmeta'],
                            "metajuros" => $dbdata['meta_valjuros'],
                        ]
                    );
                }
            }
            return response()->json([
                "response" => [
                    "message" => "Metas cadastradas com sucesso!",
                    "success" => true,
                    "status" => 201,
                ],
            ], 201);
        }
    }
}
