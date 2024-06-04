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

        $companies = Company::where('cnpj', $cnpj)->get();
        $sales = Sale::where('dtvenda', $request->date)->where('cnpj', $cnpj)->get();
        $associations = Association::where('dtvenda', $request->date)->where('cnpj', $cnpj)->get();
        $totalsday = Total::where('datatu', $request->date)->where('cnpj', $cnpj)->get();
        $goals = Goal::where('cnpj', $cnpj)->first();
        $totals = Total::where('datatu', $request->date)->where('cnpj', $cnpj)->get();
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
