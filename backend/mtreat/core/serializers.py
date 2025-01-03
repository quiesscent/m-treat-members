# users/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model

User  = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'number', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'number']

    def validate_phone(self, value):
        if len(str(value)) < 10:
            raise serializers.ValidationError("Phone number must be at least 10 digits.")
        return value
