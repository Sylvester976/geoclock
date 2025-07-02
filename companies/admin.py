from django.contrib import admin
from .models import Company

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone_number", "contact_person", "created_at")
    search_fields = ("name", "email", "contact_person")
from django.contrib import admin

# Register your models here.
