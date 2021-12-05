from rest_framework import generics
from rest_framework.response import Response
from authentication.models.specialist import Specialist
from authentication.serializers.specialistSerializer import SpecialistSerializer, SpecialistSerializer_Score, SpecialistSerializer_priceXhour

# Create Specialist
class SpecialistCreateView (generics.CreateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Get All Specialists
class SpecialistGetAllApi(generics.ListAPIView): 
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Get & Update Selected ID Specialist
class SpecialistGetSelectedApi(generics.RetrieveUpdateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Delete Selected ID Specialist
class SpecialistDeleteApi(generics.DestroyAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer

# Update Score by ID Specialist
class SpecialistGetSelectedApi_Score(generics.RetrieveUpdateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer_Score

# Update priceXhour by ID Specialist
class SpecialistGetSelectedApi_priceXhour(generics.RetrieveUpdateAPIView):
    queryset = Specialist.objects.all()
    serializer_class = SpecialistSerializer_priceXhour