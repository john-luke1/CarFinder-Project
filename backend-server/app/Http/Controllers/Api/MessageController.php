<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{

    public function store(ContactRequest $request)
    {
        try {
            $validated = $request->validated();
            $message = Contact::create($validated);
            return response()->json(['message' => 'Message sent successfully', 'data' => $message], 200);
        } catch (\Exception $e) {
            Log::error('Error storing message: ' . $e->getMessage());
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            $message = Contact::findOrFail($id);
            $message->delete();
            return response()->json(['message' => 'Message deleted successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting message: ' . $e->getMessage());
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
}
