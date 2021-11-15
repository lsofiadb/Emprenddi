from rest_framework import generics
from rest_framework.response import Response
from authentication.models.specialist import Specialist
from authentication.serializers.specialistSerializer import SpecialistSerializer

class SpecialistDetailView (generics.CreateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Get all specialists.
class SpecialistApi(generics.ListAPIView): 
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

class SpecialistUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer
 
class SpecialistDeleteApi(generics.DestroyAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

    #vista de filtro por categoria 