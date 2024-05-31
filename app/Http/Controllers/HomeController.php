<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use App\Models\Goal;
use App\Models\Sale;
use App\Models\Total;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $sales = Sale::first();
        $goals = Goal::first();
        $companies = Company::get();
        $associations = Association::first();
        $totalsday = Total::first();
        $totals = Total::get();
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
