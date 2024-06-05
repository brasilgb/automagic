<?php

namespace App\Models;

use App\Traits\TenantAttributeTrait;
use App\Traits\TenantScoped;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'cnpj',
        'filial',
        'descfilial',
        'dtvenda',
        "anomes",
        'valdevolucao',
        'valvenda',
        'margem',
        'representa'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
