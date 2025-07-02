from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    contact_person = models.CharField(max_length=100, help_text="Name of the admin/contact person")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
