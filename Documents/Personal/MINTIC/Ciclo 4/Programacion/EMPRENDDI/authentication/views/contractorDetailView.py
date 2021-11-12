from rest_framework import generics
from rest_framework.response import Response
from authentication.models.contractor import Contractor
from authentication.serializers.contractorSerializer import ContractorSerializer

class ContractorDetailView (generics.CreateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

#Obtener todos los Contractors de la base de datos
class ContractorApi(generics.ListAPIView): 
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

class ContractorUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
 
class ContractorDeleteApi(generics.DestroyAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer