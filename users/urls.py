from django.urls import path
from . import views

urlpatterns = [
    path('authlogin/', views.authlogin, name = 'authlogin'),

]