from django.urls import path
from . import views

urlpatterns = [
    path('authlogin/', authlogin, name='authlogin'),

]