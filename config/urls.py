from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
path('admin/', admin.site.urls),
path('', TemplateView.as_view(template_name="auth/login.html"), name='landing'),
path('accounts/', include('django.contrib.auth.urls')),
path('users/', include('users.urls')),
path('attendance/', include('attendance.urls')),
path('reporting/', include('reporting.urls')),
path('worklocations/', include('worklocations.urls')),
path('companies/', include('companies.urls')),

]+static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
