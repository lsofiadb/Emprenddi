from rest_framework import generics
from rest_framework.response import Response
from authentication.models.contractor import Contractor
from authentication.serializers.contractorSerializer import ContractorSerializer

# Option 2 Create Contractor
class ContractorCreateView2 (generics.CreateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

# Get All Contractors
class ContractorGetAllApi(generics.ListAPIView): 
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

# Get Selected ID Contractor
class ContractorGetSelectedApi(generics.RetrieveUpdateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
 
# Delete Selected ID Contractor
class ContractorDeleteApi(generics.DestroyAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer