# views.py

from django.shortcuts import render

def your_view_function(request):
    return render(request, 'index.jsx')