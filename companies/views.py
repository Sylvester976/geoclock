from django.shortcuts import render

def CompanyAdminDashboardView(request):
    return render(request, 'companies/dashboard.html')
