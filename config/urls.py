from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
path('admin/', admin.site.urls),
path('', TemplateView.as_view(template_name="auth/landing.html"), name='landing'),
path('accounts/', include('django.contrib.auth.urls')),
path('users/', include('users.urls')),
path('attendance/', include('attendance.urls')),
path('reporting/', include('reporting.urls')),
path('worklocations/', include('worklocations.urls')),

]
