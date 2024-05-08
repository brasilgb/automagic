<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Association extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'cnpj',
        'filial',
        'dtvenda',
        'assoc',
        'descassoc',
        'valdevolucao',
        'valvenda',
        'margem',
        'representa'
    ];
}