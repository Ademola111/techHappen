from .models import Category
from .serializers import CategorySerializer
from rest_framework import generics, status,permissions
from rest_framework.response import Response
from .models import News
from .serializers import NewsSerializer, SearchSerializer

class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class NewsListCreateAPIView(generics.ListCreateAPIView):
    queryset = News.objects.all().order_by('-created_at')
    serializer_class = NewsSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class NewsRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class NewsSearchView(generics.ListAPIView):
    serializer_class = NewsSerializer
    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryset = News.objects.filter(title__icontains=query)
        return queryset

    def get(self, request, *args, **kwargs):
        serializer = SearchSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        queryset = self.get_queryset()
        serializer = NewsSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)