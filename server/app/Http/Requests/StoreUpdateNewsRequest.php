<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateNewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => [
                'required',
                'min:4',
                'max:60',
                'unique:news'
            ],
            'author' => [
                'required',
                'min:3',
                'max:80',
            ],
            'content' => [
                'required',
                'min:120',
                'max:255',
            ],
            'release_date' => [
                'required',
                'date',
            ],
        ];

        if ($this->method() === 'PATCH') {
            $rules['title'] = [
                'min:4',
                'max:60',
                Rule::unique('news')->ignore($this->id),
            ];
            $rules['author'] = [
                'min:3',
                'max:80',
            ];
            $rules['content'] = [
                'min:120',
                'max:255',
            ];
            $rules['release_date'] = [
                'date',
            ];
        };

        return $rules;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.unique' => 'Uma notícia com esse nome já existe.',
            'content.min' => 'O campo conteúdo deve ter pelo menos :min caracteres.',
        ];
    }
}
