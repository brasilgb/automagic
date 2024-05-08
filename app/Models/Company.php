<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'cnpj',
        'raiz',
        'subnumber',
        'subname',
        'address',
        'number',
        'cep',
        'county',
        'state',
        'neighborhood',
        'cnpj',
        'statereg',
        'telephone',
        'whatsapp',
        'observation'
    ];
}
