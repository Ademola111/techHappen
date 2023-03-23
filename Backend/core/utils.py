def news_image_path(instance, filename):
    # Use the category name to determine the subdirectory to save the image to
    subdirectory = instance.category.name.lower()
    return f'news/{subdirectory}/{filename}'
