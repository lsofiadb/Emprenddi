#from typing_extensions import Self
from typing import get_args
from django.db.models import query
from django.db.models.expressions import Value
from django.db.models.query import QuerySet
from django.http import request
from django.utils.functional import empty
from django.utils.regex_helper import contains
from rest_framework import generics
from rest_framework.request import Request
from rest_framework.response import Response
from authentication.models.specialist import Specialist
from authentication.serializers.specialistSerializer import SpecialistSerializer

#Obtener todos los Specialistas de la base de datospor categoria
class SpecialistApiXCategory(generics.ListAPIView):  

    serializer_class = SpecialistSerializer

    def getCat(self):

        cat = self.request.GET.get('param')
        print(cat)
        queryset = Specialist.objects.all().filter(category__exact=cat) 

        return queryset

    #queryset = Specialist.objects.all().filter(category__exact="BE")    
class SpecialistCategory(generics.ListAPIView):
    
    queryset = Specialist.objects.filter(category="edicion")
    serializer_class = SpecialistSerializer

class SpecialistCategoryy(generics.ListAPIView):
    
   # queryset = Specialist.objects.filter(category="matematicas")
    serializer_class = SpecialistSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        category = self.kwargs['category']
        return Specialist.objects.filter(specialist__category=category)

    