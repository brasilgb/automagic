<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Total extends Model
{
    use HasFactory;

    protected $fillable = [
        "cnpj",
        "datatu",
        "valdev",
        "valven",
        "margem",
        "permet",
        "projec",
        "valjur",
        "perjur",
        "valina",
        "perina",
        "valest"
    ];
}
