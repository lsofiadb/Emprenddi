from rest_framework import serializers
from authentication.models.contractor import Contractor

class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = [
                    'id', 
                    'dni', 
                    'username', 
                    'password', 
                    'name', 
                    'lastname', 
                    'age',
                    'email',
                    'telephone_number',
                    'city',
                    'address'
                    ]

