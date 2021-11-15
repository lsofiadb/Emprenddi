from django.contrib import admin
from .models.contractor import Contractor
from .models.specialist import Specialist

# Register your models here.
admin.site.register(Contractor)
admin.site.register(Specialist)