<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'key',
        'cnpj',
        'filial',
        'anomes',
        'valormeta',
        'metajuros',
    ];
    
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
