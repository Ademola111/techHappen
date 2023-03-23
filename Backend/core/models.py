
from django.db import models
from  .utils import news_image_path
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
tech_category = Category.objects.create(name='Tech News')
love_category = Category.objects.create(name='Love News')
fintech_category = Category.objects.create(name='Fintech News')

class News(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=255, allow_unicode=True, editable=False)
    content = models.TextField()
    image = models.ImageField(upload_to=news_image_path)
    category = models.ForeignKey(Category, related_name='news', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-updated_at',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title, allow_unicode=True)
        super().save(*args, **kwargs)

