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

        // $sales = Sale::where('cnpj', $cnpj)->first();
        $sales = Sale::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('dtvenda', $request->dt);
        })->first();
        //$associations = Association::where('cnpj', $cnpj)->first();
        $associations = Association::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('dtvenda', $request->dt);
        })->first();
        //$totalsday = Total::where('cnpj', $cnpj)->first();
        $totalsday = Total::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('datatu', $request->dt);
        })->first();
        
        // $totals = Total::where('cnpj', $cnpj)->get();
        $totals = Total::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('datatu', $request->dt);
        })->get();

        $goals = Goal::where('cnpj', $cnpj)->first();
        return Inertia::render('Home/index', [
            "sales" => $sales,
            "goals" => $goals,
            "associations" => $associations,
            "totalsday" => $totalsday,
            "totals" => $totals,
            "companies" => count($companies)
        ]);
    }
    public function unauthorized()
    {
        return Inertia::render('Unauthorized/index');
    }
}
