<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use App\Models\Goal;
use App\Models\Sale;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $sales = Sale::first();
        $goals = Goal::first();
        $associations = Association::first();
        $companies = Company::get();
        return Inertia::render('Home/index', [
            "sales" => $sales,
            "goals" => $goals,
            "associations" => $associations,
            "companies" => count($companies)
        ]);
    }

    public function unauthorized()
    {
        return Inertia::render('Unauthorized/index');
    }
}
