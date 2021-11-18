from rest_framework import generics
from rest_framework.response import Response
from authentication.models.specialist import Specialist
from authentication.serializers.specialistSerializer import SpecialistSerializer

# Create Specialist
class SpecialistCreateView (generics.CreateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Get All Specialists
class SpecialistGetAllApi(generics.ListAPIView): 
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Get Selected ID Specialist
class SpecialistGetSelectedApi(generics.RetrieveUpdateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Delete Selected ID Specialist
class SpecialistDeleteApi(generics.DestroyAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer
