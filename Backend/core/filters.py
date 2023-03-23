from django_filters import rest_framework as filters


from django_filters import rest_framework as filters
from .models import Post

    
  
class PostFilterSet(filters.FilterSet):

    author = filters.CharFilter(field_name="author__username", lookup_expr="exact")
    slug = filters.CharFilter(lookup_expr="exact")
    content = filters.CharFilter(field_name="content", lookup_expr="icontains")
    class Meta:
        model = Post
        fields = ["author", "slug", "content"]