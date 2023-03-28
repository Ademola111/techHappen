
from django.db import models
from  .utils import news_image_path
from django.utils.text import slugify

Category_choices={
    ('tech', 'Tech News'),
    ('love', 'Love News'),
    ('fintech', 'Fintech News'),
}

class Category(models.Model):
    category=models.CharField(max_length=50, choices=Category_choices)
    def __str__(self):
        return self.category
    

class Comment(models.Model):
    content = models.TextField()
    newsid = models.ForeignKey('News', related_name='comment', on_delete=models.CASCADE)
    moderated=models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-updated_at',)

    def __str__(self):
        return self.content


class News(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=255, allow_unicode=True, editable=False)
    content = models.TextField()
    image = models.ImageField(upload_to=news_image_path)
    category = models.ForeignKey(Category, related_name='news', on_delete=models.CASCADE)
    commentid = models.ForeignKey(Comment, related_name='news', null=True, on_delete=models.CASCADE)
    moderated=models.BooleanField(default=False)
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


