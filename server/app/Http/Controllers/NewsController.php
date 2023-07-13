<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateNewsRequest;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Response;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();

        return NewsResource::collection($news);
    }

    public function store(StoreUpdateNewsRequest $request)
    {
        $data = $request->validated();

        $newsWithSameTitle = News::whereRaw('LOWER(title) = ?', [strtolower($data['title'])])->first();

        if($newsWithSameTitle){
            return response()->json(['message' => 'Uma notícia com esse nome já existe.'], Response::HTTP_BAD_REQUEST);
        }

        $news = News::create($data);

        return new NewsResource($news);
    }

    public function show(string $id)
    {
        $news = News::findOrFail($id);

        return new NewsResource($news);
    }

    public function update(StoreUpdateNewsRequest $request, string $id)
    {
        $data = $request->validated();

        $news = News::findOrFail($id);

        $newsWithSameTitle = News::whereRaw('LOWER(title) = ?', [strtolower($data['title'])])->first();

        if($newsWithSameTitle){
            return response()->json(['message' => 'Uma notícia com esse nome já existe.'], Response::HTTP_BAD_REQUEST);
        }

        $news->update($data);

        return New NewsResource($news);
    }

    public function destroy(string $id)
    {
        News::findOrFail($id)->delete();

        return response()->json([], Response::HTTP_NO_CONTENT);
    }
}
