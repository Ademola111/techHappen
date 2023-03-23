from .models import Category,News
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
class SearchSerializer(serializers.Serializer):
    query = serializers.CharField(max_length=100)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        
        model = Category
        verbose_name_plural = _("Categories")
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
        read_only_fields = ['slug']
