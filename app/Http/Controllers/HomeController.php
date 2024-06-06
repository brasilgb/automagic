<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use App\Models\Goal;
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
        $cnpj = Company::where('id', $user->company_id)->first()->cnpj;
        $companies = Company::get();
        // dd(substr($request->dt, 0, 6));
        // $sales = Sale::where('cnpj', $cnpj)->first();
        $sales = Sale::when($request->has('dt'), function ($wquery, $cnpj) use ($request) {
            $wquery->where('cnpj', $cnpj)->where('dtvenda', $request->dt);
        })->first();
        //$associations = Association::where('cnpj', $cnpj)->first();
        $associations = Association::when($request->has('dt'), function ($wquery, $cnpj) use ($request) {
            $wquery->where('cnpj', $cnpj)->where('dtvenda', $request->dt);
        })->first();
        //$totalsday = Total::where('cnpj', $cnpj)->first();
        $totalsday = Total::when($request->has('dt'), function ($wquery, $cnpj) use ($request) {
            $wquery->where('cnpj', $cnpj)->where('datatu', $request->dt);
        })->first();
        
        // $saleschart = Sale::where('cnpj', $cnpj)->where('anomes', substr($request->dt, 0, 6))->get();
        $saleschart = Sale::when($request->has('dt'), function ($wquery) use ($request, $cnpj) {
            $wquery->where('cnpj', $cnpj)->where('anomes', substr($request->dt, 0, 6));
        })->get();

        $goals = Goal::where('cnpj', $cnpj)->first();
        return Inertia::render('Home/index', [
            "sales" => $sales,
            "goals" => $goals,
            "associations" => $associations,
            "totalsday" => $totalsday,
            "sales" => $saleschart,
            "companies" => count($companies)
        ]);
    }
    public function unauthorized()
    {
        return Inertia::render('Unauthorized/index');
    }
}
