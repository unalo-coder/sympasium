<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-gray-100 min-h-screen">
<div class="flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full">

        <h2 class="text-2xl font-bold text-center text-indigo-600 mb-4">
            Login to Your Account
        </h2>

        <p class="text-gray-600 text-center mb-6">
            Welcome back! Please sign in to continue.
        </p>

    <form method="POST" action="{{ route('login') }}" class="space-y-6">
        @csrf

        <!-- Email Input -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" required
                   class="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
        </div>

        <!-- Password Input -->
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" required
                   class="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
        </div>

        <!-- Remember Me Checkbox -->
        <div class="flex items-center justify-between">

            <a href="#" class="text-sm text-indigo-600 hover:underline">Forgot password?</a>
        </div>

        <!-- Submit Button -->
        <div>
            <button type="submit"
                    class="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                Login
            </button>
        </div>
    </form>

    <!-- Additional Options -->
    <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
            Don't have an account?
            <a
{{--                href="{{ route('register') }}"--}}
                class="text-indigo-600 hover:underline">Sign Up</a>
        </p>
    </div>
</div>
</body>
</html>
