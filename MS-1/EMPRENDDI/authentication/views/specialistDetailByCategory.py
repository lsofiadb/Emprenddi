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

# Get specialists accordong to category
class SpecialistCategory(generics.ListAPIView):
    
    serializer_class = SpecialistSerializer
    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        params = self.kwargs.get('category')
        return Specialist.objects.filter(category=params)

    