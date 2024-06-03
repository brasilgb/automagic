<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $cnpj = Company::where('id', $user->company_id)->first()->cnpj;

        $sales = Sale::where('company_id', '<>', 'null')->where('cnpj', $cnpj)->paginate(15);
        $association = Association::where('company_id', '<>', 'null')->where('cnpj', $cnpj)->paginate(15);

        return Inertia::render('Sale/index', ['sales' => $sales, 'association' => $association]);
    }

    public function filterSale(Request $request)
    {
        $sales = Sale::where('dtvenda', '>=', $request->dtini)->where('dtvenda', '<=', $request->dtfim)->paginate(15);
        $association = Association::where('dtvenda', '>=', $request->dtini)->where('dtvenda', '<=', $request->dtfim)->paginate(15);
        return Inertia::render('Sale/index', ['sales' => $sales, 'association' => $association]);
    }
}
