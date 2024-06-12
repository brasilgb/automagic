<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use App\Models\Sale;
use App\Models\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {

        $user = Auth::user();
        $compexists = Company::where('id', $user->company_id)->exists();
        // dd($compexists);
        $cnpj = $compexists ? Company::where('id', $user->company_id)->first()->cnpj : null;
        $companies = Company::get();

        $sales = Sale::when($request->has('dt'), function ($wquery, $cnpj) use ($request) {
            $wquery->where('dtvenda', $request->dt);
        })->where('cnpj', $cnpj)->orderBy('id', 'desc')->first();
        // dd($sales);
        //$associations = Association::where('cnpj', $cnpj)->first();
        $associations = Association::when($request->has('dt'), function ($wquery, $cnpj) use ($request) {
            $wquery->where('dtvenda', $request->dt);
        })->where('cnpj', $cnpj)->orderBy('id', 'desc')->first();

        //$totalsday = Total::where('cnpj', $cnpj)->first();
        $totalsday = Total::when($request->has('dt'), function ($wquery, $cnpj) use ($request) {
            $wquery->where('datatu', $request->dt);
        })->where('cnpj', $cnpj)->orderBy('id', 'desc')->first();

        // $saleschart = Sale::where('cnpj', $cnpj)->where('anomes', substr($request->dt, 0, 6))->get();
        $saleschart = Sale::when($request->has('dt'), function ($wquery) use ($request, $cnpj) {
            $wquery->where('anomes', substr($request->dt, 0, 6));
        })->where('cnpj', $cnpj)->get();

        return Inertia::render('Home/index', [
            "sales" => $sales,
            "associations" => $associations,
            "totalsday" => $totalsday,
            "saleschart" => $saleschart,
            "companies" => count($companies)
        ]);
    }
    public function unauthorized()
    {
        return Inertia::render('Unauthorized/index');
    }
}
