from authentication.models.specialist import Specialist
from rest_framework import serializers

class SpecialistSerializer (serializers.ModelSerializer):
    class Meta:
        model = Specialist
        fields = '__all__'