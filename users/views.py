from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

def authlogin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success', 'message': 'Login successful.'})  # Replace with your desired URL name
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials.'})


    return JsonResponse({'status': 'error', 'message': 'Invalid request.'})
